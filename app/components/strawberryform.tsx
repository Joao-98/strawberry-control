"use client";

import { useState } from "react";
import { StrawberryFormValues } from "../types/strawberry";
import { strawberryQualities } from "../constants/strawberryQualities";
import { useSummary } from "../context/SummaryContext";
import { useTranslation } from "../hooks/useTranslation";

type Props = {
  title: string;
  description: string;
  personLabel: string;
  submitLabel: string;
  storageKey: string;
  buttonColorClass: string;
};

const initialValues: StrawberryFormValues = {
  personName: "",
  quality: "",
  quantity: "",
  price: "",
  date: "",
};

export function StrawberryForm({
  title,
  description,
  personLabel,
  submitLabel,
  storageKey,
  buttonColorClass,
}: Props) {
  const [values, setValues] = useState(initialValues);
  const [toast, setToast] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const { refreshSummary } = useSummary();
  const t = useTranslation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showToast = (message: string) => {
    setToast(message);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2200);

    setTimeout(() => {
      setToast(null);
    }, 2600);
  };

  const quantity = Number(values.quantity);
  const price = Number(values.price);

  const total = quantity > 0 && price > 0 ? quantity * price : 0;

  const isValid =
    values.personName && values.quality && values.quantity && values.price;

  const handleSubmit = () => {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");

    localStorage.setItem(
      storageKey,
      JSON.stringify([
        ...stored,
        { ...values, date: new Date().toISOString() },
      ]),
    );

    refreshSummary();
    setValues(initialValues);

    showToast("Registro salvo com sucesso!");
  };

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-600 mb-6">{description}</p>

      <div className="bg-white rounded-xl shadow-sm p-6 max-w-xl">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              {personLabel}
            </label>
            <input
              name="personName"
              value={values.personName}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {t.quality}
            </label>
            <select
              name="quality"
              value={values.quality}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2 text-sm"
            >
              <option value="">{t.selectBox}</option>
              {strawberryQualities.map((q) => (
                <option key={q.value} value={q.value}>
                  {t[q.labelKey as keyof typeof t]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {t.quantity}
            </label>
            <input
              type="number"
              name="quantity"
              value={values.quantity}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{t.price}</label>
            <input
              type="number"
              name="price"
              value={values.price}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-gray-600">{t.total}</p>
            <p className="text-xl font-semibold">R$ {total.toFixed(2)}</p>
          </div>

          <button
            type="button"
            disabled={!isValid}
            onClick={handleSubmit}
            className={`
              w-full mt-4 rounded-md py-2 text-sm font-medium text-white
              transition disabled:opacity-50 disabled:cursor-not-allowed
              ${buttonColorClass}
            `}
          >
            {submitLabel}
          </button>
        </form>
      </div>

      {/* TOAST */}
      {toast && (
        <div
          className={`
            fixed bottom-4 right-4
            flex items-center gap-2
            px-4 py-2 rounded-md shadow-lg
            text-sm text-white bg-green-600

            transition-all duration-300 ease-out

            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
          `}
        >
          <span>✔</span>
          {toast}
        </div>
      )}
    </main>
  );
}
