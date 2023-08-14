import './index.scss';
import { useState } from "react";

export default function sorveteria() {
    const [item, setItem] = useState('');
    const [valor, setvalor] = useState(0);
    const [lista, setLista] = useState([]);
 

    function preco(){

    }

    function adicionar(){
        let s = {
            item: setItem,
            valor: setvalor
        }
        setLista([...item, item]);
    }

    return (
        <div className='pagina-sorvete'>
            <div className='s'>
                <img />
                <h5>Sorveteria</h5>
            </div>
            <div className='sla'>
                <h1>Novo item</h1>
                <div>
                    <input type='text' value={item} onChange={e=> setItem(e.target.value)}/>
                    <p>R$</p>
                    <input type='number' value={valor} onChange={e=> setvalor(e.target.value)}/>
                    <button onClick={adicionar}>Adicionar</button>
                </div>

                <h1>Lista de compras</h1>
            </div>
            <a href='subtracao'></a>
        </div>
    )
}