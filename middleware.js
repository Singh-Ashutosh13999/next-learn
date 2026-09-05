import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.has("auth-token");
  const isLoginPage = request.nextUrl.pathname === "/login";
  const isSignupPage = request.nextUrl.pathname === "/signup";

  if (!isLoggedIn && !isLoginPage && !isSignupPage) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("reason", "auth-required");
    return NextResponse.redirect(loginUrl);
  }

  if (isLoggedIn && (isLoginPage || isSignupPage)) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  const response = NextResponse.next();

  // Do not allow the browser or Next.js to show protected pages from cache
  // after the auth cookie has been cleared.
  if (!isLoginPage && !isSignupPage) {
    response.headers.set("Cache-Control", "private, no-store, max-age=0");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
