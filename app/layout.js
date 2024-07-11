import { Space_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/utils/providers";
const spaceMono = Space_Mono({ weight:['400', '700'], subsets: ["latin"] });

export const metadata = {
  title: "Salin Shain",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <head>
          <meta name="google-site-verification" content="qfryVw2f8Zewp0PBJv8Phx7hi8SW2_rfQZUmdy9dwGs" />
        </head>
        <body className={spaceMono.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
  );
}
