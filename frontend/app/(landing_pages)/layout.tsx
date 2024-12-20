import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ProviderLayout from "@/Providers/StoreProvider";

export const metadata: Metadata = {
    title: "HireHalo",
    description: "Connecting Dreams with Opportunities",
};

export default function LandingPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
      <div className="w-full">
            <Header />
            {children}
            <Footer />
      </div>
    );
}
