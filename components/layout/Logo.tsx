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
            <div className={`flex items-center justify-center ${logoSizes[size]}`}>
                <Image
                    src={logo}
                    alt="Logo"
                    width={200}
                    height={200}
                    className="max-w-full max-h-full shrink-0 object-contain"
                    style={{
                        filter: "drop-shadow(0 0 1px rgba(255,255,255))",
                    }}
                />
            </div>

            {/* Wordmark */}
            {wordmark && (
                <Image
                    src={wordmark}
                    alt="Wordmark"
                    width={1000}
                    height={300}
                    style={{
                        filter: "drop-shadow(0 0 0.5px rgba(255,255,255))",
                    }}
                    className={`${wordmarkSizes[size]} w-auto object-contain`}
                />
            )}
        </Link>
    );
}
