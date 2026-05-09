export async function GET() {

  // TODO:
  // lấy site config theo host
  // const site = await getSiteByHost(host);

  const ads = `
google.com, pub-1234567890, DIRECT, f08c47fec0942fa0
  `.trim();

  return new Response(ads, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}