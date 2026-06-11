type Props = {
  title: string;
  value: string;
};

export function SummaryCard({ title, value }: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>

      <h2 className="mt-2 text-2xl font-semibold">{value}</h2>
    </div>
  );
}
