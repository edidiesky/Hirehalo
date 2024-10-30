import type { Metadata } from "next";
import "./globals.css";
import ModalContextLayout from "@/components/common/ModalContextLayout";

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
        <ModalContextLayout>
          {
            children
          }
        </ModalContextLayout>

      </body>
    </html>
  );
}
