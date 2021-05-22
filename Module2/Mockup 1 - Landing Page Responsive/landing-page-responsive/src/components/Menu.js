import React from 'react'
function Menu(){
    return (
        <div className="menu">
            <div className="containerTitle">
                <div className="title">
                #<span className="grigio">IORESTOA</span>CASA
                </div>
                <div className="imm"></div>
            </div>
            <ul>
                <li><a href="http://localhost:3000/" className="item">Chi siamo</a></li>
                <li><a href="http://localhost:3000/" className="item">Contattaci</a></li>
            </ul>
        </div>
    )
}

export default Menu;