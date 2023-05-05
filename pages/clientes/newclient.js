import Layout from "../../components/Layout";


//This is form for new client

export default function page() {
    return (
        <Layout>
            <h1>Nuevo Cliente</h1>
            <input type="text" placeholder="FullName" />
            <input type="text" placeholder="LastName's" />
            <input type="datetime-local" />
            <input type="text" placeholder="Av. 6 entre calles 9 y 10 al aldo de x por y carea" />
            <input type="number" placeholder="V- 12345678" />
            <input type="number" placeholder="04XX 1234567" />
            <button className="btn-primary">Guardar</button>
        </Layout>
    )
}