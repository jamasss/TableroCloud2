import logo from './LogoM.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <h1 class="estilo-titulo"> Generador de nombres estandar </h1>
        <p class="h3">Seleccione tipo de recurso a crear</p>
        <select name="Tipo de recurso">
          <option value="Maquina">Virtual Machine</option>
          <option value="appservice">appservice</option>
          <option value="vmscaleset">Virtual Machine Scale set</option>
        </select>
        <p class="h3">Indique el nombre del proyecto</p>
          <input type="text" id="nameproy" name="nombre" class="estilo-input" />
        <br />
        <p class="h3">
          <label for="name"> Localizacion: </label>
          <select name="Localizacion">
            <option value="Azure">Azure</option>
            <option value="Vmware">On-premise (VMware)</option>
          </select>
          <label for="name"> Entorno: </label>
          <select name="Entorno">
            <option value="Produccion">Produccion</option>
            <option value="Desarrollo">Desarrollo</option>
            <option value="Pruebas">Pruebas</option>
          </select>
          <label for="name"> Servicio:</label>
          <select name="Servicio">
            <option value="IVR">IVR</option>
            <option value="Convergencia">Convergencia</option>
            <option value="Pruebas">Pruebas</option>
          </select>
          <label for="name"> Rol: </label>
          <select name="Rol">
            <option value="Presentacion">Presentacion</option>
            <option value="Aplicacion">Aplicacion</option>
            <option value="BD">Base de datos</option>
          </select>
        </p>
        <br />
        <button class="btn btn-outline-danger">Generar</button>
      </header>
     
    </div>
    
  );
}

export default App;
