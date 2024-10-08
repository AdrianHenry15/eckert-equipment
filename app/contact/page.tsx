import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Eckert Equipment",
    description: "Get our attention",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function ContactPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen relative w-full">
            Contact Page
        </div>
    );
}
