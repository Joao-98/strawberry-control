import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <h2 className="text-2xl font-semibold mb-2">Bem-vindo</h2>

      <p className="text-gray-600 mb-6">
        Controle diário de compra e venda de morangos.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Link
          href="/buy"
          className="rounded-xl border p-6 hover:bg-gray-50 transition"
        >
          <h3 className="text-lg font-medium mb-1">🍓 Compra</h3>
          <p className="text-sm text-gray-600">Registrar compras do dia</p>
        </Link>

        <Link
          href="/sell"
          className="rounded-xl border p-6 hover:bg-gray-50 transition"
        >
          <h3 className="text-lg font-medium mb-1">📦 Venda</h3>
          <p className="text-sm text-gray-600">Registrar vendas do dia</p>
        </Link>

        <Link
          href="/status"
          className="rounded-xl border p-6 hover:bg-gray-50 transition"
        >
          <h3 className="text-lg font-medium mb-1">📊 Relatório</h3>
          <p className="text-sm text-gray-600">Visualizar resumo diário</p>
        </Link>
      </div>
    </main>
  );
}
