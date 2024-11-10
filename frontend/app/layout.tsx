import type { Metadata } from "next";
import "./globals.css";
import ProviderLayout from "@/Providers/StoreProvider";

export const metadata: Metadata = {
  title: "HireHalo",
  description: "Connecting Dreams with Opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">

      <body
        className={""}
      >
        <ProviderLayout>
          {
            children
          }

        </ProviderLayout>
         
      </body>
    </html>
  );
}
