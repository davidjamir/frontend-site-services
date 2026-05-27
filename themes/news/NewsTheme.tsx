"use client";

import { useSite } from "@/hooks/use-site";
import NewHeader from "./NewsHeader";
import NewsFooter from "./NewsFooter";
import { Separator } from "@/components/ui/separator"

export default function NewsTheme({ children }: { children: React.ReactNode }) {
    const { site } = useSite();

    return (
        <div className="min-h-screen flex flex-col overflow-hidden">
            {/* HEADER */}
            <div className="w-full py-4 px-2 lg:px-4">
                <NewHeader site={site} />
            </div>
            <Separator className="hidden md:block"/>
            {/* BODY LAYOUT */}
            <div className="flex-1 flex justify-center py-4 px-2 lg:px-4">
                {/* MAIN FULL WIDTH */}
                <main className="min-w-0 w-full max-w-300">{children}</main>
            </div>

            {/* FOOTER */}
            <div className="bg-black text-white">
                <NewsFooter />
            </div>
        </div>
    );
}
