import  {useReducer,createContext}  from 'react'
import  {ListInfo} from "./Components/ListInfo.js"
import  {Form} from "./Components/Form.js"
import './App.css';

const ListContext=createContext();

const init=[{elemento:"banana",id:0},{elemento:"pera",id:1},{elemento:"ananas",id:2}]
let cont=init.length;
function aggiungiLista(lista,elemento){
  if (elemento.action==="DELETE")
  { 
    const dup=[...lista]
    dup.splice(elemento.index,1);

    return [...dup];
  }
  if (elemento.action==="ADD")
  {
    if(elemento.dati!=="")
      return [...lista,{elemento:elemento.dati,id:cont++}];
  }
}
function App() {
  const value=useReducer(aggiungiLista,init)
  return (
    <div className="container">
    <ListContext.Provider value={value}>
      <Form ListContext={ListContext}>

      </Form>
      <ListInfo ListContext={ListContext}>

      </ListInfo>
    </ListContext.Provider>
    </div>
  );
}

export default App;
