import { NextResponse } from "next/server";
import { withMiddlewareAuthRequired, getSession } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired(async function middleware(req) {
  const res = NextResponse.next();
  const session = await getSession(req, res);

  if (!session || !session.user) {
    return NextResponse.redirect(new URL("/api/auth/login", req.url));
  }

  const allowedEmails = ["polismai@gmail.com"];
  if (!allowedEmails.includes(session.user.email)) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return res;
});

// Configura el Middleware para que solo actúe en ciertas rutas
export const config = {
  matcher: ["/((?!unauthorized|api/auth).*)"], // Protege todas las páginas dentro de /protected
};
