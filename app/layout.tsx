import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Link from "next/link";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
const sora = Sora({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hirrd | A job portal built with nextjs",
  description: "Get hired from here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        signIn: { baseTheme: dark },
      }}
    >
      <html lang="en">
        <body className={`${sora.className} `}>
          <div className="grid-background"></div>{" "}
          {/* Move background outside of the main layout */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen px-4 sm:px-20 ">
              <Header />

              {children}
            </main>
            <footer className="relative z-10 p-10 text-center bg-gray-800 text-2xl mt-10">
              Made with 💗 by{" "}
              <Link
                className="relative before:absolute before:-bottom-2 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:transform before:rounded-md before:bg-white before:transition-all before:duration-500 hover:before:w-full"
                href={"https://github.com/muhammadahmad1857"}
              >
                Muhammad Ahmad
              </Link>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
