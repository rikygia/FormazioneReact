import {useReducer} from "react"
import image1 from "./images/image1.svg";
import image2 from "./images/image2.svg";
import image3 from "./images/image3.svg";
import puntini1 from "./images/puntini1.svg";
import puntini2 from "./images/puntini2.svg";
import puntini3 from "./images/puntini3.svg";
import './App.css';
const testi=[
  {
    titolo:"ONBOARDING",
    testo:"Con questo progetto imparerai alcune delle funzionalità avanzate del css e inizierai ad utilizzare javascript per far prendere vita alla web app."
  },
  {
    titolo:"TRANSITION, FLEX E MOLTO ALTRO",
    testo:"Dovrai utilizzare flexbox per organizzare i componenti nelle varie schermate. Inizierai ad aggiungere animazioni semplici grazie all’attributo transition"
  },
  {
    titolo:"SEI HAI DEI DUBBI, CHIEDI!",
    testo:"CSS non è semplice da imparare. Non esitare dunque a contattare un’altro IT per chiedere consigli."
  },
]
const immagini=[
  image1,
  image2,
  image3
]
const puntini=[
  puntini1,
  puntini2,
  puntini3
]
/*
function Schermata({img,children,titolo,puntini,onClickHandle})
{

  return(<div className="container">
  <div className="img-container">
      <img className="image" src={img} alt="not found"></img>
      <img className="puntini" src={puntini} alt="not found"></img>
  </div>
  <div className="text-container">
      <div className="title">
          {titolo}
      </div>
      <div className="text">
          {children}
      </div>
  </div>
  <div className="button-container">
      <button onClick={onClickHandle}>Avanti</button>
  </div>
</div>
)
}*/

function Immagini({immagini,translazione}){
  return(
    <div className="img-container" translazione={translazione}>
      {Object.values(immagini).map((elem)=>
      <img className="image" src={elem} alt="not found"></img>)}
    </div>
  )
}
function Puntini({puntini,translazione}){
  return(
    <div className="puntini-container" translazione={translazione}>
      {Object.values(puntini).map((elem)=>
      <img className="puntini" src={elem} alt="not found"></img>)}
    </div>
  )
}
function Testi({testi, translazione}){
  return(
  <div className="text-container" translazione={translazione}>
  {Object.values(testi).map((elem)=>
      <div className="box"><div className="title">
          {elem.titolo}
      </div>
      <div className="text">
          {elem.testo}
      </div></div>)}
  </div>)
}
function Bottoni({onClickHandle}){

  return(<div className="button-container">
      <button onClick={onClickHandle}>Avanti</button>
      <button onClick={onClickHandle}>Avanti</button>
      <button onClick={onClickHandle}>Avanti</button>
  </div>)
}
function App() {
  const reducer=(state,action)=>{return 1+(state+1)%3}
  const [translazione,dispatch]=useReducer(reducer,1);
  return (
    <div className="container-all">
      <Immagini immagini={immagini} translazione={translazione}/>
      <Puntini puntini={puntini} translazione={translazione}/>
      <Testi testi={testi} translazione={translazione}/>
      <Bottoni onClickHandle={()=>dispatch()}/>
    </div>
  )
}

export default App;
