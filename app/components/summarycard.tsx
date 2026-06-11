type Props = {
  title: string;
  value: string;
};

export function SummaryCard({ title, value }: Props) {
  return (
    <div
      className="
        rounded-xl
        bg-white
        p-4
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <p className="text-sm text-gray-500">{title}</p>

      <h2 className="mt-2 text-2xl font-semibold text-gray-900">{value}</h2>
    </div>
  );
}
