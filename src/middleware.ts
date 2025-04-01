import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const requestMap = new Map<string, { count: number; timestamp: number }>();

const RATE_LIMIT = 15;
const TIME_FRAME = 60 * 1000;

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent') || '';
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    if (userAgent.includes('Googlebot') || 
        userAgent.includes('Bingbot') || 
        userAgent.includes('DuckDuckBot')) {
        return NextResponse.next();
    }

    const blockedPaths = [
        '/wp-admin', '/wp-login.php', '/administrator', '/.git/', '/.env', 
        '/lander', '/setup-config.php', '/xmlrpc.php', '/wp-includes',
        '/phpmyadmin', '/admin', '/cgi-bin', '/wordpress/wp-admin/setup-config.php',
        '/wordpress/wp-admin/setup-config.php',
    ];
    
    if (blockedPaths.some(path => request.nextUrl.pathname.includes(path))) {
        return new Response('Forbidden', { status: 403 });
    }

    const now = Date.now();
    const entry = requestMap.get(ip);

    if (entry) {
        if (now - entry.timestamp < TIME_FRAME) {
            if (entry.count >= RATE_LIMIT) {
                return new Response('Too many requests, slow down there.', { status: 429 });
            }
            entry.count++;
        } else {
            requestMap.set(ip, { count: 1, timestamp: now });
        }
    } else {
        requestMap.set(ip, { count: 1, timestamp: now });
    }

    const response = NextResponse.next();
    response.headers.set('x-bot-protection', 'active');
    
    return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|Fallback-Assets|public).*)'],
};