import { useState } from 'react'
import './App.css'

function App() {
  const [lista, setLista] = useState([]);
  const [undid, setUndid] = useState([]);

  const handleClick = (event) => {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY
    }

    setLista((prev) => [...prev, newDot]);

    console.log(lista);
  }

  const handleUndo = (event) => {
    event.stopPropagation();

    setLista((prev) => {
      const novoArray = [...prev].slice(0, -1);
      return novoArray;
    });
  }

  return (
    <>
      <div id='page' onClick={handleClick}>
        <div className='container'>
          <button className='button' onClick={handleUndo}>Desfaz</button>
          {/* <button className='button' onClick={handleUndid}>Refaz</button> */}
        </div>
        {
          lista.map((item) => (
            <span className='dot' style={{ top: item.clientY, left: item.clientX }}></span>
          ))
        }
    </div>
    </>
  )
}

export default App
