import './App.css';
import Menu from './components/Menu'
import About from './components/About';
import Instructions from './components/Instructions';
import {useEffect, useState } from 'react';
import MoreInfos from './components/MoreInfos';



function App() {

  useEffect(()=>{
    findBank()
  })

  const bankModel ={name:''}
  const cepModel={street:'', city:''}
  const [banks, setBanks]=useState([])
  const [bankForm, setBankForm]=useState(bankModel)
  const [cepForm, setCepForm]=useState(cepModel)
  let bankIspb= document.getElementById("ispb")
  let bankCode= document.getElementById("code")
  let bankFullName=document.getElementById("fullName")
  let streetResult=document.getElementById('street')
  let ngbrhdResult=document.getElementById('neighborhood')          
  let stateCodeResult=document.getElementById('stateCode')



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

  const findBank = async()=>{
    fetch("https://brasilapi.com.br/api/banks/v1").then((resp)=>{return resp.json()}).then((data)=>{
      setBanks(data)
    })
  }

const bankSearch = ()=>{ 
   let findedBank= banks.find(bank=>bank.fullName === bankForm.bank)
  console.log(findedBank)
  if(findedBank){
        let bankCode= document.getElementById("code")
        let bankFullName=document.getElementById("fullName")
        bankIspb.innerText="Ispb do banco: "+findedBank.ispb
        bankCode.innerText="Codigo do banco: "+findedBank.code
        bankFullName.innerText="Nome do banco: "+findedBank.fullName
        setBanks({})
  }else{
          let message=document.getElementById("ispb")
          message.innerText = "Por favor verifique se digitou corretamente o nome do banco como no exemplo "
          bankCode.innerText=""
          bankFullName.innerText=""
     }
  }

   function findCep (){
  let cepToSearch= cepForm.cep
  let searchUrl= "https://brasilapi.com.br/api/cep/v2/"+cepToSearch
   fetch(searchUrl).then((resp)=>{return resp.json()}).then((data)=>{  
    if(data.street!==undefined && data.neighborhood!==undefined && data.state!==undefined){
      streetResult.innerText= data.street
      ngbrhdResult.innerText= data.neighborhood
      stateCodeResult.innerText= data.state
    }else{
      streetResult.innerText= 'Verifique se digitou corretamente o cep e clique novamente no botão de pesquisa'
      ngbrhdResult.innerText= ''
      stateCodeResult.innerText= ''
    }


  })
}

  return (
      <section>
        <Menu></Menu>
        <About></About>
        <Instructions></Instructions>
        <section className='sectionContainer'>
          <h1 id='search' className='titleSection'>Pesquisa</h1>
          <div className='btnContianerStyle'>
            <div className='searchAreaContainer' id='topContainer'>
              <label htmlFor='bankName'className='labelStyle'>Nome do banco:</label>
              <input className='inputTxtStyle' name='bank' type="text" id='bankName'placeholder='Exemplo: Banco do Brasil S.A' onChange={bankEvent}></input>
              <p id='ispb'></p>
              <p id='code'></p>
              <p id='fullName'></p>
              
              <button className='buttonsStyle' onClick={bankSearch} >Pesquisar Bancos</button>
              
            </div>
            <div className='searchAreaContainer'>
              <label htmlFor='cityName'className='labelStyle'>CEP:</label>
              <input className='inputTxtStyle' name='cep' type="text" id='cepCode' placeholder='Exemplo:12345123'onChange={cepEvent}></input>
              <p id='street'></p>
              <p id='neighborhood'></p>
              <p id='stateCode'></p>
              <button className='buttonsStyle' onClick={findCep}>Pesquisar CEP</button>
            </div>
          </div>
        </section>
        <MoreInfos></MoreInfos>
      </section>
  );
}

export default App;

