"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {
    logo: string;
    wordmark?: string;
    size: keyof typeof logoSizes | keyof typeof wordmarkSizes;
};

const logoSizes = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-20 w-20",
};

const wordmarkSizes = {
    small: "h-6 max-w-40",
    medium: "h-12 max-w-56",
    large: "h-16 max-w-80",
};

export default function Logo({ logo, wordmark, size }: Props) {
    return (
        <Link href="/" className="flex items-center gap-3 border-none">
            {/* Logo */}
            <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
                className={`${logoSizes[size]} shrink-0 object-contain`}
            />

            {/* Wordmark */}
            {wordmark && (
                <Image
                    src={wordmark}
                    alt="Wordmark"
                    width={1000}
                    height={300}
                    className={`${wordmarkSizes[size]} w-auto object-contain`}
                />
            )}
        </Link>
    );
}
