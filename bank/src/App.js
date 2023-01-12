import './App.css';
import Menu from './components/Menu'
import About from './components/About';
import Instructions from './components/Instructions';
import { useEffect, useState } from 'react';

function App() {
  const [banks, setBanks]=useState([])
  const bankModel ={name:''}
  const cepModel={street:'', city:''}
  const codeStateModel={cstate:''}
  const  [bankForm, setBankForm]=useState(bankModel)
  const  [cepForm, setCepForm]=useState(cepModel)
  const  [dddForm, setDddForm]=useState(codeStateModel)
  const [bankResult, setBankResult]=useState({})
  const [cepResult, setCepResult]=useState({})

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
      let bankIspb= document.getElementById("ispb")
      let bankCode= document.getElementById("code")
      let bankFullName=document.getElementById("fullName")
      bankIspb.innerText="Ispb do banco: "+bankResult.ispb
      bankCode.innerText="Codigo do banco: "+bankResult.code
      bankFullName.innerText="Nome do banco: "+bankResult.fullName
    setBankResult({})
   }else{
    let message=document.getElementById("ispb")
    let bankCode= document.getElementById("code")
    let bankFullName=document.getElementById("fullName")
        message.innerText = "Por favor verifique se digitou corretamente o nome do banco como no exemplo "
        bankCode.innerText=""
        bankFullName.innerText=""
   }
  }

async function findCep (){
  let cepToSearch= cepForm.cep
  let searchUrl= "https://brasilapi.com.br/api/cep/v2/"+cepToSearch
  await fetch(searchUrl).then((resp)=>{return resp.json()}).then((data)=>{ setCepResult(data) })
  await showCepResult()
}
  async function showCepResult(){
    let streetResult=document.getElementById('street')
    let ngbrhdResult=document.getElementById('neighborhood')          
    let stateCodeResult=document.getElementById('stateCode')
    streetResult.innerText= cepResult.street
    ngbrhdResult.innerText= cepResult.neighborhood
    stateCodeResult.innerText= cepResult.state
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
              <button className='buttonsStyle'>Pesquisar DDD</button>
            </div>
          </div>
        </section>
      </section>
  );
}

export default App;

