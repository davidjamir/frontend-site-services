import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedMethods = new Set(["GET", "HEAD"]);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host.endsWith(".vercel.app")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (!allowedMethods.has(request.method)) {
    return new NextResponse("Method Not Allowed", {
      status: 405,
      headers: {
        Allow: "GET, HEAD",
      },
    });
  }

  return NextResponse.next();
}
