"use client";

import Link from "next/link";
import { useSummary } from "../context/SummaryContext";

export function Header() {
  const { summary } = useSummary();

  return (
    <header className="h-16 flex-shrink-0 border-b bg-red-50 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          🍓 Strawberry Control
        </Link>

        <div className="text-sm text-gray-600 flex gap-4">
          <span>
            Compradas:
            <strong className="text-gray-900"> {summary.boughtBoxes}</strong>
          </span>

          <span>
            Vendidas:
            <strong className="text-gray-900"> {summary.soldBoxes}</strong>
          </span>
        </div>
      </div>
    </header>
  );
}
