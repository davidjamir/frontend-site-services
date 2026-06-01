import { NextResponse } from "next/server";

const ADAPTER_API_ENDPOINT = process.env.ADAPTER_API_ENDPOINT!;
const ADAPTER_SECRET_TOKEN = process.env.ADAPTER_SECRET_TOKEN;

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${process.env.INTERNAL_SECRET}`) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const domain = searchParams.get("domain");
  const id = searchParams.get("id");

  if ((!domain && !id) || (domain && id)) {
    return Response.json(
      {
        ok: false,
        error: "Require exactly one of domain or id",
      },
      {
        status: 400,
      },
    );
  }

  const url = new URL("/api/sitemap", ADAPTER_API_ENDPOINT);

  if (domain) {
    url.searchParams.set("domain", domain);
  }

  if (id) {
    url.searchParams.set("id", id);
  }

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
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1200",
    },
  });
}
