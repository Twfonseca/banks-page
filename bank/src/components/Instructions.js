import React from 'react'
import '../App.css';

function Instructions(){
    return(
        <section tabIndex='0' id='howWorks' className='sectionContainer'>
            <h1 tabIndex='0' className='titleSection'>Instruções</h1>
            <div tabIndex='0' className='textContainer'>
                <p tabIndex='0' className='txtIsntructionStyle'> Passo 1 : Para iniciar a pesquisa escolha uma das opções que deseja obter os resultados. Digite a informação necessaria para a pesquisa no seu respectivo campo</p>
                <p tabIndex='0' className='txtIsntructionStyle'>Passo 2 : Basta clicar no botão com o tema desejado e aaguardar os dados ficarem disponiveis</p>
            </div>
        </section>
    )
}

export default Instructions