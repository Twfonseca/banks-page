import React from 'react'
import '../App.css';

function Instructions(){
    return(
        <section className='sectionContainer'>
            <h1 className='titleSection'>Instruções</h1>
            <div className='textContainer'>
                <p textStyle>Para iniciar a pesquisa escolha uma das opções que deseja obter os resultados.</p>
                <p className='txtStyle'>Basta clicar no botão com o tema desejado e a os dados ficarãodisponiveis</p>
                <p className='txtStyle'> Cada pesquisa tem um tipo de pesquisa. Como por exemplo:</p>
                <ul className='listStyle'>
                    <li className='structionItem'>Para pesquisar bancos você pode escolher filtrar por nome ou codigo do banco.</li>
                    <li className='structionItem'>Para dados a partir do CEP digite o CEP que deseja buscar informações e lhe retornarei o nome da rua, bairro, cidade e estado.</li>
                    <li className='structionItem'>Para verificar quais locais usam um determinado DDD basta colocar o numero do DDD para ter o resultado dos locais.</li>
                </ul>
            </div>
        </section>
    )
}

export default Instructions