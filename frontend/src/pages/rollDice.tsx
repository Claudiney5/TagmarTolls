import React from 'react'

import banner from '../images/BannerTagmar.png'
import botao1d20 from '../images/1d20.png'
import botao2d20 from '../images/2d20.png'
import botao3d20 from '../images/3d20.png'
import botao4d20 from '../images/4d20.png'
import botao1d10 from '../images/1d10.png'
import botao2d10 from '../images/2d10.png'
import botao3d10 from '../images/3d10.png'
import botao4d10 from '../images/4d10.png'
import d20_0 from '../images/d20_0.png'
import d20_1 from '../images/d20_1.png'
import d20_2 from '../images/d20_2.png'
import d20_3 from '../images/d20_3.png'

import '../styles/pages/rollDice.css'


function RollDice() {

  function twentySideDie() {
    return Math.floor(Math.random()*20) + 1
  }
  
  function f_d20_1 (){
    return (twentySideDie())
  }

  return(
    <>
      <div id="container-dice">
        <div className="content-dice">
          <div className="dd card-dice dice">
            <img src={botao1d20} onClick={f_d20_1}/>
            <img src={botao2d20} onClick={f_d20_1}/>
            <img src={botao3d20} onClick={f_d20_1}/>
            <img src={botao4d20} onClick={f_d20_1}/>
            <hr/>
            <img src={botao1d10} onClick={f_d20_1}/>
            <img src={botao2d10} onClick={f_d20_1}/>
            <img src={botao3d10} onClick={f_d20_1}/>
            <img src={botao4d10} onClick={f_d20_1}/>
          </div>

   

          <div className="tx card-dice text">
            <div className="diceTitle">
              <img src={banner} alt="Tagmar RPG" />
            </div>
            <h2>Lançamento de dados</h2>
            <p>Os principais lançamentos de dados estão na outra coluna. </p>
            <p>Modificadores devem ser calculados separadamente pelo MJ.</p>
          </div>

          <div className="res result">
            <div className="dice_rolls">
              <div className="die">
                <img src={d20_0}  />
              </div>
              <div className="die">
                <img src={d20_1}  />
              </div>
              <div className="die">
                <img src={d20_2}  />
              </div>
              <div className="die">
                <img src={d20_3}  />
              </div>             
            </div>
            
          </div>
        </div>

       


      </div>
    </>
  )
}

export default RollDice