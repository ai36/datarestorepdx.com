"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useState } from "react";
import { AnalyticsGate, CookieBanner } from "./analytics";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "";
  const isProdDeployment = process.env.VERCEL_ENV === "production";

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
          <CookieBanner />
        </TooltipProvider>
      </QueryClientProvider>
      <AnalyticsGate gaId={gaId} isProdDeployment={isProdDeployment} />
    </>
  );
}
