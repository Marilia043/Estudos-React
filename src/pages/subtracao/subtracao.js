import './subtracao.scss';

import { useState } from 'react';

export default function Subtrair() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function altN1(e) {
    setNumero1(Number(e.target.value));
  }

  function altN2(e) {
    setNumero2(Number(e.target.value));
  }

  function calcularSub() {
    let x = numero1 - numero2;
    setResultado(x);
  }


  return (
    <div className='pagina-sub'>
      <h1> Calculaora de subtracao </h1>

      <div>
        Número 01: <input type='text' onChange={altN1} value={numero1} />
      </div>
      <div>
        Número 02: <input type='text' onChange={altN2} value={numero2} />
      </div>
      <div>
        = {resultado}
      </div>
      <div>
        <button onClick={calcularSub}> Subtrair </button>
      </div>
    </div>
  )
}