import { NextResponse } from "next/server";
import {
  ADAPTER_API_ENDPOINT,
  ADAPTER_SECRET_TOKEN,
  INTERNAL_SECRET,
} from "@/lib/env";

const MAX_AGE = 0;
const S_MAX_AGE = 60 * 60 * 24 * 3; // 3 days
const STALE_WHILE_REVALIDATE = 60 * 60; // 1 hour
const STALE_IF_ERROR = 60 * 60 * 24 * 7; // 7 days

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${INTERNAL_SECRET}`) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const domain = searchParams.get("domain");
  const q = searchParams.get("q");

  if (!domain || !q) {
    return Response.json(
      {
        ok: false,
        error: "Require exactly one of domain and query",
      },
      {
        status: 400,
      },
    );
  }
  const url = new URL("/api/search", ADAPTER_API_ENDPOINT);
  url.searchParams.set("domain", domain);
  url.searchParams.set("q", decodeURIComponent(q));

  const response = await fetch(url.toString(), {
    method: "GET",
    next: { revalidate: 300 },
    headers: {
      Authorization: `Bearer ${ADAPTER_SECRET_TOKEN}`,
    },
  });

  const data = await response.json();

  return NextResponse.json(data.items, {
    headers: {
      "Cache-Control": `public, max-age=${MAX_AGE}, s-maxage=${S_MAX_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}, stale-if-error=${STALE_IF_ERROR}`,
    },
  });
}
