"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { LocationId } from "./constants";

interface LocationContextValue {
  selectedLocation: LocationId | null;
  setLocation: (id: LocationId) => void;
  showPicker: boolean;
  dismissPicker: () => void;
  hydrated: boolean;
}

const LocationContext = createContext<LocationContextValue>({
  selectedLocation: null,
  setLocation: () => {},
  showPicker: false,
  dismissPicker: () => {},
  hydrated: false,
});

const STORAGE_KEY = "kays-location";

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [selectedLocation, setSelectedLocation] = useState<LocationId | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as LocationId | null;
    if (stored === "causeway" || stored === "bearss") {
      setSelectedLocation(stored);
    } else {
      setShowPicker(true);
    }
    setHydrated(true);
  }, []);

  const setLocation = useCallback((id: LocationId) => {
    setSelectedLocation(id);
    localStorage.setItem(STORAGE_KEY, id);
    setShowPicker(false);
  }, []);

  const dismissPicker = useCallback(() => {
    setSelectedLocation("bearss");
    localStorage.setItem(STORAGE_KEY, "bearss");
    setShowPicker(false);
  }, []);

  return (
    <LocationContext.Provider value={{ selectedLocation, setLocation, showPicker, dismissPicker, hydrated }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}
