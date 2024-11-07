import './App.css'
import axios from 'axios'

function App() {
  const host = import.meta.env.VITE_HOST_URL;

  const handleSubmit = async (e: any) => {
  
    e.preventDefault();
    console.log(host);

    const formData = new FormData(e.currentTarget);
    try {
      const data = {
        name: formData.get("name"),
        amount: formData.get("amount"),
        concept: formData.get("concept"),
      };
      
      const res = await axios.post(`${host}/payments`, data);      
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='main'>
        <h1>Pago</h1><br />
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="nombre">
            <p>Nombre:</p>
            <input id='nombre' type="text" name='name' />
          </label><br /><br />
          <label htmlFor="monto" >
            <p>Monto:</p>
            <input id='monto' type="number" name='amount' />
          </label><br /><br />
          <label htmlFor="concepto">
            <p>Concepto:</p>
            <input id='concepto' type="text" name='concept' />
          </label><br /><br />
          <button>PAGAR</button>
        </form>
      </div>

    </>
  )
}

export default App
