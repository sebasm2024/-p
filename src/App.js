import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Saludar from './components/Saludar';
function App() {

  const[stateCar, setStateCar]= useState(false);
  const[contar, setContar] = useState(0);

useEffect(() =>{
  console.log("Total:"+ contar);


}, [contar]);

const ensenderApagar =() => {
  setStateCar(!stateCar);
setContar(contar+1);
};


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>El coche esta encendido: {stateCar ? "Encendido" : "Apagado"}</h2>
        <h3>Clikcks:{contar}</h3>
        <button onClick={ensenderApagar}>Encender / Apagar </button>
      
     
      </header>
    </div>
  );
}

export default App;
