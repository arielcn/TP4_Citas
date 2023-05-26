import './App.css';
import Card from './Card';
import Formulario from './Formulario';

function App() {
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <h2>Crear mi Cita</h2>
            <Formulario></Formulario>
          </div>
          <div className='one-half column'>
            <h2>ADMINISTRA TUS CITAS</h2>
            <Card mascota="Nina" duenio="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna" />
            <Card mascota="Sifon" duenio="Flecha" fecha="2023-08-05" hora="09:24" sintomas="Duerme mucho" />
            <Card mascota="Floki" duenio="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
