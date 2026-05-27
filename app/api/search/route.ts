import { NextResponse } from "next/server";

const ADAPTER_API_ENDPOINT = process.env.ADAPTER_API_ENDPOINT!;
const ADAPTER_SECRET_TOKEN = process.env.ADAPTER_SECRET_TOKEN;

export async function GET(request: Request) {
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
  url.searchParams.set("q", q);

  const response = await fetch(url.toString(), {
    method: "GET",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${ADAPTER_SECRET_TOKEN}`,
    },
  });

  const data = await response.json();

  return NextResponse.json(data.items);
}
