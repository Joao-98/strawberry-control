import { StrawberryForm } from "../components/strawberryform";

export default function BuyPage() {
  return (
    <StrawberryForm
      title="Registrar compra"
      description="Registre as compras de morango realizadas hoje."
      personLabel="Vendedor"
      submitLabel="Registrar compra"
      storageKey="buys"
      buttonColorClass="bg-red-600 hover:bg-red-700"
    />
  );
}
