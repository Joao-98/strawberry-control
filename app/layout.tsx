import { Header } from "./components/header";
import "./globals.css";
import { SummaryProvider } from "./context/SummaryContext";
import { LanguageProvider } from "./context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-slate-100">
        <LanguageProvider>
          <SummaryProvider>
            <div className="flex flex-col flex-1 bg-slate-100">
              <Header />
              <main className="flex-1 overflow-y-auto px-4 py-4">
                <div className="mx-auto max-w-4xl h-full">{children}</div>
              </main>
            </div>
          </SummaryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
