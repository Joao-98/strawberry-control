"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Summary = {
  bought: number;
  sold: number;
};

export function Header() {
  const [summary, setSummary] = useState<Summary>({
    bought: 0,
    sold: 0,
  });

  useEffect(() => {
    const buys = JSON.parse(localStorage.getItem("buys") || "[]");
    const sells = JSON.parse(localStorage.getItem("sells") || "[]");

    const bought = buys.reduce(
      (acc: number, item: any) => acc + Number(item.quantity),
      0
    );

    const sold = sells.reduce(
      (acc: number, item: any) => acc + Number(item.quantity),
      0
    );

    setSummary({ bought, sold });
  }, [summary.bought, summary.sold]);

  return (
    <header className="h-16 flex-shrink-0 border-b bg-red-50 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          🍓 Strawberry Control
        </Link>

        <div className="text-sm text-gray-600 flex gap-4">
          <span>
            Compradas:
            <strong className="text-gray-900">{Number(summary.bought)}</strong>
          </span>
          <span>
            Vendidas:
            <strong className="text-gray-900">{Number(summary.sold)}</strong>
          </span>
        </div>
      </div>
    </header>
  );
}
