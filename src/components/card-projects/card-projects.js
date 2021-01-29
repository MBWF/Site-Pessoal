import React from 'react'

import './card-projects.css'

export default function Card({imagem, title, t1, t2, t3, t4}) {
    return(
        <>
            <div id='card-projects'>
            <h1>{title}</h1>

                <div className='card-descricao'>
                    <img src={imagem} alt='imagem' className='projeto-imagem'/>
                    
                <div className='descricao-projeto'>
                    <p>Esse é um projeto que eu fiz utilizando essas tecnologias: </p>
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
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