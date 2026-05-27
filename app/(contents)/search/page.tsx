"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSite } from "@/hooks/use-site";
import { searchService } from "@/services/search.service";
import { PostIndex } from "@/core/domain/post";
import { THEMES_CONTENT } from "@/constants";

export default function Page() {
    const { site } = useSite();
    const searchParams = useSearchParams();
    const q = searchParams.get("q") ?? "";
    const [posts, setPosts] = useState<PostIndex[]>([]);

    const ThemeContent =
        THEMES_CONTENT[site.theme as keyof typeof THEMES_CONTENT];

    useEffect(() => {
        if (!q.trim()) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setPosts([]);
            return;
        }

        const fetchPosts = async () => {
            try {
                const items = await searchService.searchPosts(
                    site.baseUrl,
                    site.host,
                    q,
                );
                setPosts(items || []);
            } finally {
            }
        };

        setPosts([]);
        fetchPosts();
    }, [q, site]);

    return (
        posts.length > 0 && (
            <ThemeContent mode={site.configView.search} posts={posts} />
        )
    );
}
