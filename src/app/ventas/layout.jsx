import ContainerPrinc from "@/src/components/LayoutFolder/Layout";
import "../globals.css";

export const metadata = {
  title: "Clientes",
  description: "Aseguradora Misericordia CRM",
};

export default function ClientesLayout({ children }) {
  return (
    <ContainerPrinc>{children}</ContainerPrinc>
  );
}
