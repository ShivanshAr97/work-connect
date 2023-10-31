import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath =
    path === "/" ||
    path === "/login" ||
    path === "/signup" ||
    // path === "/profile" ||
    path === "/verifyemail";
  const token = request.cookies.get("token")?.value || "";
  if (token && isPublicPath) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/signup", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/login", "/profile", "/signup", "/verifyemail"],
};
