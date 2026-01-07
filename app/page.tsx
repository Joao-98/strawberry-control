import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-2">Bem-vindo</h2>

      <p className="text-gray-600 mb-6">
        Controle diário de compra e venda de morangos.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Link
          href="/buy"
          className="rounded-xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <h3 className="text-lg font-medium mb-1 text-red-600">🍓 Compra</h3>
          <p className="text-sm text-gray-600">Registrar compras do dia</p>
        </Link>

        <Link
          href="/sell"
          className="rounded-xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <h3 className="text-lg font-medium mb-1 text-green-600">📦 Venda</h3>
          <p className="text-sm text-gray-600">Registrar vendas do dia</p>
        </Link>

        <Link
          href="/status"
          className="rounded-xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <h3 className="text-lg font-medium mb-1 text-purple-600">
            📊 Relatório
          </h3>
          <p className="text-sm text-gray-600">Visualizar resumo diário</p>
        </Link>
      </div>
    </main>
  );
}
