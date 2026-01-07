import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="h-screen overflow-hidden">
        <div className="flex h-full flex-col bg-slate-100">
          <header className="h-16 flex-shrink-0 border-b bg-red-100 px-6 flex items-center">
            <Link href="/" className="font-semibold text-lg">
              🍓 Strawberry Control
            </Link>
          </header>

          <main className="flex-1 overflow-hidden px-4 p-4">
            <div className="mx-auto max-w-4xl h-full">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
