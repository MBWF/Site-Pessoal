import React from 'react'

import './card-projects.css'

export default function Card() {
    return(
        <>
            <div id='card-projects'>
            <h1>Finanças</h1>

                <div className='card-descricao'>
                    <div className='projeto-imagem'/>
                    
                <div className='descricao-projeto'>
                    <p>Esse é um projeto que eu fiz utilizando essas tecnologias: </p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                    </ul>
                </div>
                <button>Ver Projeto</button>
                </div>
            </div>
        </>
    )
}