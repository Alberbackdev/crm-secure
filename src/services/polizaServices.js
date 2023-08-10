import axios from "axios";
const url = "http://localhost:3000/api/clientes/polizas"
export async function getPolizeAPI() {
    const res = await fetch(url);
    return res.json();
}

export async function createPolizeAction(ev, values, reset) {
    ev.preventDefault();
    await axios.post("/api/clientes/polizas", values);
    reset();
}

/* export async function updatePolizeAction(ev, values, reset, id) {
    console.log(ev, values)
    ev.preventDefault();
    const res = await axios.put(`/api/clientes/polizas/${id}`, values);
    reset();
    return res;
} */
export async function updatePolizeAction(ev, values, reset, id) {
    ev.preventDefault();
    const res = await fetch(`/api/clientes/polizas/${id}`, {
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
