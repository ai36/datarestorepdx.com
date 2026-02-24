import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name: string;
  phone: string;
  email?: string;
  deviceType?: string;
  description?: string;

  hp?: string;
  formStartedAt?: number;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getAllowedOrigins(): string[] {
  const raw = process.env.ALLOWED_ORIGINS || "";
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function looksSpammyText(s: string) {
  const lower = s.toLowerCase();
  if (lower.includes("http://") || lower.includes("https://") || lower.includes("www.")) return true;
  const nonWord = (s.match(/[^\w\s]/g) || []).length;
  if (s.length >= 80 && nonWord / s.length > 0.25) return true;
  return false;
}

export async function POST(req: Request) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { ok: false, error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID" },
        { status: 500 }
      );
    }

    const allowed = getAllowedOrigins();
    if (allowed.length > 0) {
      const origin = req.headers.get("origin") || "";
      const referer = req.headers.get("referer") || "";

      const ok = allowed.some((a) => origin === a || referer.startsWith(a));
      if (!ok) {
        return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
      }
    }

    const ua = req.headers.get("user-agent") || "";
    if (!ua) {
      return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
    }

    const body = (await req.json()) as Payload;

    if (body.hp && body.hp.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const startedAt = Number(body.formStartedAt || 0);
    if (!startedAt || Number.isNaN(startedAt)) {
      return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
    }
    const elapsed = Date.now() - startedAt;
    if (elapsed < 2000) {
      return NextResponse.json({ ok: true });
    }

    const name = (body.name || "").trim();
    const phone = (body.phone || "").trim();
    const email = (body.email || "").trim();
    const deviceType = (body.deviceType || "").trim();
    const description = (body.description || "").trim();

    if (!name || !phone || !email || !deviceType || !description) {
      return NextResponse.json(
        { ok: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    if (looksSpammyText(description)) {
      return NextResponse.json({ ok: true });
    }

    const text =
      `<b>New form request</b>\n` +
      `<b>Name:</b> ${escapeHtml(name)}\n` +
      `<b>Phone:</b> ${escapeHtml(phone)}\n` +
      `<b>Email:</b> ${escapeHtml(email)}\n` +
      `<b>Device:</b> ${escapeHtml(deviceType)}\n` +
      `<b>Description:</b> ${escapeHtml(description)}\n` +
      `<b>Elapsed:</b> ${elapsed}ms`;

    const tgUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    const tgRes = await fetch(tgUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const tgJson = await tgRes.json();

    if (!tgRes.ok || !tgJson.ok) {
      return NextResponse.json(
        { ok: false, error: "Telegram API error", details: tgJson },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}