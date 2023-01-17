import React from "react";
import '../App.css';

function MoreInfos(){
    return(
        <footer className="footersectionContainer">
            <h1 className="footerTitle"> Mais informações</h1>
            <div className="gridContainer">
                <div className="linkArea" id="linkAreaOne">
                    <h3 className='footerSubtitle'>Contatos:</h3>
                    <a href="https://github.com/Twfonseca" className="footerLinkstyle" target={"_blank"}  rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/tawan-fonseca-5161b8217/" className="footerLinkstyle" target={"_blank"}  rel="noreferrer">Linkedin</a>
                </div>
                <div className="linkArea">
                    <h3 className='footerSubtitle'>Outros links:</h3>
                <a href="https://www.flaticon.com/free-icons/detective" title="detective icons" target={"_blank"}  rel="noreferrer" className="footerLinkstyle">Detective icons created by Freepik - Flaticon</a> 
                <a href="https://brasilapi.com.br/" target={"_blank"}  rel="noreferrer" className="footerLinkstyle">APIS fornecidas pelo site Brasil API </a>
                </div>
            </div>
        </footer>

    )

}

export default MoreInfos