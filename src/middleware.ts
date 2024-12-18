import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Redirect non-www to www (optional)
  const host = request.headers.get("host");
  const protocol = request.nextUrl.protocol;

  if (host && !host.startsWith("www.")) {
    return NextResponse.redirect(
      `${protocol}//www.${host}${request.nextUrl.pathname}`
    );
  }

  if (protocol !== "https:") {
    return NextResponse.redirect(`https://${host}${request.nextUrl.pathname}`);
  }

  return NextResponse.next();
}
