/**
 * Web Fetcher & Clean Text Extractor
 * Uses native Node.js fetch with resilient error handling & bot header emulation
 */

const USER_AGENTS = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
];

/**
 * Strips HTML tags, scripts, styles and normalizes whitespace
 */
function cleanHtml(rawHtml) {
  if (!rawHtml) return "";
  
  // Script és style blokkok törlése
  let text = rawHtml
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ")
    .replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, " ")
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, " ");

  // Sortörések megőrzése a blokk elemeknél
  text = text.replace(/<\/(p|div|h1|h2|h3|h4|h5|h6|li|tr|section|article)>/gi, "\n");
  text = text.replace(/<(br|hr)\s*\/?>/gi, "\n");
  
  // Minden egyéb tag eltávolítása
  text = text.replace(/<[^>]+>/g, " ");

  // HTML entity decode
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  // Felesleges szóközök tömörítése
  return text
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join("\n");
}

/**
 * Extracts meta information from raw HTML
 */
function extractMeta(rawHtml) {
  const titleMatch = rawHtml.match(/<title[^>]*>([^<]+)<\/title>/i);
  const metaDescMatch = rawHtml.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
                        rawHtml.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
  
  const h1Matches = [...rawHtml.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => cleanHtml(m[1])).filter(Boolean);
  const h2Matches = [...rawHtml.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => cleanHtml(m[1])).filter(Boolean);

  return {
    title: titleMatch ? titleMatch[1].trim() : "",
    metaDescription: metaDescMatch ? metaDescMatch[1].trim() : "",
    h1s: h1Matches.slice(0, 5),
    h2s: h2Matches.slice(0, 10)
  };
}

/**
 * Fetches a single page with timeout and bot avoidance headers
 */
async function fetchPage(url, timeoutMs = 9000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const randomUa = USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": randomUa,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "hu-HU,hu;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache"
      },
      redirect: "follow"
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return {
        url,
        success: false,
        status: res.status,
        error: `HTTP ${res.status} ${res.statusText}`
      };
    }

    const html = await res.text();
    const meta = extractMeta(html);
    const textContent = cleanHtml(html);

    return {
      url,
      success: true,
      status: res.status,
      meta,
      textLength: textContent.length,
      textContent
    };
  } catch (err) {
    clearTimeout(timeoutId);
    return {
      url,
      success: false,
      status: 0,
      error: err.name === "AbortError" ? "Timeout (nem válaszolt 9 mp alatt)" : err.message
    };
  }
}

module.exports = {
  fetchPage,
  cleanHtml
};
