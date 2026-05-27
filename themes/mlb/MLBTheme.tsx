'use client'
import { useSite } from "@/hooks/use-site"

export default function MLBTheme({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const site = useSite();

    return <div>{children}</div>;
}
