import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/pages/attributes.css'
import { Select } from 'react-functional-select'
import { compileFunction } from 'vm'



function Attributes() {
  const [stagePoint, setStagePoint] = useState<number>(1)
  const [nextStagePoints, setNextStagePoints] = useState<number>(11)
  const [acquisitionPoints, setAcquisitionPoints] = useState<number>(16)
  const [raca, setRaca] = useState<raceOptions | null>({value:'Humano', label:'Humano'})
  const [occupation, setOccupation] = useState<occupationOptions | null>(null)
  const [agilidade, setAgilidade] = useState<number>(0)
  const [aura, setAura] = useState<number>(0)
  const [carisma, setCarisma] = useState<number>(0)
  const [forca, setForca] = useState<number>(0)
  const [fisico, setFisico] = useState<number>(0)
  const [intelecto, setIntelecto] = useState<number>(0)
  const [percepcao, setPercepcao] = useState<number>(0)


  //  ----- Estágio  ------
  
  function nextstage (){
    if(stagePoint===1) setNextStagePoints(11)
    if(stagePoint===2) setNextStagePoints(21)
    if(stagePoint===3) setNextStagePoints(31)
    if(stagePoint===4) setNextStagePoints(46)
    if(stagePoint===5) setNextStagePoints(61)
    if(stagePoint===6) setNextStagePoints(76)
    if(stagePoint===7) setNextStagePoints(96)
    if(stagePoint===8) setNextStagePoints(116)
    if(stagePoint===9) setNextStagePoints(136)
    if(stagePoint===10) setNextStagePoints(166)
    if(stagePoint===11) setNextStagePoints(196)
    if(stagePoint===12) setNextStagePoints(226)
    if(stagePoint===13) setNextStagePoints(266)
    if(stagePoint===14) setNextStagePoints(306)
    if(stagePoint===15) setNextStagePoints(346)
    if(stagePoint===16) setNextStagePoints(386)
    if(stagePoint===17) setNextStagePoints(436)
    if(stagePoint===18) setNextStagePoints(486)
    if(stagePoint===19) setNextStagePoints(536)
    if(stagePoint===20) setNextStagePoints(586)
    if(stagePoint===21) setNextStagePoints(646)
    if(stagePoint===22) setNextStagePoints(706)
    if(stagePoint===23) setNextStagePoints(766)
    if(stagePoint===24) setNextStagePoints(826)
    if(stagePoint===25) setNextStagePoints(896)
    if(stagePoint===26) setNextStagePoints(966)
    if(stagePoint===27) setNextStagePoints(1036)
    if(stagePoint===28) setNextStagePoints(1106)
    if(stagePoint===29) setNextStagePoints(1186)
    if(stagePoint===30) setNextStagePoints(1)
    if(stagePoint===31) setNextStagePoints(11)
    if(stagePoint===32) setNextStagePoints(11)
    if(stagePoint===33) setNextStagePoints(11)
    if(stagePoint===34) setNextStagePoints(11)
    if(stagePoint===35) setNextStagePoints(11)
    if(stagePoint===36) setNextStagePoints(11)
    if(stagePoint===37) setNextStagePoints(11)
    if(stagePoint===38) setNextStagePoints(11)
    if(stagePoint===39) setNextStagePoints(11)
    if(stagePoint===40) setNextStagePoints(11)
      
    }
  }



  // ----- Opções de raça -----

  type raceOptions = {
    readonly value: string;
    readonly label: string;
  } 
  const raceOptions = [
    { value: 'Humano', label: 'Humano' },
    { value: 'Pequenino', label: 'Pequenino' },
    { value: 'Anoes', label: 'Anões' },
    { value: 'Elfo-Dourado', label: 'Elfo-Dourado' },
    { value: 'Elfo-Florestal', label: 'Elfo-Florestal' },
    { value: 'Meio-Elfo', label: 'Meio-Elfo' }
  ]
  const valueRaceOptions = useCallback((option: raceOptions): string => option.value, []);
  const onOptionChange = useCallback((option: raceOptions | null): void => setRaca(option), []); 
  const getOptionLabel = useCallback((option: raceOptions): string => `${option.label}`, []);

