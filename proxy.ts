import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/feeds/posts/default") {
    const url = request.nextUrl.clone();
    url.pathname = "/feed";

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
