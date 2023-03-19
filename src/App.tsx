import { TiposBasicos } from "./typescript/TiposBasicos";
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { Funciones } from "./typescript/Funciones";
import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { Login } from './components/Login';
import { Usuarios } from './components/Usuarios';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a TS - React</h1>
      <hr></hr>
      <TiposBasicos></TiposBasicos>
      <hr></hr>
      <ObjetosLiterales></ObjetosLiterales>
      <hr></hr>
      <Funciones></Funciones>
      <hr></hr>
      <Contador></Contador>
      <hr></hr>
      <ContadorConHook></ContadorConHook>
      <hr></hr>
      <Login></Login>
      <hr></hr>
      <Usuarios></Usuarios>
    </div>
  )
}

export default App;