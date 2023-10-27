import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buscador from './components/Buscador'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseColaboradores } from './BaseColaboradores'


function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [searchValue, setSearchValue] = useState('');

  const guardarColaborador = (nuevoColaborador) => {
    // Agregar el nuevo colaborador a la matriz
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const handleSearch = (value) => {
    // Agregar el nuevo colaborador a la matriz
    setSearchValue(value);
  };

  const onDeleteColaborador = (email) => {
    // Filtra la lista para eliminar el colaborador con el correo electrónico especificado
    const nuevaLista = colaboradores.filter((colaborador) => colaborador.email !== email);
    setColaboradores(nuevaLista);
  };

  return (
    <>
      <h1 className='mb-5'>Lista de Colaboradores</h1>
      <Buscador searchValue={handleSearch} />
      <div className='d-flex cont-list-form'>
        <Listado searchValue={searchValue} colaboradores={colaboradores} onDeleteColaborador={onDeleteColaborador} />
        <Formulario guardarColaborador={guardarColaborador} />
      </div>
    </>
  )
}

export default App
