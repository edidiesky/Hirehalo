import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/common/Header";
import ModalContextLayout from "@/components/common/ModalContextLayout";
import Footer from "@/components/common/Footer";

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
        <html lang="en">
            <body
                className={""}
            >
                <ModalContextLayout>
                    <div className="w-full flex relative flex-col">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </ModalContextLayout>
                

            </body>
        </html>
    );
}
