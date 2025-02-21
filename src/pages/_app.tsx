import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css"; // Ensures Tailwind styles are applied

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Component {...pageProps} />
      </main>
    </>
  );
}
