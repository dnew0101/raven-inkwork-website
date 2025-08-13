import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const requestMap = new Map<string, { count: number; timestamp: number }>();

const RATE_LIMIT = 15;
const TIME_FRAME = 60 * 1000;

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent') || '';
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    if (userAgent.includes('Googlebot') || 
        userAgent.includes('Bingbot') || 
        userAgent.includes('DuckDuckBot')) {
        return NextResponse.next();
    }

    const blockedPaths = [
        '/wp-admin', '/wp-login.php', '/administrator', '/.git/', '/.env', 
        '/lander', '/setup-config.php', '/xmlrpc.php', '/wp-includes',
        '/phpmyadmin', '/admin', '/cgi-bin', '/wordpress/wp-admin/setup-config.php',
        '/wordpress'
    ];
    
    if (blockedPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
        return new Response('Not Found: endpoint does not exist', { 
            status: 410, //Best practice to dissuade repeated bots from querying paths.
            headers: { 
                'X-Robots-Tag': 'noindex, nofollow', //Bots wont give up... I'm trying to tell them to get lost.
                'X-Frame-Options': 'DENY',
                'Cache-Control': 'max-age=31536000',
                'X-Content-Type-Options': 'nosniff'
            }
        });
    }

    const now = Date.now();
    const entry = requestMap.get(ip);

    if (entry) {
        if (now - entry.timestamp < TIME_FRAME) {
            if (entry.count >= RATE_LIMIT) {
                return new Response('Too many requests; slow down there, partner.', { status: 429 });
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
    matcher: [
        '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:jpg|jpeg|gif|png|svg|webp)).*)'
    ],
};

