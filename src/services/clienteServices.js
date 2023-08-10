import axios from "axios";
const url = "http://localhost:3000/api/clientes/clientes"
export async function getClientsAPI() {
    return await fetch(url); ;//retorna la data de la api ref a la almacenada en la db
}


//Crea un client
export async function createClientAction(ev, values, reset) {
    ev.preventDefault();
    const res = await fetch("/api/clientes/clientes", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            "Content-Type": "application/json",
        }

    });
    reset();
    return res;
}

//hacer que actualice y 
export async function updateClientAction(ev, values, reset) {
    ev.preventDefault();
    const res = await fetch('/api/clientes/clientes', {
        method: 'PUT',
        body: JSON.stringify(values),
    })
        .then(response => {
            if (response.status === 200) {
                console.log('El registro se actualizó correctamente.');
            } else {
                console.log('Ocurrió un error al actualizar el registro.');
            }
        });

    reset();
    return res;
}



//elimine

export async function deleteClientAction(ev, value) {
    ev.preventDefault();
    const res = await axios.delete(`../api/clientes/clientes/${value}`);
    return res;
}