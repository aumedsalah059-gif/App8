// Use the configured backend URL (production cross-origin support);
// when on the same domain the request stays simple and avoids preflight.
const BACKEND = process.env.REACT_APP_BACKEND_URL || "";
const BASE = `${BACKEND}/api`;

async function request(path, opts = {}) {
  const init = { ...opts };
  // Only attach JSON Content-Type when sending a body — keeps GETs as
  // "simple" CORS requests (no preflight, much faster on slow networks).
  if (init.body) {
    init.headers = { "Content-Type": "application/json", ...(init.headers || {}) };
  }
  const res = await fetch(`${BASE}${path}`, init);
  if (!res.ok) {
    let body;
    try {
      body = await res.json();
    } catch {
      body = null;
    }
    const err = new Error(body?.detail || `HTTP ${res.status}`);
    err.response = { status: res.status, data: body };
    throw err;
  }
  return res.json();
}

function qs(obj = {}) {
  const params = Object.entries(obj)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
  return params ? `?${params}` : "";
}

export const fetchProducts = (params = {}) => {
  const lang = localStorage.getItem("heja_lang") || "ku";
  return request(`/products${qs({ ...params, lang })}`);
};
export const fetchStats = () => request("/products/stats");
export const fetchProduct = (id) => {
  const lang = localStorage.getItem("heja_lang") || "ku";
  return request(`/products/${id}?lang=${lang}`);
};
export const subscribeEmail = (email, source = "homepage") =>
  request("/subscribe", {
    method: "POST",
    body: JSON.stringify({ email, source }),
  });
export const submitCorrection = (payload) =>
  request("/corrections", {
    method: "POST",
    body: JSON.stringify(payload),
  });
