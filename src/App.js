import React, { useState } from 'react';
import './App.css';
import Listado from './Listado';
import Formulario from './Formulario';

function App() {
  const [citas, setCitas] = useState([]);

  function getCitas() {
    return citas;
  }

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <h2>Crear mi Cita</h2>
            <Formulario getCitas={getCitas} setCitas={setCitas} />
          </div>
          <div className='one-half column'>
            <h2>Administrar mis Citas</h2>
            <Listado getCitas={getCitas} setCitas={setCitas}>
            </Listado>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
