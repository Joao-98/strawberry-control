"use client";
import { StrawberryForm } from "../components/strawberryform";
import { useTranslation } from "../hooks/useTranslation";

export default function BuyPage() {
  const t = useTranslation();

  return (
    <StrawberryForm
      title={t.buyTitle}
      description={t.buyDesc}
      personLabel={t.personNameSell}
      submitLabel={t.buyTitle}
      storageKey="buys"
      buttonColorClass="bg-red-600 hover:bg-red-700"
    />
  );
}
