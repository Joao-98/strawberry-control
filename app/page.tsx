"use client";

import { NavCard } from "./components/navcard";
import { useTranslation } from "./hooks/useTranslation";

export default function Home() {
  const t = useTranslation();

  return (
    <main>
      <h2 className="text-2xl font-semibold mb-2">{t.initialPageTitle}</h2>

      <p className="text-gray-600 mb-8">{t.initialPageSubtitle}</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <NavCard
          href="/buy"
          title={t.buyTitle}
          description={t.buyDesc}
          icon="🍓"
          variant="buy"
        />

        <NavCard
          href="/sell"
          title={t.sellTitle}
          description={t.sellDesc}
          icon="📦"
          variant="sell"
        />

        <NavCard
          href="/summary"
          title={t.summaryTitle}
          description={t.summaryDesc}
          icon="📊"
          variant="report"
        />
      </div>
    </main>
  );
}
