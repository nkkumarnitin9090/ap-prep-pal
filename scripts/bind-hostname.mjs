/** Bind address for Next.js. Default is localhost-only so Windows Firewall
 * typically stays quiet. HOST (or a bind-like HOSTNAME) overrides this —
 * use HOST=0.0.0.0 for cloud preview / LAN. System HOSTNAME values such as
 * the machine name are ignored. */
export function bindHostname() {
  const host = process.env.HOST?.trim();
  if (host) return host;

  const hostname = process.env.HOSTNAME?.trim();
  if (hostname && isBindAddress(hostname)) return hostname;

  return "127.0.0.1";
}

function isBindAddress(value) {
  return (
    value === "localhost" ||
    value === "::" ||
    value === "::1" ||
    value === "[::]" ||
    /^\d{1,3}(?:\.\d{1,3}){3}$/.test(value)
  );
}
