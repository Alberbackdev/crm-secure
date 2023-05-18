import React, { useState} from "react";
import Layout from "../../components/Layout";
import axios from "axios";


//This is form for new client

export default function crear() {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [cidentified, setCIdentified] = useState('');
    const [addres, setAddres] = useState('');
    const [phone, setPhone] = useState('');
    const [dateofbirth, setDateOfBirth] = useState('');
    
    async function createClient(ev) {
        ev.preventDefault();
        const data = {name, lastname, cidentified, addres, phone, dateofbirth};
        await axios.post('../api/clientes', data)
    }

    return (
        <Layout>
            <form onSubmit={createClient}>
                <h1>Nuevo Cliente</h1>
                <label>Nombres</label>
                <input
                    type="text"
                    placeholder="fullName"
                    value={name}
                    onChange={ev => setName(ev.target.value)}
                />
                <label>Apellido</label>
                <input
                    type="text"
                    placeholder="LastName's"
                    value={lastname}
                    onChange={ev => setLastName(ev.target.value)}
                />
                <label>Direccion</label>
                <input
                    type="text"
                    placeholder="Av. 6 entre calles 9 y 10 al aldo de x por y carea"
                    value={addres}
                    onChange={ev => setAddres(ev.target.value)}
                />
                <label>Cedula de Identidad</label>
                <input
                    type="number"
                    placeholder="V- 12345678"
                    value={cidentified}
                    onChange={ev => setCIdentified(ev.target.value)}
                />
                <label>Telefono</label>
                <input
                    type="number"
                    placeholder="04XX 1234567"
                    value={phone}
                    onChange={ev => setPhone(ev.target.value)}
                />
                <label>Fecha de Nacimiento</label>
                <input
                    type="date"
                    value={dateofbirth}
                    onChange={ev => setDateOfBirth(ev.target.value)}
                />
                <button type="submit" className="btn-primary">Siguiente</button>
            </form>
        </Layout>
    )
}