// src/middleware.ts
import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest } from "next/server";


const handleI18nRouting = createMiddleware(routing);

const authMiddleware = withAuth(

  function onSuccess(req) {
    return handleI18nRouting(req);
  },
  {
    pages: {
      signIn: "/api/auth/signin",
    },
  }
);

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;


  if (pathname.startsWith("/admin")) {
    return (authMiddleware as any)(req);
  }

  const response = handleI18nRouting(req);
  response.headers.set('x-locale', req.nextUrl.locale || 'en');
  return response;
}

export const config = {
  // On surveille tout, sauf l'API et les fichiers statiques
  matcher: ["/((?!api|admin|_next|.*\\..*).*)"],
};