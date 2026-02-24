"use client";

import { useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

function getCookie(name: string) {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : null;
}

export function AnalyticsGate({
  gaId,
}: {
  gaId: string;
}) {
  const cookieName = `analytics_${process.env.NEXT_PUBLIC_PROJECT_NAME.toLowerCase()}_consent`;

  useEffect(() => {
    if (!gaId) return;

    const consent = getCookie(cookieName);
    const isDenied = consent === "denied";

    window.gtag?.("consent", "default", {
      analytics_storage: isDenied ? "denied" : "granted",
    });

    const onGranted = () => {
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
    };
    const onDenied = () => {
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
    };

    window.addEventListener(`${cookieName}-granted`, onGranted);
    window.addEventListener(`${cookieName}-denied`, onDenied);

    return () => {
      window.removeEventListener(`${cookieName}-granted`, onGranted);
      window.removeEventListener(`${cookieName}-denied`, onDenied);
    };
  }, [gaId]);

  const consent =
    typeof document !== "undefined" ? getCookie(cookieName) : null;
  if (!gaId || consent === "denied") return null;

  return <GoogleAnalytics gaId={gaId} />;
}
