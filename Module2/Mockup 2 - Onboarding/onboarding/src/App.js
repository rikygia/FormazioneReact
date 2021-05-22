import {useState} from "react"
import image1 from "./images/image1.svg";
import image2 from "./images/image2.svg";
import image3 from "./images/image3.svg";
import puntini1 from "./images/puntini1.svg";
import puntini2 from "./images/puntini2.svg";
import puntini3 from "./images/puntini3.svg";
import './App.css';

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
}
function App() {
  const [translazione,setTraslazione]=useState(0);
  return (
    <div className="container-all" translazione={translazione}>
      <Schermata img={image1} puntini={puntini1} titolo="ONBOARDING" onClickHandle={()=>{setTraslazione(1)}}>Con questo progetto imparerai alcune delle funzionalità avanzate del css e inizierai ad utilizzare javascript per far prendere vita alla web app.</Schermata>
      <Schermata img={image2} puntini={puntini2} titolo="TRANSITION, FLEX E MOLTO ALTRO" onClickHandle={()=>{setTraslazione(2)}}>Dovrai utilizzare flexbox per organizzare i componenti nelle varie schermate. Inizierai ad aggiungere animazioni semplici grazie all’attributo transition</Schermata>
      <Schermata img={image3} puntini={puntini3} titolo="SEI HAI DEI DUBBI, CHIEDI!" onClickHandle={()=>{setTraslazione(3)}}>CSS non è semplice da imparare. Non esitare dunque a contattare un’altro IT per chiedere consigli.</Schermata>
    </div>
  )
}

export default App;
