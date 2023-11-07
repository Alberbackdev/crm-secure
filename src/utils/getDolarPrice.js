import { getMonitor } from "consulta-dolar-venezuela";

//getMonitor("null").then($ => { console.log($) }); /*Obtener los valores de todos los monitores*/


//getMonitor("BCV", "lastUpdate").then($ => { console.log($) }); /*Obtener la ultima actualizacion del dólar en BCV*/
export const precioBCV = getMonitor("bcv", "price", false).then($ => { console.log($) }); /*Obtener el valor del dólar en BCV*/