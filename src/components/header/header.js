import React from 'react'

import './header.css'

export default function Header() {
    return (
        <>
            <div id='main'>
                <div className='imagem'></div>
                <div className='descricao'>
                    <h1>Márcio Filho</h1>
                    <ul>
                        <li>Desenvolvendo Front-End</li>
                        <li>-</li>
                        <li>Professor de Programação</li>
                        <li>-</li>
                        <li>Estudante de Ciência da Computação</li>
                    </ul>

                <button>Contato</button>

                </div>
            </div>
        </>
    )
}