import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import AuthContextProvider from "@/app/_utils/auth-context";
import CustomerLogin from "@/app/_components/client-side/customer-login";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Auto 5",
  description: "The best way to rent game cards",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthContextProvider needLogin={false}>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
