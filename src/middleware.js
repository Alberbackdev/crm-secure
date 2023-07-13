export { default } from "next-auth/middleware"

export const config = {
    matcher: ["/", "/dashboard/:path*"],
    matcher: ["/", "/clientes/:path*"],
    matcher: ["/", "/profile/:path*"],
    matcher: ["/", "/api/:path*"]
 }