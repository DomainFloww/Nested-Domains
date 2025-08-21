export function getSubdomainFromHost(host) {
  if (!host) return null;
  const parts = host.split(".");
  if (parts.length < 3) return null;
  return parts[0].toLowerCase();
}
