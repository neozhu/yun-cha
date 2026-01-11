import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "云茶 Yun Chá | 高端茶礼 · 办公室茶席",
  description: "红茶、乌龙、普洱的高定茶礼与办公室茶席，附冲泡曲线与礼赠服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
