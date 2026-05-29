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
  const segment = searchParams.get("segment");
  const slug = searchParams.get("slug");

  if (!domain || !segment|| !slug) {
    return Response.json(
      {
        ok: false,
        error: "Require exactly one of domain and slug",
      },
      {
        status: 400,
      },
    );
  }
  const url = new URL("/api/post", ADAPTER_API_ENDPOINT);
  url.searchParams.set("domain", domain);
  url.searchParams.set("segment", segment);
  url.searchParams.set("slug", slug);

  const response = await fetch(url.toString(), {
    method: "GET",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${ADAPTER_SECRET_TOKEN}`,
    },
  });

  const data = await response.json();

  return NextResponse.json(data.item);
}
