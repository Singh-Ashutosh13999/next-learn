import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set("auth-token", "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0),
    maxAge: 0,
    path: "/",
  });
  response.headers.set("Cache-Control", "no-store");

  return response;
}
