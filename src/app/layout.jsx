import ProviderRedux from "../redux/Provider"
import Providers from "./Providers";
import "./globals.css";

export const metadata = {
  title: "CRM Aseguradora",
  description: "Aseguradora Misericordia CRM",
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
