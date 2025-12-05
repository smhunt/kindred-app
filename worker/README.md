# Kindred API Proxy

Cloudflare Worker that securely proxies requests to Anthropic's Claude API.

## Setup

1. **Install Wrangler CLI:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   npx wrangler login
   ```

3. **Add your API key as a secret:**
   ```bash
   cd worker
   npx wrangler secret put ANTHROPIC_API_KEY
   ```
   (Paste your Anthropic API key when prompted)

4. **Deploy:**
   ```bash
   npx wrangler deploy
   ```

5. **Note your worker URL:**
   After deploy, you'll get a URL like:
   `https://kindred-api.<your-subdomain>.workers.dev`

## Security Features

- API key stored as Cloudflare secret (never exposed to browser)
- Origin validation (only allows requests from smhunt.github.io)
- CORS headers properly configured
- No client-side API key storage

## Local Development

```bash
npx wrangler dev
```

Then set `ANTHROPIC_API_KEY` in a `.dev.vars` file (git-ignored):
```
ANTHROPIC_API_KEY=sk-ant-...
```
