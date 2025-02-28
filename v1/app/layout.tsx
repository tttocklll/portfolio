import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
        <div className="mx-auto flex min-h-screen flex-col px-4">
          <Header />
          <div className="mx-auto my-4 max-w-4xl flex-1 px-4 sm:px-6">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
