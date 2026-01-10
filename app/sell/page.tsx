import { StrawberryForm } from "../components/strawberryform";

export default function SellPage() {
  return (
    <StrawberryForm
      title="Registrar venda"
      description="Registre as vendas de morango realizadas hoje."
      personLabel="Comprador"
      submitLabel="Registrar venda"
      storageKey="sells"
      buttonColorClass="bg-green-600 hover:bg-green-700"
    />
  );
}
