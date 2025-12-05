/**
 * Kindred API Proxy - Cloudflare Worker
 * Securely proxies requests to Anthropic's Claude API
 */

const ALLOWED_ORIGINS = [
  'https://smhunt.github.io',
  'http://localhost:3000',
  'http://localhost:5500',
  'http://127.0.0.1:5500'
];

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return handleCORS(request);
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    // Validate origin
    const origin = request.headers.get('Origin');
    if (!origin || !ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed))) {
      return new Response('Forbidden', { status: 403 });
    }

    // Check for API key in environment
    if (!env.ANTHROPIC_API_KEY) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    try {
      // Get request body
      const body = await request.json();

      // Forward to Anthropic API
      const anthropicResponse = await fetch(ANTHROPIC_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify(body)
      });

      // Get response
      const responseBody = await anthropicResponse.text();

      // Return with CORS headers
      return new Response(responseBody, {
        status: anthropicResponse.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': origin,
        }
      });
    }
  }
};

function handleCORS(request) {
  const origin = request.headers.get('Origin');
  const allowedOrigin = ALLOWED_ORIGINS.find(allowed => origin?.startsWith(allowed));

  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': allowedOrigin || '',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  });
}
