import "./globals.css";
import { Sidebar } from "../components/Sidebar";

export const metadata = {
  title: "Moja Aplikacja",
  description: "Przykładowa aplikacja z sidebar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen flex flex-row">
        <Sidebar />
        <main className="flex-1 p-4 overflow-auto">{children}</main>
      </body>
    </html>
  );
}
