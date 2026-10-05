function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Idempotency-Key",
    "Content-Type": "application/json; charset=utf-8"
  };
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders()
  });
}

// In-memory runtime cache for serverless invocation
let runtimeOrders = [
  { id: 101, email: "dan.tester@enterprise.io", product_id: 1, product_name: "QA Automation Runner License", quantity: 1, total: 250, status: "PAID", idempotency_key: "INIT-101", created_at: "2026-10-01T10:00:00Z" },
  { id: 102, email: "standard_user@astron.hu", product_id: 2, product_name: "Enterprise Load Testing Engine", quantity: 1, total: 490, status: "PENDING", idempotency_key: "INIT-102", created_at: "2026-10-02T11:30:00Z" },
  { id: 103, email: "dan.tester@enterprise.io", product_id: 3, product_name: "Security SAST/DAST Scanner", quantity: 2, total: 760, status: "CANCELLED", idempotency_key: "INIT-103", created_at: "2026-10-03T14:15:00Z" }
];

export async function onRequestGet({ request }) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response(
      JSON.stringify({
        status: "error",
        error: "Unauthorized",
        message: "Protected resource: Missing or invalid Bearer token in Authorization header."
      }),
      { status: 401, headers: corsHeaders() }
    );
  }

  return new Response(
    JSON.stringify({
      status: "success",
      total: runtimeOrders.length,
      orders: runtimeOrders
    }),
    { status: 200, headers: corsHeaders() }
  );
}

export async function onRequestPost({ request }) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response(
      JSON.stringify({
        status: "error",
        error: "Unauthorized",
        message: "Protected resource: Placing orders requires a valid Bearer token."
      }),
      { status: 401, headers: corsHeaders() }
    );
  }

  let body = {};
  try {
    body = await request.json();
  } catch (e) {
    return new Response(
      JSON.stringify({ status: "error", error: "InvalidJSON", message: "Malformed JSON body." }),
      { status: 400, headers: corsHeaders() }
    );
  }

  const { email, product_id, quantity } = body;
  if (!email || !product_id || !quantity) {
    return new Response(
      JSON.stringify({
        status: "error",
        error: "ValidationFailed",
        message: "Fields 'email', 'product_id', and 'quantity' are required."
      }),
      { status: 400, headers: corsHeaders() }
    );
  }

  const idempotencyKey = request.headers.get("Idempotency-Key") || `REQ-${Date.now()}`;
  const existing = runtimeOrders.find(o => o.idempotency_key === idempotencyKey);
  if (existing) {
    return new Response(
      JSON.stringify({
        status: "success",
        idempotent_replay: true,
        message: "Existing order returned via Idempotency-Key match.",
        order: existing
      }),
      { status: 200, headers: corsHeaders() }
    );
  }

  const priceMap = { 1: 250, 2: 490, 3: 380, 4: 120 };
  const nameMap = {
    1: "QA Automation Runner License",
    2: "Enterprise Load Testing Engine",
    3: "Security SAST/DAST Scanner",
    4: "Allure Report Cloud Dashboard"
  };

  const unitPrice = priceMap[product_id] || 100;
  const newOrder = {
    id: runtimeOrders.length + 101,
    email: email.trim(),
    product_id: Number(product_id),
    product_name: nameMap[product_id] || "Custom Product",
    quantity: Number(quantity),
    total: unitPrice * Number(quantity),
    status: "PENDING",
    idempotency_key: idempotencyKey,
    created_at: new Date().toISOString()
  };

  runtimeOrders.unshift(newOrder);

  return new Response(
    JSON.stringify({
      status: "success",
      message: "Order placed successfully",
      order: newOrder
    }),
    { status: 201, headers: corsHeaders() }
  );
}
