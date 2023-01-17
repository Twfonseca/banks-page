import React from 'react'
import '../App.css';
import dog2 from '../images/dog64px.png'
function Menu (){
    return(
        <header className='headerContainer'>
            <div className='logoContainer'>
                <img className='logoImageStyle' src={dog2} alt='Um cachorro com chapéu de detetive e uma lupa, rastreando pegadas'></img> 
                <h3 className='pageName'>Rastreador</h3> 
            </div>
            <nav className='navContainer'>
                <a href='#about' className='linkStyle'>Sobre</a>
                <a href='#howWorks' className='linkStyle'>Instruções</a>
                <a href='#search' className='linkStyle'>Pesquisa</a>
                <a href='#footerInfo' className='linkStyle'>Contatos</a>
            </nav>
        </header>
    )
}

export default Menu
