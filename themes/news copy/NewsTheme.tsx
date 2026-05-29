"use client";

import { useSite } from "@/hooks/use-site";
import NewHeader from "./NewsHeader";
import NewsFooter from "./NewsFooter";

export default function NewsTheme({ children }: { children: React.ReactNode }) {
    const { site } = useSite();

    return (
        <div className="min-h-screen flex flex-col bg-gray-700">
            {/* HEADER */}
            <div className="w-full py-4 px-2 lg:px-6">
                <NewHeader site={site} />
            </div>

            {/* SCRIPTS ADS HEADER */}
            <div className="bg-amber-300 w-full min-h-1"></div>

            {/* MID BLOCK (NEW) */}
            {
                site.ads.adsScript?.adsHeader && (
                    <div className="w-full py-4 px-2 lg:px-6">
                        <div className="max-w-370 mx-auto min-h-25 lg:min-h-55  items-center justify-between">
                        </div>
                    </div>
                )
            }

            {/* BODY LAYOUT */}
            <div className="flex-1 flex justify-center py-4 px-2 lg:px-6">
                {/* CENTER CONTAINER */}
                <div className="w-full max-w-370 grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] gap-4">
                    {/* LEFT ADS */}
                    <aside className="hidden lg:block"></aside>

                    {/* MAIN FULL WIDTH */}
                    <main className="min-w-0 w-full">
                        {children}
                    </main>

                    {/* RIGHT ADS */}
                    <aside className="hidden lg:block"></aside>
                </div>
            </div>

            {/* SCRIPTS ADS FOOTER */}
            <div className="bg-amber-300 w-full min-h-10"></div>

            {/* FOOTER */}
            <div className="bg-black text-white">
                <NewsFooter />
            </div>
        </div>
    );
}
