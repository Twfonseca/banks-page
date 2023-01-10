import React from 'react'
import '../App.css';

function About(){
    return(
        <section className='sectionContainer'>
            <h1 className='titleSection'>Sobre</h1>
            <div className='textContainer'>
                <p className='textStyle'>Essa pagina tem como objetivo facilitar a busca de informações para ajudar em registros.</p>
                <p className='textStyle'>As informações podem ser sobre:</p>
                <ul className='listStyle'>
                    <li className='itemStyle'>Bancos</li>
                    <li className='itemStyle'>CEP</li>
                    <li className='itemStyle'>DDD</li>
                </ul>
                <p className='textStyle'>Basta escolher alguma dessas opções e seguir as instruções.</p>
            </div>
        </section>
    )
}

export default About