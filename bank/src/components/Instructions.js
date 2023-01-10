import React from 'react'
import '../App.css';

function Instructions(){
    return(
        <section className='sectionContainer'>
            <h1 className='titleSection'>Instruções</h1>
            <div className='textContainer'>
                <p textStyle>Para iniciar a pesquisa escolha uma das opções que deseja obter os resultados.</p>
                <p className='textStyle'>Basta clicar no botão com o tema desejado e a os dados ficarãodisponiveis</p>
                <p className='textStyle'> Cada pesquisa tem um tipo de pesquisa. Como por exemplo:</p>
                <ul className='listStyle'>
                    <li className='structionItem'>Para pesquisar bancos você pode escolher filtrar por nome ou codigo do banco</li>
                    <li className='structionItem'>Para CEP você precisa pesquisar pelo nome da rua e cidade</li>
                    <li className='structionItem'>Para DDD basta colocar a sigla do seu estado. por exemplo : SP se seu estado é São Paulo</li>
                </ul>
            </div>

        </section>
    )
}

export default Instructions