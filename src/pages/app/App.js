import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


function App() {

  function sla(e){
    toast.dark('Você alterou para:' + e.target.value);
  }

  function slaa(){
    toast.dark('Intervalo')
  }

  return (
    <div className="pagina-app">
      <ToastContainer/>
      <div className='App'>
        <h1 className='sx'>LANCHINHO</h1>

      <div className='m'>
        <button onMouseMove={slaa}>Clique</button>
        <input type='text' onChange={sla}/>
      </div>

        <a href='dois'>Contador</a>
      
      </div>
    </div>
  );
}

export default App;