// ----- Opções de Profissões -----

  type occupationOptions = {
    readonly value: string;
    readonly label: string;
  }

  const occupationOptions = [
    { value: 'Bardo/a', label: 'Bardo/a' },
    { value: 'Guerreiro/a', label: 'Guerreiro/a' },
    { value: 'Ladino/a', label: 'Ladino/a' },
    { value: 'Mago/a', label: 'Mago/a' },
    { value: 'Rastreador/ra', label: 'Rastreador/ra' },
    { value: 'Sacerdote/tissa', label: 'Sacerdote/tissa' }
  ]
  
  const valueOccupationOptions = useCallback((option: raceOptions): string => option.value, []);
  const onOccupationChange = useCallback((option: raceOptions| null): void => setOccupation(option), []); 
  const getOccupationLabel = useCallback((option: raceOptions): string => `${option.label}`, []);

  

  function forFile() {
    console.log('Feito')
  }

  function setRaceAcquisitionPoints() {
    if (raca!.value==='Humano')  {
      setAcquisitionPoints(16)
      setAgilidade(0)
      setAura(0)
      setCarisma(0)
      setFisico(0)
      setForca(0)
      setIntelecto(0)
      setPercepcao(0)
    }
    if (raca!.value==='Pequenino') {
      setAcquisitionPoints(15)
      setAura(0)
      setAgilidade(2)
      setCarisma(1)
      setFisico(1)
      setForca(-2)
      setIntelecto(0)
      setPercepcao(1)
    }
    if (raca!.value==='Anoes') {
      setAcquisitionPoints(15)
      setAgilidade(-1)
      setAura(0)
      setCarisma(0)
      setFisico(2)
      setForca(1)
      setIntelecto(0)
      setPercepcao(0)
    }
    if (raca!.value==='Elfo-Dourado') {
      setAcquisitionPoints(15)
      setAgilidade(1)
      setAura(2)
      setCarisma(0)
      setFisico(-1)
      setForca(-1)
      setIntelecto(1)
      setPercepcao(0)
    }
    if (raca!.value==='Elfo-Florestal') {
      setAcquisitionPoints(15)
      setAgilidade(1)
      setAura(1)
      setCarisma(0)
      setFisico(-1)
      setForca(-1)
      setIntelecto(0)
      setPercepcao(2)
    }
    if (raca!.value==='Meio-Elfo') {
      setAcquisitionPoints(15)
      setAgilidade(1)
      setAura(0)
      setCarisma(1)
      setFisico(0)
      setForca(0)
      setIntelecto(0)
      setPercepcao(0)
    }

  }



  return (
    <div id="geral-container">
      <div id="container-attributes">
        <header>
          <h1>Criação de Personagens</h1>
          <p>Tenha em mãos o Livro de Regras 3.0 de Tagmar para utilizar esta ferramenta</p>
          <p>As informações necessárias para a criação de personagens estão na página 37 em diante.</p>
        </header>

        <div className="name">
          <label>
            Nome do personagem:
            <input type="text" name="name" />
          </label>
          <label>
            Nome do jogador:
            <input type="text" name="name-player" />
          </label>
        </div>

        <div className="experience">          
            <label>
              Estágio:
              <input type="text" name="stage" onChange={nextstage}/>
            </label>     
          
            <label>
              Experiência acumulada:
              <input type="text" name="experience-acumulada" />
            </label>

            <label>
              Experiência para próximo estágio:
              <p id="prox-nivel">{nextStagePoints}</p>
            </label>          
        </div>

        {/* ----- RAÇA E DIVINDADE ----- */}

        <div className="selects">
          <label className="selectOptions" htmlFor="raca-escolha">
            <span>Raça:</span>          
            <Select             
              options={raceOptions} 
              placeholder={'Escolha a raça do personagem...'}
              selectId='selectIdRace'
              
              onOptionChange={ onOptionChange }
              getOptionValue={valueRaceOptions}
              getOptionLabel={getOptionLabel}
              onMenuClose={setRaceAcquisitionPoints}
            />
          </label>

          <div className="god">
            <label>
              Divindade (não obrigatório):
              <input type="text" name="divindade" />
            </label>
          </div>
        </div>

    {/* -----  PROFISSÃO E ESPECIALIZAÇÃO ----- */}

        <div className="selects">
          <label className="selectOptions" htmlFor="profissoes">
            <span>Profissões:</span>
            <Select  
              options={occupationOptions} 
              placeholder={'Escolha a profissão de seu personagem...'}
              selectId='selectIdOccupation'
              
              onOptionChange={ onOccupationChange }
              getOptionValue={valueOccupationOptions}
              getOptionLabel={getOccupationLabel}
            /> 
          </label>
            
          <div className="especialization">
            <label>
              Especialização (não obrigatório):
              <input type="text" name="especialidade" />
            </label>
          </div>
        </div>


        {/* ----- AQUISIÇÃO DE ATRIBUTOS ----- */}

        <fieldset className="attributes">
          <fieldset id="aquisitionPoints">
            <p>
              Pontos de aquisição de atributos para {raca!.value}: {acquisitionPoints}
            </p>
          </fieldset>

          <div className="container-box">

            <fieldset className="agility box">
              <label htmlFor="intellect">Agilidade</label>
              <p>Nível:</p>
              <p>{agilidade}</p>
            </fieldset>

            <fieldset className="aura box">
              <label htmlFor="intellect">Aura</label>
              <p>Nível:</p>
              <p>{aura}</p>
            </fieldset>

            <fieldset className="charisma box">
              <label htmlFor="intellect">Carisma</label>
              <p>Nível:</p>
              <p>{carisma}</p>
            </fieldset>

            <fieldset className="physical box">
              <label htmlFor="intellect">Físico</label>
              <p>Nível:</p>
              <p>{fisico}</p>
            </fieldset>

            <fieldset className="stregth box">
              <label htmlFor="intellect">Força</label>
              <p>Nível:</p>
              <p>{forca}</p>
            </fieldset>

            <fieldset className="intellect box">
              <label htmlFor="intellect">Intelecto</label>
              <p>Nível:</p>
              <p>{intelecto}</p>
            </fieldset>

            <fieldset className="perception box">
              <label htmlFor="intellect">Percepção</label>
              <p>Nível:</p>
              <p>{percepcao}</p>
            </fieldset>

          </div>

        </fieldset>

        <input type="submit" value="Enviar" onClick={forFile}/>


      </div>
    </div>
  )

}

export default Attributes