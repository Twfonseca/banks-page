import './App.css';
import Menu from './components/Menu'
import About from './components/About';
import Instructions from './components/Instructions';
import {useEffect, useState } from 'react';

/* CRIAR UM MAP COM IS ITEMS E PASSAR NA UL  : https://www.youtube.com/watch?v=6iJABCS34Jk  */

function App() {
  const bankModel ={name:''}
  const cepModel={street:'', city:''}
  const codeStateModel={cstate:''}
  const [banks, setBanks]=useState([])
  const [bankForm, setBankForm]=useState(bankModel)
  const [cepForm, setCepForm]=useState(cepModel)
  const [dddForm, setDddForm]=useState(codeStateModel)
  const [bankResult, setBankResult]=useState({})
  const [cepResult, setCepResult]=useState({})
  const [dddResult, setDddResult]=useState({})
  const [dddArrayResult, setdddArrayResult]=useState([])
  let bankIspb= document.getElementById("ispb")
  let bankCode= document.getElementById("code")
  let bankFullName=document.getElementById("fullName")
  let streetResult=document.getElementById('street')
  let ngbrhdResult=document.getElementById('neighborhood')          
  let stateCodeResult=document.getElementById('stateCode')
  let dddStateCode = document.getElementById('stateDDDCode')   
  let citiesDDD = document.getElementById('listCitiesCode')

 

  useEffect(()=>{
    findBank()  
  })

  const bankEvent= (event)=>{
    let name= event.target.name
    let value= event.target.value
    setBankForm({[name]:value})
  }

  const cepEvent= (event)=>{
    let name= event.target.name
    let value= event.target.value
    setCepForm({[name]:value})
  }

  const dddEvent= (event)=>{
    let name= event.target.name
    let value= event.target.value
    setDddForm({[name]:value})
  }

  const findBank = async()=>{
     const bankData= await fetch("https://brasilapi.com.br/api/banks/v1")
     const bankJson= await bankData.json()
     setBanks(bankJson)
  }

const bankSearch =()=>{
    let findedBank= banks.find(bank=>bank.fullName === bankForm.bank)
    setBankResult(findedBank)
   if(bankResult.ispb !== undefined && bankResult.code !== undefined && bankResult.fullName !== undefined){
      let bankCode= document.getElementById("code")
      let bankFullName=document.getElementById("fullName")
      bankIspb.innerText="Ispb do banco: "+bankResult.ispb
      bankCode.innerText="Codigo do banco: "+bankResult.code
      bankFullName.innerText="Nome do banco: "+bankResult.fullName
    setBankResult({})
   }else{
        let message=document.getElementById("ispb")
        message.innerText = "Por favor verifique se digitou corretamente o nome do banco como no exemplo "
        bankCode.innerText=""
        bankFullName.innerText=""
   }
  }

async function findCep (){
  let cepToSearch= cepForm.cep
  let searchUrl= "https://brasilapi.com.br/api/cep/v2/"+cepToSearch
  await fetch(searchUrl).then((resp)=>{return resp.json()}).then((data)=>{ setCepResult(data) })
        showCepResult()
}
   function showCepResult(){
      if(cepResult.street!==undefined && cepResult.neighborhood!==undefined && cepResult.state!==undefined){
        streetResult.innerText= cepResult.street
        ngbrhdResult.innerText= cepResult.neighborhood
        stateCodeResult.innerText= cepResult.state
      }else{
        streetResult.innerText= 'Verifique se digitou corretamente o cep e clique novamente no botão de pesquisa'
        ngbrhdResult.innerText= ''
        stateCodeResult.innerText= ''
      }
  }

  async function findDDD(){
    let  dddTosearch = dddForm.numberDDD
    let searchDddUrl= "https://brasilapi.com.br/api/ddd/v1/"+dddTosearch
    await fetch (searchDddUrl).then((resp)=>{return resp.json()}).then((data)=>{ setDddResult(data)
      setdddArrayResult(dddResult.cities)})
    confirmDddResult()
  }

  function confirmDddResult(){
    if(dddResult.state !== undefined && dddResult.cities !== undefined){
        showDddResult()
    }else{
      dddStateCode.innerText="Por favor verifique se digitou o DDD Correto e tente novamenteclicando no botão pesquisar "
    }

  }

  function showDddResult(){
    dddStateCode.innerText= "Esse DDD pertence ao estado de: "+dddResult.state
  }


  return (
      <section>
        <Menu></Menu>
        <About></About>
        <Instructions></Instructions>
        <section className='sectionContainer'>
          <h1 className='titleSection'>Pesquisa</h1>
          <div className='btnContianerStyle'>
            <div className='searchAreaContainer'>
              <label htmlFor='bankName'>Nome do banco:</label>
              <input className='inputTxtStyle' name='bank' type="text" id='bankName'placeholder='Exemplo: Banco do Brasil S.A' onChange={bankEvent}></input>
              <p id='ispb'></p>
              <p id='code'></p>
              <p id='fullName'></p>
              
              <button className='buttonsStyle' onClick={bankSearch} >Pesquisar Bancos</button>
              
            </div>
            <div className='searchAreaContainer'>
              <label htmlFor='cityName'>CEP:</label>
              <input className='inputTxtStyle' name='cep' type="text" id='cepCode' placeholder='Exemplo:12345123'onChange={cepEvent}></input>
              <p id='street'></p>
              <p id='neighborhood'></p>
              <p id='stateCode'></p>
              <button className='buttonsStyle' onClick={findCep}>Pesquisar CEP</button>
            </div>
            <div className='searchAreaContainer'>
              <label htmlFor='dddNumber'>Numero do DDD:</label>
              <input className='inputTxtStyle' name='numberDDD' type="text" id='dddNumber' placeholder='Exemplo: 11'onChange={dddEvent}></input>
              <p id='stateDDDCode'></p>
              <ul id='listCitiesCode'>
            
              </ul>
              <button className='buttonsStyle' onClick={findDDD}>Pesquisar DDD</button>
            </div>
          </div>
        </section>
      </section>
  );
}

export default App;

