"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : null;
}

export function AnalyticsGate({
  gaId,
  isProdDeployment,
}: {
  gaId: string;
  isProdDeployment: boolean;
}) {
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    const consent = getCookie("analytics_consent");
    setIsAllowed(consent !== "denied");
  }, []);

  useEffect(() => {
    const onGranted = () => setIsAllowed(true);
    const onDenied = () => setIsAllowed(false);

    window.addEventListener("analytics-consent-granted", onGranted);
    window.addEventListener("analytics-consent-denied", onDenied);

    return () => {
      window.removeEventListener("analytics-consent-granted", onGranted);
      window.removeEventListener("analytics-consent-denied", onDenied);
    };
  }, []);

  if (!isProdDeployment) return null;
  if (!gaId) return null;
  if (!isAllowed) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
