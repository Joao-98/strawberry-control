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
    <header className="h-16 flex-shrink-0 border-b bg-red-50 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          {t.appName}
        </Link>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <div className="flex gap-4">
            <span>
              {t.bought}:
              <strong className="text-gray-900 ml-1">
                {summary.boughtBoxes}
              </strong>
            </span>

            <span>
              {t.sold}:
              <strong className="text-gray-900 ml-1">
                {summary.soldBoxes}
              </strong>
            </span>
          </div>

          <div>
            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value as "pt" | "en" | "es")
              }
              className="bg-white border rounded-md px-2 py-1 text-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              <option value="pt">PT</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
