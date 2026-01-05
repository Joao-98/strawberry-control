import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-100">
        <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b flex items-center px-6 z-50">
          <Link href="/" className="font-semibold text-lg">
            🍓 Strawberry Control
          </Link>
        </header>

        <main className="pt-20 px-4">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
