function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
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

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "QA Automation Runner License",
    description: "High-throughput parallel Playwright execution node.",
    price: 250,
    currency: "USD",
    stock: 15,
    category: "software"
  },
  {
    id: 2,
    name: "Enterprise Load Testing Engine",
    description: "Distributed stress test orchestrator up to 50k RPS.",
    price: 490,
    currency: "USD",
    stock: 8,
    category: "enterprise"
  },
  {
    id: 3,
    name: "Security SAST/DAST Scanner",
    description: "Automated vulnerability scanner for pipeline execution.",
    price: 380,
    currency: "USD",
    stock: 20,
    category: "security"
  },
  {
    id: 4,
    name: "Allure Report Cloud Dashboard",
    description: "Executive test intelligence portal with Slack/Teams alerts.",
    price: 120,
    currency: "USD",
    stock: 35,
    category: "reporting"
  }
];

export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const delay = parseInt(url.searchParams.get("delay") || "0", 10);
  if (delay > 0) {
    await new Promise(r => setTimeout(r, Math.min(delay, 5000)));
  }

  const category = url.searchParams.get("category");
  let filtered = DEFAULT_PRODUCTS;
  if (category) {
    filtered = DEFAULT_PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  return new Response(
    JSON.stringify({
      status: "success",
      total: filtered.length,
      products: filtered
    }),
    {
      status: 200,
      headers: corsHeaders()
    }
  );
}
