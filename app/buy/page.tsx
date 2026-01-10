"use client";
import React, { useState } from "react";

type Buy = {
  id: string;
  nameOfSeller: string;
  quality: string;
  quantity: number;
  price: number;
  total: number;
  createdAt: string;
};

type BuyFormValues = {
  nameOfSeller: string;
  quality: string;
  quantity: number;
  price: number;
};

const initialValues: BuyFormValues = {
  nameOfSeller: "",
  quality: "",
  quantity: 0,
  price: 0,
};

export default function BuyPage() {
  const [values, setValues] = useState(initialValues);
  const total = values.price * values.quantity;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "price" ? Number(value) : value,
    }));
  };

  const isFormValid =
    values.nameOfSeller.trim() !== "" &&
    values.quality !== "" &&
    values.quantity > 0 &&
    values.price > 0;

  const saveBuyToLocalStorage = (buy: Buy) => {
    const stored = localStorage.getItem("strawberry:buys");
    const buys = stored ? JSON.parse(stored) : [];

    buys.push(buy);

    localStorage.setItem("strawberry:buys", JSON.stringify(buys));
  };

  const handleSubmit = () => {
    const buy = {
      id: crypto.randomUUID(),
      nameOfSeller: values.nameOfSeller,
      quality: values.quality,
      quantity: values.quantity,
      price: values.price,
      total,
      createdAt: new Date().toISOString(),
    };

    saveBuyToLocalStorage(buy);
    setValues(initialValues);
  };

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-2">Registrar compra</h1>

      <p className="text-gray-600 mb-6">
        Registre as compras de morango realizadas hoje.
      </p>

      <div className="bg-white rounded-xl shadow-sm p-6 max-w-xl">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Vendedor</label>
            <input
              type="text"
              placeholder="Nome do vendedor"
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              value={values.nameOfSeller}
              onChange={handleInputChange}
              name="nameOfSeller"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Qualidade do morango
            </label>
            <select
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              value={values.quality}
              onChange={handleInputChange}
              name="quality"
            >
              <option value="">Selecione</option>
              <option value="cristal">Cristal</option>
              <option value="sanAndreasOld">San Andreas velho</option>
              <option value="sanAndreasNew">San Andreas novo</option>
              <option value="aromasOld">Aromas velho</option>
              <option value="aromasNew">Aromas novo</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Quantidade de caixas
            </label>
            <input
              type="number"
              min={0}
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              value={values.quantity}
              onChange={handleInputChange}
              name="quantity"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Preço por caixa (R$)
            </label>
            <input
              type="number"
              min={0}
              step="0.01"
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              value={values.price}
              onChange={handleInputChange}
              name="price"
            />
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-gray-600">Total</p>
            <p className="text-xl font-semibold">R$ {total.toFixed(2)}</p>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`w-full mt-4 rounded-md py-2 text-sm font-medium transition
    ${
      isFormValid
        ? "bg-red-600 text-white hover:bg-red-700"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }
  `}
          >
            Registrar compra
          </button>
        </form>
      </div>
    </main>
  );
}
