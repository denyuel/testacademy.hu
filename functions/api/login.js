function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Mock-Flaky",
    "Content-Type": "application/json; charset=utf-8"
  };
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders()
  });
}

export async function onRequestPost({ request }) {
  const url = new URL(request.url);

  // 1. Trainer Flaky & Delay simulation
  const delay = parseInt(url.searchParams.get("delay") || "0", 10);
  if (delay > 0) {
    await new Promise(r => setTimeout(r, Math.min(delay, 5000)));
  }

  const isFlaky = url.searchParams.get("flaky") === "true" || request.headers.get("x-mock-flaky") === "true";
  if (isFlaky && Math.random() < 0.5) {
    return new Response(
      JSON.stringify({
        status: "error",
        error: "ServiceUnavailable",
        message: "Simulated 503 Flaky network exception for Trace Viewer demonstration."
      }),
      {
        status: 503,
        headers: corsHeaders()
      }
    );
  }

  // 2. Parse payload
  let payload = {};
  try {
    payload = await request.json();
  } catch (err) {
    return new Response(
      JSON.stringify({
        status: "error",
        error: "InvalidJSON",
        message: "Request body must be valid JSON."
      }),
      {
        status: 400,
        headers: corsHeaders()
      }
    );
  }

  const username = (payload.email || payload.username || "").trim();
  const password = (payload.password || "").trim();

  if (!username || !password) {
    return new Response(
      JSON.stringify({
        status: "error",
        error: "MissingCredentials",
        message: "Username/email and password are required fields."
      }),
      {
        status: 400,
        headers: corsHeaders()
      }
    );
  }

  // 3. Authenticate standard credentials
  const validUsers = [
    { username: "standard_user", email: "standard_user@astron.hu", pass: "secret123", role: "user", name: "Astron QA Student" },
    { username: "standard_user", email: "standard_user@astron.hu", pass: "secret_sauce", role: "user", name: "Astron QA Student" },
    { username: "dan.tester@enterprise.io", email: "dan.tester@enterprise.io", pass: "secret123", role: "user", name: "Dan Tester" },
    { username: "admin", email: "admin@testacademy.hu", pass: "admin123", role: "admin", name: "Chief QA Lead" }
  ];

  const matched = validUsers.find(
    u => (u.username.toLowerCase() === username.toLowerCase() || u.email.toLowerCase() === username.toLowerCase()) && u.pass === password
  );

  // Accept any astron.hu email with password 'secret123' or 'astron2026'
  const isAstronWildcard = (username.endsWith("@astron.hu") || username.endsWith("@testacademy.hu")) && (password === "secret123" || password === "astron2026");

  if (matched || isAstronWildcard) {
    const userRole = matched ? matched.role : (username.includes("admin") ? "admin" : "user");
    const userName = matched ? matched.name : "Astron Team Member";
    const userEmail = matched ? matched.email : username;

    const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." + btoa(JSON.stringify({
      sub: userEmail,
      role: userRole,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 86400
    })) + ".mock_signature_qa_lab";

    return new Response(
      JSON.stringify({
        status: "success",
        message: "Authentication successful",
        token: mockToken,
        token_type: "Bearer",
        expires_in: 86400,
        user: {
          id: 101,
          email: userEmail,
          name: userName,
          role: userRole
        }
      }),
      {
        status: 200,
        headers: corsHeaders()
      }
    );
  }

  return new Response(
    JSON.stringify({
      status: "error",
      error: "InvalidCredentials",
      message: "Epic sadface: Username and password do not match any user in this service"
    }),
    {
      status: 401,
      headers: corsHeaders()
    }
  );
}
