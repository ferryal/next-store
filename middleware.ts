import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the request is to the root path "/"
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/products'; // Redirect to /products
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|static|_next/image|images|favicon.ico).*)"],
};
