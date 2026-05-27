"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {
    logo: string;
    size: keyof typeof sizes;
};
const sizes = {
    small: "h-6 w-6 lg:h-8 lg:w-8",
    medium: "h-10 w-10 lg:h-12 lg:w-12",
    large: "h-16 w-16 lg:h-20 lg:w-20",
};

export default function Logo({ logo, size }: Props) {
    return (
        <Link href="/">
            <div className={`relative ${sizes[size]}`}>
                <Image
                    src={logo}
                    alt="Logo"
                    className={`object-contain`}
                    fill
                    sizes="
                        (max-width: 1024px) 40px,
                        48px
                    "
                />
            </div>
        </Link>
    );
}
