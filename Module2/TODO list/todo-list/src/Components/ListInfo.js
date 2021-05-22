import  {useContext}  from 'react'
function ListInfo({ListContext}){
    const [lista,dispatch]=useContext(ListContext)
    return (
      <div className="info-container">
        <ul>
          {Object.keys(lista).map((elem)=>
          <li key={lista[elem].id}>
          <button onClick={ ()=>dispatch({action:"DELETE",index:elem}) }>Cancella</button>
          <label htmlFor={`${elem}-input`}>{lista[elem].elemento}</label>
          <input id={`${elem}-input`}type={"checkbox"}></input>
          </li>)}
        </ul>
      </div>
    )
  }


  export {ListInfo}