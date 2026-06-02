import Image from "next/image";
import { PostIndex } from "@/core/domain/post";
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/dist/client/link";

function NewsPostList({ posts }: { posts: PostIndex[] }) {
    return <></>;
}

function NewsCardListItem({ post }: { post: PostIndex }) {
    return <div className="bg-amber-200">{post.title}</div>;
}

export function NewsCardGridItem({ post }: { post: PostIndex }) {
    return (
        <Link href={`/post/${post.segment}/${post.slug}`} className="block group">
            <Card
                className="
                    relative mx-auto w-full max-w-sm p-0 min-h-50 lg:min-h-70
                    overflow-hidden
                    border-none
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:shadow-xl hover:shadow-blue-500/20
                    hover:border-blue-500/40
                "
            >
                {/* IMAGE */}
                <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="
                            object-cover
                            transition-transform duration-300 ease-out
                            group-hover:scale-105
                        "
                    unoptimized
                />

                {/* OVERLAY CONTENT */}
                <CardHeader
                    className="
                        absolute z-30 bottom-0 left-0 right-0
                        bg-linear-to-t from-blue-600/50 to-transparent]
                        text-white p-4
                    "
                >
                    <CardTitle
                        className="
                            bg-blue-500/90 p-2 rounded-xl
                            transition-transform duration-300 ease-out
                            group-hover:translate-y-px
                            group-hover:scale-[1.02]
                        "
                    >
                        {post.title}
                    </CardTitle>
                </CardHeader>
            </Card>
        </Link>
    );
}

function NewsPostGrid({ posts }: { posts: PostIndex[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {posts.map((post) => (
                <NewsCardGridItem key={post.id} post={post} />
            ))}
        </div>
    );
}

export function NewsContent({
    mode,
    posts,
}: {
    mode: "list" | "grid";
    posts: PostIndex[];
}) {
    return mode === "grid" ? (
        <NewsPostGrid posts={posts} />
    ) : (
        <NewsPostList posts={posts} />
    );
}

export function NewsHomePage() {
    return <></>;
}
