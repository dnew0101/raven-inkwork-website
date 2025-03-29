const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const secret = process.env.TURNSTILE_SECRET_KEY || '';

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return new Response(
        JSON.stringify({ success: false, message: 'Missing CAPTCHA token' }),
        { status: 400, headers: { 'content-type': 'application/json' } }
      );
    }

    const res = await fetch(verifyEndpoint, {
      method: 'POST',
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: data.success ? 200 : 400,
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Internal server error' }),
      { status: 500, headers: { 'content-type': 'application/json' } }
    );
  }
}