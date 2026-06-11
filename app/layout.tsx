import { Header } from "./components/header";
import "./globals.css";
import { SummaryProvider } from "./context/SummaryContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="h-screen overflow-hidden">
        <SummaryProvider>
          <div className="flex h-full flex-col bg-slate-100">
            <Header />
            <main className="flex-1 overflow-hidden px-4 p-4">
              <div className="mx-auto max-w-4xl h-full">{children}</div>
            </main>
          </div>
        </SummaryProvider>
      </body>
    </html>
  );
}
