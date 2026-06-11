"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "pt" | "en" | "es";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("language");

    if (stored === "pt" || stored === "en" || stored === "es") {
      setLanguageState(stored);
    }

    setIsLoaded(true);
  }, []);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;

    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  if (!isLoaded) return null;

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
