"use client";

import { useEffect, useState } from "react";

function getCookie(name: string) {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : null;
}

function setCookie(name: string, value: string, days = 365) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie("analytics_consent");
    setVisible(consent !== "granted" && consent !== "denied");
  }, []);

  if (!visible) return null;

  return (
    <section className="fixed w-full bottom-0 p-8 bg-background text-foreground z-9999 shadow-lg border border-border">
      <div className="container mx-auto">
        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
          We value your privacy
        </h2>
        <p className="font-display text-md text-foreground mb-6">
          We use cookies and similar technologies to collect aggregated
          analytics data that helps us understand how the site is used and
          improve its performance and user experience. Analytics data may be
          collected through third-party services.
        </p>

        <div className="flex gap-2 justify-end">
          <button
            type="submit"
            className="bg-accent-gradient text-accent-foreground font-semibold px-8 py-4 rounded-lg text-center hover:opacity-90 transition-opacity text-base"
            onClick={() => {
              setCookie("analytics_consent", "granted");
              setVisible(false);
              window.dispatchEvent(new Event("analytics-consent-granted"));
            }}
          >
            Accept
          </button>
          <button
            type="submit"
            className="border border-primary/30 dark:border-primary/30 text-primary dark:text-primary font-medium px-8 py-4 rounded-lg text-center hover:bg-primary/10 transition-colors text-base"
            onClick={() => {
              setCookie("analytics_consent", "denied");
              setVisible(false);
            }}
          >
            Decline
          </button>
        </div>
      </div>
    </section>
  );
}
