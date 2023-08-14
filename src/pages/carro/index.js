import './index.scss';
import { useState } from 'react';

export default function Carro() {
    const [carro, setCarro] = useState(0);
    const [parcelas, setParcelas] = useState(0);
    const [juros, setJuros] = useState(0);
    const [valor, setValor] = useState(0);

    function c(e){
        setCarro(Number(e.target.value));
    }

    function p(e) {
        setParcelas(Number(e.target.value));
    }

    function j(e) {
       setJuros(Number(e.target.value));
    }

    function resultado() {
        let v = c + p + j;
        setValor(v); 
    }

    return(
        <div className='pagina-carro'>
            <h1>Simulador de compra de Veículo</h1>
            <div className='dois'>
                <h3>Valor total</h3>
                <input type='text' onChange={c} value={carro} />
                <div>
                    <h3>Parcelas</h3>
                    <input type='text' onChange={p} value={parcelas} />

                    <h3>Juros Mensal</h3>
                    <input type='text' onChange={j} value={juros} />
                </div>
                <button onClick={resultado}>Calcular</button>
                = {valor}
                

            </div>
            <a href='sorveteria'>sorveteria</a>
        </div>
    )


}
