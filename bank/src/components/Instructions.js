import React from 'react'
import '../App.css';

function Instructions(){
    return(
        <section id='howWorks' className='sectionContainer'>
            <h1 className='titleSection'>Instruções</h1>
            <div className='textContainer'>
                <p textStyle> Passo 1 : Para iniciar a pesquisa escolha uma das opções que deseja obter os resultados. Digite a informação necessaria para a pesquisa no seu respectivo campo</p>
                <p className='txtStyle'>Passo 2 : Basta clicar no botão com o tema desejado e aaguardar os dados ficarem disponiveis</p>
            </div>
        </section>
    )
}

export default Instructions