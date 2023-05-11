import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <ul className='lista-citas'>
      <Card mascota="Nina" duenio="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna"/>
      <Card mascota="Sifon" duenio="Flecha" fecha="2023-08-05" hora="09:24" sintomas="Duerme mucho"/>
      <Card mascota="Floki" duenio="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo"/>
    </ul>
  );
}

export default App;
