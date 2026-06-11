"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Summary } from "../types/strawberry";

type SummaryContextType = {
  summary: Summary;
  refreshSummary: () => void;
};

const SummaryContext = createContext<SummaryContextType | undefined>(undefined);

export function SummaryProvider({ children }: { children: React.ReactNode }) {
  const [summary, setSummary] = useState({
    boughtBoxes: 0,
    soldBoxes: 0,
    totalSpent: 0,
    totalRevenue: 0,
    profit: 0,
    stock: 0,
  });

  const refreshSummary = () => {
    const buys = JSON.parse(localStorage.getItem("buys") || "[]");
    const sells = JSON.parse(localStorage.getItem("sells") || "[]");

    const boughtBoxes = buys.reduce(
      (acc: number, item: any) => acc + Number(item.quantity),
      0,
    );

    const soldBoxes = sells.reduce(
      (acc: number, item: any) => acc + Number(item.quantity),
      0,
    );

    const totalSpent = buys.reduce(
      (acc: number, item: any) =>
        acc + Number(item.quantity) * Number(item.price),
      0,
    );

    const totalRevenue = sells.reduce(
      (acc: number, item: any) =>
        acc + Number(item.quantity) * Number(item.price),
      0,
    );

    const profit = totalRevenue - totalSpent;
    const stock = boughtBoxes - soldBoxes;

    setSummary({
      boughtBoxes,
      soldBoxes,
      totalSpent,
      totalRevenue,
      profit,
      stock,
    });
  };

  useEffect(() => {
    refreshSummary();
  }, []);

  return (
    <SummaryContext.Provider
      value={{
        summary,
        refreshSummary,
      }}
    >
      {children}
    </SummaryContext.Provider>
  );
}

export function useSummary() {
  const context = useContext(SummaryContext);

  if (!context) {
    throw new Error("useSummary must be used inside SummaryProvider");
  }

  return context;
}
