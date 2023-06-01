import Card from "./Card";

const Listado = ({getCitas, setCitas}) => {
    let citas = getCitas();
    return(
        citas.map(cita => <Card getCitas={getCitas} setCitas={setCitas} mascota={cita.mascota} propietario={cita.propietario} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas}></Card>)
    );
}

export default Listado;