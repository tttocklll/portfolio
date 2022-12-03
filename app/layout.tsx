import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col mx-auto px-4 min-h-screen">
          <Header />
          <div className="flex-1 mx-auto max-w-4xl px-4 sm:px-6 my-4">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
