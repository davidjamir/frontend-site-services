import { NextResponse } from "next/server";

const ADAPTER_API_ENDPOINT = process.env.ADAPTER_API_ENDPOINT!;
const ADAPTER_SECRET_TOKEN = process.env.ADAPTER_SECRET_TOKEN;

const MAX_AGE = 0;
const S_MAX_AGE = 60 * 60 * 24 * 1; // 1 day
const STALE_WHILE_REVALIDATE = 60 * 60; // 1 hour
const STALE_IF_ERROR = 60 * 60 * 24 * 7; // 7 days

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${process.env.INTERNAL_SECRET}`) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const domain = searchParams.get("domain");
  const category = searchParams.get("category");

  if (!domain || !category) {
    return Response.json(
      {
        ok: false,
        error: "Require exactly one of domain and category",
      },
      {
        status: 400,
      },
    );
  }
  const url = new URL("/api/category", ADAPTER_API_ENDPOINT);
  url.searchParams.set("domain", domain);
  url.searchParams.set("category", category);

  const response = await fetch(url.toString(), {
    method: "GET",
    next: { revalidate: 3600 },
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
