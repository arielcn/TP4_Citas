import Card from "./Card";

const Listado = ({getCitas, setCitas}) => {
    let citas = getCitas();

    const borrarCita = (id) => {
        setCitas(getCitas().filter(cita => cita.id !== id));
    }

    return(
        citas.map(cita => <Card borrarCita={borrarCita} id={cita.id} mascota={cita.mascota} propietario={cita.propietario} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas}></Card>)
    );
}

export default Listado;