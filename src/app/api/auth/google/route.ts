import { cookies }
from "next/headers";

import { NextResponse }
from "next/server";

import { verifyGoogleToken }
from "@/lib/google";

import { createToken }
from "@/lib/jwt";

export async function POST(
 req: Request
) {

 const { token } =
  await req.json();

 const payload =
  await verifyGoogleToken(token);

 if (!payload?.email) {
  return NextResponse.json(
   { error: "Unauthorized" },
   { status: 401 }
  );
 }

 if (
  payload.email !==
  process.env.ADMIN_EMAIL
 ) {
  return NextResponse.json(
   { error: "Forbidden" },
   { status: 403 }
  );
 }

 const jwt = createToken({
  email: payload.email,
  role: "admin",
 });

 const cookieStore =
  await cookies();

 cookieStore.set(
  "session",
  jwt,
  {
   httpOnly: true,
   secure:
    process.env.NODE_ENV ===
    "production",

   sameSite: "lax",

   path: "/",

   maxAge:
    60 * 60 * 24 * 7,
  }
 );

 return NextResponse.json({
  success: true,
 });
}