import { Link } from "react-router-dom";
import './index.scss';
import { useState } from "react";
import axios from 'axios';

export default function Filmes(){
    const [filme, setFilme] = useState('');
    const [lista, setLista] = useState([]);

async function buscar(){
    let url = 'https://www.omdbapi.com?apikey=93189fac&s=' + filme

    let resposta = await axios.get(url);
    setLista(resposta.data.Search);  
}


return(
    <div className="pagina-filme">
        <div className="um">
            <h2>IMDB</h2>
        </div>
            <div className="dois">
                <h3>Consulta de Filmes</h3>
                <label>Nome:</label>
                <input type="text" value={filme} onChange={e=> setFilme(e.target.value)} />
                <div>
                    <button onClick={buscar}>Adicionar</button>
                </div>
                <div className="tres">
                    <table>
                        <thead>
                            <tr>
                                <th >Código</th>
                                <th>Título</th>
                                <th>Ano</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.map(item=>
                                <tr>
                                    <td>{item.imdbID}</td>
                                    <td>{item.Title}</td>
                                    <td>{item.Year}</td>
                                </tr>
                                )}
                        </tbody>
                    </table>

                </div>
            </div>
            <Link className='voltar' to='/'>Principal</Link> 
    </div>
)




}