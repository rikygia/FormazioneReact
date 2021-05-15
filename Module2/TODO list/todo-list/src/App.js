import * as React from 'react'
import './App.css';

const ListContext=React.createContext();


function Form(){
  const [,dispatch]=React.useContext(ListContext);
  const [element,setElement]=React.useState();

  function handleChange(e) {
    setElement(e.target.value)
  }

  return (
    <div className="form-container">
      <input type="text" value={element} onChange={handleChange}></input>
      <button onClick={dispatch(element)}>Aggiungi</button>
    </div>
  )
}
function ListInfo(){
  const [lista]=React.useContext(ListContext)
  return (
    <div className="info-container">
      <ul>
        {Object.values(lista).map((elem)=>
        <li>{elem}</li>)}
      </ul>
    </div>
  )
}
function aggiungiLista(lista,elemento){
  return [...lista,elemento];
}
function App() {
  const value=React.useReducer(aggiungiLista,{})
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
