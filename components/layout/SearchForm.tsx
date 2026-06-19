"use client";

import { Search } from "lucide-react";
import { useState, useRef } from "react";

import { usePathname, useRouter } from "next/navigation";
import { useSite } from "@/hooks/use-site";

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";

export default function SearchForm() {
    const router = useRouter();
    const { site } = useSite()

    const pathname = usePathname();
    const previousPath = useRef(pathname);

    const [value, setValue] = useState("");

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const next = e.target.value;

        setValue(next);

        // clear search
        if (pathname.startsWith("/search") && !next.trim()) {
            router.push(previousPath.current);
        }
    };

    const onSubmit = () => {
        const q = value.trim();

        if (!q) return;

        // lưu route trước search
        if (!pathname.startsWith("/search")) {
            previousPath.current = pathname;
        }

        router.push(`/search?q=${encodeURIComponent(q)}`);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    };

    return (<div id="search-form" className="w-full max-w-xs">
        <InputGroup className="w-full lg:h-10 min-w-0 " style={{
            borderColor: site.config.colorTextHeader,
            color: site.config.colorTextHeader,
        }}>
            <InputGroupInput
                placeholder="Search..."
                value={value}
                onChange={onChangeValue}
                onKeyDown={onKeyDown}
            />

            <InputGroupAddon
                align="inline-end"
                onClick={onSubmit}
                className="cursor-pointer transition-colors p-2 rounded-md"
                style={{
                    backgroundColor: `color-mix(in srgb, ${site.config.colorTextHeader} 10%, transparent)`
                }}
            >
                <Search style={{
                    color: site.config.colorTextHeader,
                }} />
            </InputGroupAddon>
        </InputGroup>
    </div>
    );
}
