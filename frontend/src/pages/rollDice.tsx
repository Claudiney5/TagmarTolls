import React, { useState } from 'react'

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
  let dd1:number = 0
  let dd2:number = 0
  let dd3:number = 0
  let dd4:number = 0

  const [diceArray, setDiceArray] = useState<any>([dd1, dd2, dd3, dd4])
  const [diceTwenty, setDiceTwenty] = useState<boolean>(true)

  function twentySideDie(x:number):number {
    return Math.floor(Math.random()*20) + 1
  }

  // function f_d20(x: number){  
  //   console.log(x)
  //   let i:number
  //   for(let i = 0; i < x; i++){
  //     setTimeout(() => setDiceArray([
  //       ...diceArray,
  //       {
  //         id: diceArray.i,
  //         value: Math.floor(Math.random()*20) + 1}
  //     ]), 1000)
  //     console.log('posição: ' , i)
  //     console.log('tamanho vetor', diceArray.length)
  //     console.log('número sorteado ', diceArray[i])
  //   }

  //   return 
     
  // }

  function dieNoise() {
    var audio = new Audio('dice.mp3')
    var audio2 = new Audio('dice2.mp3')
    var luck:number = 0

    luck = Math.floor(Math.random()*2) + 1

    switch(luck) {
      case 1: audio.play()
      break
      default: audio2.play()
    }
    
  }

  function f_d20(x: number){  
    
    let i:number = 0
    dd1 = 0
    dd2 = 0
    dd3 = 0
    dd4 = 0

    setDiceTwenty(true)
    
    console.log(diceArray)
    dieNoise()
    dd1 = Math.floor(Math.random()*20) + 1
    
    if(x > 1){
      dd2 = Math.floor(Math.random()*20) + 1
      setTimeout(() => dieNoise(), 300)
      if(x > 2){
        dd3 = Math.floor(Math.random()*20) + 1
        setTimeout(() => dieNoise(), 400)
      }
        if (x>3){
          dd4 = Math.floor(Math.random()*20) + 1
          setTimeout(() => dieNoise(), 500)
        }
    }
    
    setTimeout(() => setDiceArray([dd1,dd2,dd3,dd4]), 1200)

    return 
  }

  function f_d10(x: number){  
    
    let i:number = 0
    dd1 = 0
    dd2 = 0
    dd3 = 0
    dd4 = 0

    setDiceTwenty(false)
    
    console.log(diceArray)
    dieNoise()
    dd1 = Math.floor(Math.random()*10) + 1
    
    if(x > 1){
      dd2 = Math.floor(Math.random()*10) + 1
      setTimeout(() => dieNoise(), 100)
      if(x > 2){
        dd3 = Math.floor(Math.random()*10) + 1
        setTimeout(() => dieNoise(), 250)
      }
        if (x>3){
          dd4 = Math.floor(Math.random()*10) + 1
          setTimeout(() => dieNoise(), 400)
        }
    }
    
    setTimeout(() => setDiceArray([dd1,dd2,dd3,dd4]), 1200)

    return 
  }



  return(
    <>
      <div id="container-dice">
        <div className="content-dice">
          <div className="dd card-dice dice">
            <img src={botao1d20} onClick={() => f_d20(1)}/>
            <img src={botao2d20} onClick={() => f_d20(2)}/>
            <img src={botao3d20} onClick={() => f_d20(3)}/>
            <img src={botao4d20} onClick={() => f_d20(4)}/>
            <hr/>
            <img src={botao1d10} onClick={() => f_d10(1)}/>
            <img src={botao2d10} onClick={() => f_d10(2)}/>
            <img src={botao3d10} onClick={() => f_d10(3)}/>
            <img src={botao4d10} onClick={() => f_d10(4)}/>
          </div>

   

          <div className="tx card-dice text">
            <div className="diceTitle">
              <img src={banner} alt="Tagmar RPG" />
            </div>
            <h2>Lançamento de dados</h2>
            <p>Os principais lançamentos de dados estão na coluna da esquerda. </p>
            <p>O cálculo com modificadores e totalizações ficam a cargo do MJ ou do jogador.</p>
          </div>

          <div className="res result">
            <div className="dice_rolls">
            {diceTwenty ? (  
            <ul>
              {diceArray.map((dieItem:any) => (dieItem != 0 ?
                <li className="die die2" >
                  <p>{dieItem}</p>
                </li>  :
                <li className="die2 hidden"> </li> 
              ))}
              </ul>)
                : (
              <ul>
              {diceArray.map((dieItem:any) => (dieItem != 0 ?
                <li className="die10 die1" >
                  <p>{dieItem}</p>
                </li>  :
                <li className="die1 hidden"> </li> 
              ))
              }
            </ul>)
            }

                    

            </div>
            
          </div>
        </div>

       


      </div>
    </>
  )
}

export default RollDice