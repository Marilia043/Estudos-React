
import './dois.scss';
import { useState } from 'react';

export default function Dois() {
    const [dois, setDois] = useState(0);

    function aumentar(){
        setDois(dois + 1);
    }
    
   

return(
    <div className='pagina-dois'>
        <h1>Contador</h1>
        <div>
            <button onClick={aumentar}>+</button>
        </div>
            <div>
                {dois}
            </div>   
            <div>
                <a href='/'>Principal</a>
                <a href='soma'>Soma</a>
            </div>
    </div>
)

}