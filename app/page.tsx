import { NavCard } from "./components/navcard";

export default function Home() {
  return (
    <main>
      <h2 className="text-2xl font-semibold mb-2">Bem-vindo</h2>

      <p className="text-gray-600 mb-8">
        Controle diário de compra e venda de morangos.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <NavCard
          href="/buy"
          title="Compra"
          description="Registrar compras do dia"
          icon="🍓"
          variant="buy"
        />

        <NavCard
          href="/sell"
          title="Venda"
          description="Registrar vendas do dia"
          icon="📦"
          variant="sell"
        />

        <NavCard
          href="/summary"
          title="Relatório"
          description="Visualizar resumo diário"
          icon="📊"
          variant="report"
        />
      </div>
    </main>
  );
}
