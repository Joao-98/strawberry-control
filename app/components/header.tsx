"use client";

import Link from "next/link";
import { useSummary } from "../context/SummaryContext";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

export function Header() {
  const { summary } = useSummary();
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  return (
    <header className="border-b bg-white px-4 md:px-6">
      <div className="max-w-4xl mx-auto py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <Link
          href="/"
          className="font-semibold text-base md:text-lg whitespace-nowrap"
        >
          {t.appName}
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <span>{t.bought}:</span>
              <strong className="text-gray-900">{summary.boughtBoxes}</strong>
            </span>

            <span className="flex items-center gap-1">
              <span>{t.sold}:</span>
              <strong className="text-gray-900">{summary.soldBoxes}</strong>
            </span>
          </div>

          <div className="hidden md:block text-gray-300">|</div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as "pt" | "en" | "es")}
            className="bg-white border rounded-md px-2 py-1 text-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-red-200"
          >
            <option value="pt">PT</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>
      </div>
    </header>
  );
}
