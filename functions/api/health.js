function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json; charset=utf-8"
  };
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders()
  });
}

export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const delay = parseInt(url.searchParams.get("delay") || "0", 10);
  if (delay > 0) {
    await new Promise(r => setTimeout(r, Math.min(delay, 5000)));
  }

  return new Response(
    JSON.stringify({
      status: "healthy",
      service: "TestAcademy QA Lab Serverless API",
      environment: "production",
      version: "1.0.0",
      timestamp: new Date().toISOString()
    }),
    {
      status: 200,
      headers: corsHeaders()
    }
  );
}
