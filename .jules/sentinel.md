# Sentinel Security Journal

Security learnings and architectural security notes for Good'Ai.

## 2026-03-31 - Content Security Policy Integration with Third-Party Voice Widget
**Vulnerability:** Missing `Content-Security-Policy` (CSP) header allowed arbitrary script execution, framing, and unauthorized resource fetching.
**Learning:** Next.js application integrates ElevenLabs ConvAI widget (`<elevenlabs-convai agent-id="...">`) and script (`https://elevenlabs.io/convai-widget/index.js`) which requires `script-src https://elevenlabs.io`, `connect-src https://elevenlabs.io wss://*.elevenlabs.io`, and `frame-src https://elevenlabs.io`. Additionally, external lead intake routes through Google Forms (`SURVEY_URL`), requiring `form-action` to permit `https://docs.google.com`.
**Prevention:** Maintain strict CSP rules with minimal necessary third-party allowances and audit any future third-party integrations against CSP directives.
