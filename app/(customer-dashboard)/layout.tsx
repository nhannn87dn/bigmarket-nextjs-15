import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "@/app/globals.css";
import { settings } from "@/constants/settings";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: settings.metaTitle,
  description: settings.metaDesc,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang={settings.langDefault}>
      <body
        className={`${roboto.className} customer-dashboard-layout antialiased`}
      >
        {children}
      
      </body>
    </html>
  );
}