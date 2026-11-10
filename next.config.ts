import type { NextConfig } from "next";

// Defense-in-depth CSP policy accommodating ElevenLabs ConvAI widget and external form actions
const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://elevenlabs.io;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:;
  font-src 'self' data:;
  connect-src 'self' https://elevenlabs.io wss://*.elevenlabs.io;
  frame-src 'self' https://elevenlabs.io;
  form-action 'self' https://docs.google.com;
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();

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
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://elevenlabs.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https://elevenlabs.io https://*.elevenlabs.io wss://*.elevenlabs.io; media-src 'self' https://elevenlabs.io https://*.elevenlabs.io blob:; frame-src 'self' https://docs.google.com; worker-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self' https://docs.google.com;",
  },
];

const nextConfig: NextConfig = {
  // Prevent technology fingerprinting and information disclosure via X-Powered-By header
  poweredByHeader: false,
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
