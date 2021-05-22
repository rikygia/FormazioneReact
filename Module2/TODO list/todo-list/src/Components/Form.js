import  {useContext,useState}  from 'react'

function Form({ListContext}){
    const [,dispatch]=useContext(ListContext);
    const [element,setElement]=useState('mele');
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

  export {Form};