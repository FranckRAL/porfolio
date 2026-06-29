
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

const handleI18nRouting = createMiddleware(routing);

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  
  if (pathname.startsWith("/admin")) {
    const token = req.cookies.get("session")?.value;

    if (!token) {
      return NextResponse.redirect(
        new URL("/login", req.url)
      );
    }

    const session = verifyToken(token);

    if (!session) {
      return NextResponse.redirect(
        new URL("/login", req.url)
      );
    }
  }

  
  const response = handleI18nRouting(req);

  response.headers.set(
    "x-locale",
    req.nextUrl.locale || "en"
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next|.*\\..*).*)",
  ],
};