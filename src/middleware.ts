import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
    if (req.nextUrl.pathname == "/embracing") {
        const response = NextResponse.rewrite(new URL('/', req.url))
        response.cookies.set("visited", "true")
        return response
    }

    if (req.nextUrl.pathname == "/" && !req.cookies.has("visited")) {
        return NextResponse.rewrite(new URL('/welcome', req.url))
    } else {
        return NextResponse.next()
    }
}