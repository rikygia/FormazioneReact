import React from 'react'
import freccia from './images/freccia.svg';
import HeroImage from './images/HeroImage.svg';
function Hero(){
    return(
        <div className="hero">
            <img className="imm" src={HeroImage} alt="can't find"></img>
            <div className="left">
                <div className="section">
                    <div className="title">Restiamo a<span className="verde"> casa</span>.</div>
                    <div className="subtitle">È arrivato il momento di adottare un comportamento responsabile e farsi carico dei propri doveri come cittadino e come individuo.</div>
                </div>
                <div className="container">
                    <div className="text">
                        <span className="numero">1072</span> Persone si sono fatte avanti
                    </div>
                    <div className="progress"><div className="didit"></div></div>
                    <div className="goalContainer"><div className="goal">arriviamo a 5 mila</div></div>
                </div>
                <div  className="tasto">
                <button>Unisciti
                <img src={freccia} alt="can't find"></img>
                </button>
                </div>

            </div>
        </div>
    )
}
export default Hero;