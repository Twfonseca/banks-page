import React from 'react'
import '../App.css';

function About(){
    return(
        <section tabIndex='0' id='about'className='sectionContainer'>
            <h1 tabIndex='0' className='titleSection'>Sobre</h1>
            <div tabIndex='0' className='textContainer'>
                <p tabIndex='0' className='txtStyle'>Essa pagina tem como objetivo facilitar a busca de informações para ajudar em registros.</p>
                <p tabIndex='0' className='txtStyle'>As informações podem ser sobre:</p>
                <ul tabIndex='0' className='listStyle'>
                    <li tabIndex='0' className='itemStyle'>Bancos , numero de codigo do banco e ispb do banco a partir do nome do banco</li>
                    <li tabIndex='0' className='itemStyle'>Nome da rua, nome do bairro que se localiza essa rua e o estado a partir do Codigo de Endereçamento Postal conhecido como CEP</li>
                </ul>
                <p tabIndex='0' className='txtStyle'>Basta escolher alguma dessas opções e seguir as instruções.</p>
            </div>
        </section>
    )
}

export default About