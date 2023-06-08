import React from "react";
import './Card.css';

const Card = (props) => {

    return (
        <div class="cita">
            <p>Mascota: <span>{props.mascota}</span></p>
            <p>Dueño: <span>{props.propietario}</span></p>
            <p>Fecha: <span>{props.fecha}</span></p>
            <p>Hora: <span>{props.hora}</span></p>
            <p>Sintomas: <span>{props.sintomas}</span></p>
            <button class="button eliminar u-full-width" onClick={() => props.borrarCita(props.id)}>Eliminar ×</button>
        </div>
        );
}

export default Card;