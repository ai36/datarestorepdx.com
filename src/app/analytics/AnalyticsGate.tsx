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
  const cookieName = `analytics_${process.env.NEXT_PUBLIC_PROJECT_NAME.toLowerCase()}_consent`;
  
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    const consent = getCookie(cookieName);
    setIsAllowed(consent !== "denied");
  }, []);

  useEffect(() => {
    const onGranted = () => setIsAllowed(true);
    const onDenied = () => setIsAllowed(false);

    window.addEventListener(`${cookieName}-granted`, onGranted);
    window.addEventListener(`${cookieName}-denied`, onDenied);

    return () => {
      window.removeEventListener(`${cookieName}-granted`, onGranted);
      window.removeEventListener(`${cookieName}-denied`, onDenied);
    };
  }, []);

  if (!isProdDeployment) return null;
  if (!gaId) return null;
  if (!isAllowed) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
