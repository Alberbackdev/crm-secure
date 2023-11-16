export { default } from "next-auth/middleware"

export const config = {
    matcher: ["/", "/dashboard/:path*", "/clientes/:path*", "/profile/:path*"] //"/api/:path*"
 }