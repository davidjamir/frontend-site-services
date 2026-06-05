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

  if (!domain) {
    return Response.json(
      {
        ok: false,
        error: "Require exactly one of domain",
      },
      {
        status: 400,
      },
    );
  }
  const url = new URL("/api/site", ADAPTER_API_ENDPOINT);
  url.searchParams.set("domain", domain);

  const response = await fetch(url.toString(), {
    method: "GET",
    next: { revalidate: 86400 },
    headers: {
      Authorization: `Bearer ${ADAPTER_SECRET_TOKEN}`,
    },
  });

  const data = await response.json();

  console.log("Site API Route: ", data)

  return NextResponse.json(data.site, {
    // headers: {
    //   "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=1200",
    // },
  });
}
