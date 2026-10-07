// Single entry point for NASA data. UI must never call NASA APIs directly. Server-side only.
export interface NasaResult<T> { ok: boolean; data?: T; error?: string }
export async function nasaFetch<T>(url: string): Promise<NasaResult<T>> {
  const key = process.env.NASA_API_KEY;
  if (!key) return { ok: false, error: "NASA_API_KEY is not set" };
  try {
    const res = await fetch(`${url}${url.includes("?") ? "&" : "?"}api_key=${key}`, { next: { revalidate: 3600 } });
    if (!res.ok) return { ok: false, error: `NASA API responded ${res.status}` };
    return { ok: true, data: (await res.json()) as T };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Unknown error" };
  }
}
// TODO: add typed functions once endpoints are chosen and verified.
