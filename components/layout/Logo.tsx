"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {
    logo: string;
    size: keyof typeof sizes;
};
const sizes = {
    small: "h-6 w-6 lg:h-8 lg:w-8",
    medium: "h-10 lg:h-12",
    large: "h-16 w-16 lg:h-20 lg:w-20",
};

export default function Logo({ logo, size }: Props) {
    return (
        <Link href="/" className="block border-none">
            <Image
                src={logo}
                alt="Logo"
                width={1000}
                height={1000}
                className={`${sizes[size]} w-auto`}
            />
        </Link>
    );
}