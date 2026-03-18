"use client";

import { LocationProvider } from "@/lib/location-context";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <LocationProvider>{children}</LocationProvider>;
}
