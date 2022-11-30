import Head from "next/head";
import Header from "./Header";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="tttocklll's Portfolio" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>tttocklll&apos;s Portfolio</title>
      </Head>
      <Header />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">{children}</div>
      <footer></footer>
    </div>
  );
}
