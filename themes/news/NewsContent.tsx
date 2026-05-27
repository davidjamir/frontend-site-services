import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/dist/client/link";
import { Badge } from "@/components/ui/badge"
import { UserPen, CalendarCheck2, Tag } from "lucide-react";
import { Post, PostIndex } from "@/core/domain/post";

export function NewsPostList({ posts }: { posts: PostIndex[] }) {
    return (
        <div className="w-full flex flex-col gap-4 max-w-4xl mx-auto ">
            {posts.map((post) => (
                <NewsCardListItem key={post.id} post={post} />
            ))}
        </div>
    );
}

function NewsCardListItem({ post }: { post: PostIndex }) {
    return (
        <Card
            className="
                    relative flex flex-row
                    overflow-hidden p-0
                    border-none
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl hover:shadow-blue-500/20 min-h-32
                "
        >
            {/* MAIN ARTICLE LINK */}
            <Link
                href={`/post/${post.segment}/${post.slug}`}
                className="absolute inset-0 z-10"
                aria-label={post.title}
            />

            {/* IMAGE LEFT */}
            <div className="relative z-20 w-40 md:w-65 lg:w-80 h-34 md:h-60 lg:h-60 shrink-0 overflow-hidden pointer-events-none">
                <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="
                            object-cover
                            transition-transform duration-300 ease-out
                            group-hover:scale-110
                        "
                />
            </div>

            {/* CONTENT RIGHT */}
            <div className="relative z-20 flex flex-col gap-2 justify-center p-4 flex-1 pointer-events-none">
                <h3 className="text-base md:text-lg font-semibold line-clamp-2 pointer-events-none">
                    {post.title.slice(0, 90)}...
                </h3>
                <div className="pointer-events-auto">
                    <Link key={post.mainCategory} href={`/category/${post.mainCategory}`} className="relative z-30 inline-flex">
                        <Badge className="bg-blue-600 text-white hover:bg-blue-700 p-2">
                            {post.mainCategory}
                        </Badge>
                    </Link>
                </div>

                <span className="hidden md:block pointer-events-none">{post.snippet.slice(0, 220)}...</span>
                {
                    post.tags?.length > 0 && (
                        <div className="flex flex-row gap-2 flex-wrap overflow-hidden pointer-events-auto">
                            {post.tags.map((tag) => (
                                <Link key={tag} href={`/tag/${tag}`} className="relative z-30 inline-flex">
                                    <Badge
                                        className="bg-green-400/20 text-green-700 backdrop-blur hover:bg-green-400/30 hover:text-green-800 transition-colors"
                                    >
                                        <Tag data-icon="inline-start" />
                                        {tag}
                                    </Badge>
                                </Link>
                            ))}
                        </div>
                    )
                }
                <div className="flex flex-row gap-2 justify-beetween items-center mt-auto pointer-events-none">
                    <Badge className="bg-blue-400/20 text-blue-700 backdrop-blur">
                        <UserPen data-icon="inline-start" />
                        {post.author}
                    </Badge>
                    <Badge className="bg-blue-400/20 text-blue-700 backdrop-blur">
                        <CalendarCheck2 data-icon="inline-end" /> {new Date(post.createdAt).toDateString()}
                    </Badge>
                </div>

            </div>

        </Card>
    );
}

function NewsCardGridItem({ post }: { post: PostIndex }) {
    return (
        <Link href={`/post/${post.segment}/${post.slug}`} className="block group">
            <Card
                className="
                    relative mx-auto w-full max-w-sm p-0 min-h-50 md:min-h-60 lg:min-h-90
                    overflow-hidden
                    border-none
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:shadow-xl hover:shadow-blue-500/20
                    hover:border-blue-500/40
                "
            >
                {/* CATEGORY BADGE */}
                <div className="absolute z-40 top-3 right-3">
                    <Badge className="bg-blue-600 text-white  px-4 py-2">
                        {post.mainCategory}
                    </Badge>
                </div>

                {/* IMAGE */}
                <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="
                            object-cover
                            transition-transform duration-300 ease-out
                            group-hover:scale-110
                        "
                />

                {/* OVERLAY CONTENT */}
                <CardHeader
                    className="
                        absolute z-30 bottom-0 left-0 right-0
                        bg-linear-to-t from-blue-600/30 to-transparent]
                        text-white py-4 md:py-6 lg:py-10
                    "
                >
                    <CardTitle
                        className="
                            bg-blue-500/90 p-2 rounded-xl text-md md:text-lg lg:text-2xl
                            transition-transform duration-300 ease-out
                            group-hover:translate-y-px
                            group-hover:scale-[1.05]
                        "
                    >
                        {post.title.slice(0, 90)}...
                    </CardTitle>
                </CardHeader>
            </Card>
        </Link>
    );
}

export function NewsPostGrid({ posts }: { posts: PostIndex[] }) {
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

export function NewsPostPage({ post }: { post: Post }) {

    return <><article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
            __html: post.content,
        }}
    />
    </>
}