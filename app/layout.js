import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grantly Tong | Portfolio",
  description: "Explore the portfolio of Grantly Tong, a software developer skilled in Java, Python, and web design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
  Built with ❤️ by Grantly Tong.
</footer>
      </body>
    </html>
  );
}
