import React, {useState} from "react";
import './Formulario.css';

const Formulario = ({getCitas, setCitas}) => {
    const agregarMascota = (e) =>{
        let citas = getCitas();
        e.preventDefault();
        setCitas(
        [
            ...citas,
            {
                mascota : e.target.mascota.value,
                propietario : e.target.propietario.value,
                fecha : e.target.fecha.value,
                hora : e.target.hora.value,
                sintomas : e.target.sintomas.value
            }
        ])
        console.log(e.target.mascota.value);
        console.log(e.target.propietario.value);
        console.log(e.target.fecha.value);
        console.log(e.target.hora.value);
        console.log(e.target.sintomas.value);
    }

    return (
        <form onSubmit={agregarMascota}>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"/>
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota"/>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width"/>
            <label>Hora</label><input type="time" name="hora" className="u-full-width"/>
            <label>Sintomas</label><textarea name="sintomas" className="u-full-width"></textarea>
            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </form>
    );
}

export default Formulario;