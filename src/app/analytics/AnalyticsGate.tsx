"use client";

import { useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

function getCookie(name: string) {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : null;
}

export function AnalyticsGate({ gaId, isProdDeployment }: { gaId: string; isProdDeployment: boolean }) {
  const cookieName = `analytics_${process.env.NEXT_PUBLIC_PROJECT_NAME.toLowerCase()}_consent`;

  useEffect(() => {
    if (!isProdDeployment || !gaId) return;

    const consent = getCookie(cookieName);
    const granted = consent === "granted";

    window.gtag?.("consent", "default", {
      analytics_storage: granted ? "granted" : "denied",
    });

    const onGranted = () => {
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
      window.gtag?.("event", "page_view");
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
  }, [gaId, isProdDeployment]);

  if (!isProdDeployment || !gaId) return null;

  return <GoogleAnalytics gaId={gaId} />;
}