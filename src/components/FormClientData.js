import React, { useState } from "react";
import axios from "axios";

//This is form for new client

export const FormClientData = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [cidentified, setCIdentified] = useState("");
  const [addres, setAddres] = useState("");
  const [phone, setPhone] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");

  async function createClient(ev) {
    ev.preventDefault();
    const data = { name, lastname, cidentified, addres, phone, dateofbirth };
    await axios.post("../api/clientes/clientes", data);
  }

  return (
      <div className= "max-w-screen-md border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-6">
              <form onSubmit={createClient} className="sm:col-span-8">
                <h1 className="text-base font-semibold leading-7 text-gray-900">Nuevo Cliente</h1>
                <div className="sm:col-span-3">
                    <label>Nombres</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            placeholder="fullName"
                            className="block w-full rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={name}
                            onChange={(ev) => setName(ev.target.value)}
                        />
                    </div>
                    <label>Apellido</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            placeholder="LastName's"
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={lastname}
                            onChange={(ev) => setLastName(ev.target.value)}
                        />
                    </div>
                </div>
                <div className="col-span-full">
                    <label>Fecha de Nacimiento</label>
                    <input
                        type="date"
                        className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={dateofbirth}
                        onChange={(ev) => setDateOfBirth(ev.target.value)}
                    />
                </div>
                <div className="col-span-full">
                    <label>Direccion</label>
                    <input
                        type="text"
                        placeholder="Av. 6 entre calles 9 y 10 al aldo de x por y carea"
                        className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={addres}
                        onChange={(ev) => setAddres(ev.target.value)}
                    />
                </div>
                <div className="sm:col-span-2 sm:col-start-1">    
                    <label>Cedula de Identidad</label>
                    <input
                    type="number"
                    placeholder="V- 12345678"
                    className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={cidentified}
                    onChange={(ev) => setCIdentified(ev.target.value)}
                    />
                </div>
                <div className="sm:col-span-2">
                    <label>Telefono</label>
                    <input
                    type="number"
                    placeholder="04XX 1234567"
                    className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={phone}
                    onChange={(ev) => setPhone(ev.target.value)}
                    />
                </div>
                
                <button type="submit" className="btn-primary">
                Siguiente
                </button>
            </form>
        </div>
    </div>
  );
};
