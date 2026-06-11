"use client";

import { SummaryCard } from "../components/summarycard";
import { useSummary } from "../context/SummaryContext";
import { useTranslation } from "../hooks/useTranslation";

export default function Summary() {
  const { summary } = useSummary();
  const t = useTranslation();

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-2">{t.summaryTitle}</h1>

      <p className="text-gray-600 mb-6">{t.summaryDesc}</p>

      <div className="grid gap-4 md:grid-cols-2">
        <SummaryCard
          title={t.boughtBoxesName}
          value={String(summary.boughtBoxes)}
        />

        <SummaryCard
          title={t.soldBoxesName}
          value={String(summary.soldBoxes)}
        />

        <SummaryCard
          title={t.totalSpent}
          value={`R$ ${summary.totalSpent.toFixed(2)}`}
        />

        <SummaryCard
          title={t.totalRevenue}
          value={`R$ ${summary.totalRevenue.toFixed(2)}`}
        />

        <SummaryCard
          title={t.profit}
          value={`R$ ${summary.profit.toFixed(2)}`}
        />

        <SummaryCard title={t.stock} value={`${summary.stock} ${t.boxName}`} />
      </div>
    </main>
  );
}
