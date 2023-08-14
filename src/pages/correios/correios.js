import { Link } from 'react-router-dom';
import './correios.scss';
import { useState } from 'react';
import axios from 'axios';

export default function Correios(){
    const [cep, setCEP] = useState('');
    const [info, setINFO] = useState('');


async function buscar(){
    let url = 'https://viacep.com.br/ws/' + cep + '/json/';

    let resposta = await axios.get(url);

    setINFO(resposta.data.logradouro + ' , Bairro: ' + resposta.data.bairro);
}

return (
    <div className="pagina-lista-tarefa"> 
        <div className='container'> 
            <h1>Correio</h1>
            <div>
            Cep:
            <input type='text' value={cep} onChange={ e => setCEP(e.target.value) } />
            <button onClick={buscar}> Buscar </button>
            </div>
            <div>
                <h3>
                    {info}
                </h3>
            </div>
        </div>
       
    <Link className='voltar' to= '/'> Voltar para menu </Link>
    </div>
)
}



