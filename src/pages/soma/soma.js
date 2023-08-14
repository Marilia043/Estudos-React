import './soma.scss';

import  { useState } from 'react';

export default function Soma() {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function altN1(e) {
        setNumero1(Number(e.target.value));
    }

    function altN2(e) {
        setNumero2(Number(e.target.value));
    }

    function calcularSoma() {
        let x = numero1 + numero2;
        setResultado(x);
    }

    return (
        <div className='pagina-soma'>
          <h1> Calculadora de Soma </h1>
    
          <div>
            Número 01: <input type='text' onChange={altN1} value={numero1} />
          </div>
          <div>
            Número 02: <input type='text' onChange={altN2} value={numero2} />
          </div>
          <div>
            = {resultado}
          </div>
          <div className='m'>
            <button onClick={calcularSoma}> Soma </button>
            <a href='dois'>Contador</a>
            <a href='subtracao'>subtração</a>
          </div>
        </div>
      ) 
}