// Reads the stored theme, tolerating both JSON-encoded ("dark") and
// legacy raw (dark) values so a stale localStorage entry can't crash render.
export function readTheme() {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem('theme');
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}
