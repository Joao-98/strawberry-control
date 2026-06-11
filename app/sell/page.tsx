"use client";

import { StrawberryForm } from "../components/strawberryform";
import { useTranslation } from "../hooks/useTranslation";

export default function SellPage() {
  const t = useTranslation();

  return (
    <StrawberryForm
      title={t.sellTitle}
      description={t.sellDesc}
      personLabel={t.personNameSell}
      submitLabel={t.sellTitle}
      storageKey="sells"
      buttonColorClass="bg-green-600 hover:bg-green-700"
    />
  );
}
