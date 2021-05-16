import * as React from 'react'
import './App.css';

const ListContext=React.createContext();


function Form(){
  const [,dispatch]=React.useContext(ListContext);
  const [element,setElement]=React.useState('mele');
  function handleChange(e) {
    setElement(e.target.value)
  }

  return (
    <div className="form-container">
      <input type="text" value={element} onChange={handleChange}></input>
      <button onClick={()=>dispatch({action:"ADD",dati:element})}>Aggiungi</button>
    </div>
  )
}

function ListInfo(){
  const [lista,dispatch]=React.useContext(ListContext)
  return (
    <div className="info-container">
      <ul>
        {Object.keys(lista).map((elem)=>
        <li key={elem}>
        {lista[elem]}
        <button onClick={ ()=>dispatch({action:"DELETE",dati:lista[elem]}) }>Cancella</button>
        <input type={"checkbox"}></input>
        </li>)}
      </ul>
    </div>
  )
}
function aggiungiLista(lista,elemento){
  if (elemento.action==="DELETE")
  {
    return lista.filter((elem)=>elem!==elemento.dati)
  }
  if (elemento.action==="ADD")
  {
    if(elemento.dati!=="")
      return [...lista,elemento.dati];
  }
}
function App() {
  const value=React.useReducer(aggiungiLista,[])
  return (
    <div className="container">
    <ListContext.Provider value={value}>
      <Form>

      </Form>
      <ListInfo>

      </ListInfo>
    </ListContext.Provider>
    </div>
  );
}

export default App;
