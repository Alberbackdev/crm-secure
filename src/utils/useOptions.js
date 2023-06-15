//enviar data de opciones
const tiposPolizaLabel = (opciones) => { opciones.map((l, i) => <option value={l.value} key={i}>{l.label}</option>) }