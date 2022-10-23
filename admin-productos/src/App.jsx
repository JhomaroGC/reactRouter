import {
  BrowserRouter, //Agrupador de rutas
  Routes, //Rutas públicas
  Route, //el path que va a traer el localhots
} from "react-router-dom"; //A través de ellas se configuran las navegaciones que neceistamos

//Styles
import normalize from './assets/css/normalize.css'
import styles from './assets/css/styles.css'


//Importar Layout, esta parte es estática y es la que permite crear una SPA
import Layout from "./Layout/Layout";

//Importar pages: Cambian según la navegación
import Main from "./pages/Main";
import Vite from "./pages/Vite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Vite />}></Route>
          <Route path="productos" element={<Main />}></Route>
          <Route path="contactos" element={<Main />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
