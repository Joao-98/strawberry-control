import Link from "next/link";
import { ReactNode } from "react";

type NavCardVariant = "buy" | "sell" | "report";

type NavCardProps = {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  variant: NavCardVariant;
};

const titleColorByVariant: Record<NavCardVariant, string> = {
  buy: "text-red-600",
  sell: "text-green-600",
  report: "text-purple-600",
};

export function NavCard({
  href,
  title,
  description,
  icon,
  variant,
}: NavCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        rounded-xl
        bg-white
        p-4
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <div className="mb-3 text-2xl">{icon}</div>

      <h3
        className={`text-lg font-semibold mb-1 ${titleColorByVariant[variant]}`}
      >
        {title}
      </h3>

      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
}
