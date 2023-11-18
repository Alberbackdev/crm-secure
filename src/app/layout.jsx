import ProviderRedux from "../redux/Provider"
import Providers from "./Providers";
import "./globals.css";

export const metadata = {
  title: "CRM Aseguradora",
  description: "Aseguradora Misericordia CRM",
  manifest: "/manifest.json",
  icons: {
    appleIcon: "/icon.png",
    androidIcon: "/icon.png",
    msIcon: "/icon.png",
    maskIcon: "/icon.png",
    icon: "/icon-512x512.png",
  },
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <ProviderRedux>
            {children}
          </ProviderRedux>
        </Providers>
      </body>
    </html>
  );
}
