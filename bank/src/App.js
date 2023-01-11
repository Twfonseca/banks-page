import './App.css';
import Menu from './components/Menu'
import About from './components/About';
import Instructions from './components/Instructions';
import { useEffect, useState } from 'react';

function App() {
  const [banks, setBanks]=useState([])
  const [ceps, setCeps]=useState([])
  const [ddd, setDdd]=useState([])
  const bankModel ={name:''}
  const cepModel={street:'', city:''}
  const codeStateModel={cstate:''}
  const  [bankForm, setBankForm]=useState(bankModel)
  const  [cepForm, setCepForm]=useState(cepModel)
  const  [dddForm, setDddForm]=useState(codeStateModel)
  const [bankResult, setBankResult]=useState({})

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
    setCepForm({...cepForm,[name]:value})
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
              <label htmlFor='streetName'>Nome da rua:</label>
              <input className='inputTxtStyle' name='street'type="text" id='streetName' placeholder='Exemplo: Rua Luiz de Luizio 'onChange={cepEvent}></input>
              <label htmlFor='cityName'>Nome da cidade:</label>
              <input className='inputTxtStyle' name='city' type="text" id='cityName' placeholder='Exemplo: Bluemenau'onChange={cepEvent}></input>
              <button className='buttonsStyle'>Pesquisar CEP</button>
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
