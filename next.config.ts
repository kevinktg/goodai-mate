import type { NextConfig } from "next";

// Security enhancement: Content-Security-Policy (CSP) provides defense-in-depth against
// Cross-Site Scripting (XSS), clickjacking, and unauthorized data exfiltration.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://elevenlabs.io",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://elevenlabs.io wss://*.elevenlabs.io",
  "frame-src 'self' https://elevenlabs.io",
  "form-action 'self' https://docs.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
]
  .join("; ")
  .trim();

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(self \"https://elevenlabs.io\"), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
