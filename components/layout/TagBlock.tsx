import Link from "next/link";

export default function TagBlock({ tags }: { tags: string[] }) {
    return (
        <div className="mt-4 pt-4">
            <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold">Tags:</span>

                {tags.map((tag) => (
                    <Link
                        key={tag}
                        href={`/tag/${tag}`}
                        className="rounded-md bg-blue-300/10 px-3 py-1 text-sm no-underline hover:underline hover:bg-blue-300/15 hover:border-blue-500/30 transition"
                    >
                        {tag}
                    </Link>
                ))}
            </div>
        </div>
    );
}
