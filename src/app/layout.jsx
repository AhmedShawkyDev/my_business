import { Fira_Code } from "next/font/google";
import "./globals.css";

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata = {
  title: "Ahmed Shawky | Digital Business Card",
  description: "Welcome to my Digital Business Card",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fira.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col  bg-[#20242B] ">
        {children}
      </body>
    </html>
  );
}

