import ContainerPrinc from "@/src/components/LayoutFolder/Layout";
import Providers from "../Providers";
import "../globals.css";
import RootLayout from "../layout";

export const metadata = {
  title: "Clientes",
  description: "Aseguradora Misericordia CRM",
};

export default function ClientesLayout({ children }) {
  return (
    <ContainerPrinc>{children}</ContainerPrinc>
  );
}
