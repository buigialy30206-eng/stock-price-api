const ENDPOINT = "https://prod.api.market/api/v1/viv-data/stock/quote";

/**
 * Get a real-time stock quote (price, change, volume, exchange).
 *
 * @param {string} symbol - e.g. "AAPL", "TSLA"
 * @param {{ apiKey?: string }} [options]
 * @returns {Promise<{ symbol: string, name?: string, price?: number, change?: number,
 *   change_percent?: number, open?: number, high?: number, low?: number,
 *   volume?: number, exchange?: string, currency?: string, error?: string|null }>}
 */
export async function getQuote(symbol, options = {}) {
  const apiKey = options.apiKey || process.env.API_MARKET_KEY || "";
  const headers = {};
  if (apiKey) headers["x-api-key"] = apiKey;

  const res = await fetch(
    `${ENDPOINT}?symbol=${encodeURIComponent(symbol)}`,
    { headers }
  );

  if (!res.ok) {
    const err = new Error(`Stock quote failed (HTTP ${res.status})`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

export default getQuote;
