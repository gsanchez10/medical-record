import {NextRequest, NextResponse} from 'next/server';

export function middleware(request: NextRequest) {
  // Get locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || '';
  let locale = acceptLanguage.startsWith('es') ? 'es' : 'en';
  
  // Check for stored preference in cookie (set by the client)
  const preferredLocale = request.cookies.get('preferred-locale')?.value;
  if (preferredLocale && ['en', 'es'].includes(preferredLocale)) {
    locale = preferredLocale;
  }
  
  // Set locale in response headers for the app to use
  const response = NextResponse.next();
  response.headers.set('x-locale', locale);
  
  return response;
}

export const config = {
  // Match all pathnames except for API routes and static files
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};