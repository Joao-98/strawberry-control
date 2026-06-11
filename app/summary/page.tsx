"use client";

import { SummaryCard } from "../components/summarycard";
import { useSummary } from "../context/SummaryContext";

export default function Summary() {
  const { summary } = useSummary();

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-2">Relatório</h1>

      <p className="text-gray-600 mb-6">Resumo geral das movimentações.</p>

      <div className="grid gap-4 md:grid-cols-2">
        <SummaryCard
          title="Caixas compradas"
          value={String(summary.boughtBoxes)}
        />

        <SummaryCard
          title="Caixas vendidas"
          value={String(summary.soldBoxes)}
        />

        <SummaryCard
          title="Total gasto"
          value={`R$ ${summary.totalSpent.toFixed(2)}`}
        />

        <SummaryCard
          title="Total vendido"
          value={`R$ ${summary.totalRevenue.toFixed(2)}`}
        />

        <SummaryCard title="Lucro" value={`R$ ${summary.profit.toFixed(2)}`} />

        <SummaryCard title="Estoque atual" value={`${summary.stock} caixas`} />
      </div>
    </main>
  );
}
