import React from 'react'
import '../App.css';

function About(){
    return(
        <section id='about'className='sectionContainer'>
            <h1 className='titleSection'>Sobre</h1>
            <div className='textContainer'>
                <p className='txtStyle'>Essa pagina tem como objetivo facilitar a busca de informações para ajudar em registros.</p>
                <p className='txtStyle'>As informações podem ser sobre:</p>
                <ul className='listStyle'>
                    <li className='itemStyle'>Bancos , numero de codigo do banco e ispb do banco a partir do nome do banco</li>
                    <li className='itemStyle'>Nome da rua, nome do bairro que se localiza essa rua e o estado a partir do Codigo de Endereçamento Postal conhecido como CEP</li>
                </ul>
                <p className='txtStyle'>Basta escolher alguma dessas opções e seguir as instruções.</p>
            </div>
        </section>
    )
}

export default About