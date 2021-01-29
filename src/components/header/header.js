import React from 'react'

import marcio from '../../assets/marcio.jpeg'
import './header.css'

export default function Header() {
    return (
        <>
            <div id='main'>
                <img src={marcio} className='imagem'></img>
                <div className='descricao'>
                    <h1>Márcio Filho</h1>
                    <h3>marciobwfilho98@gmail.com</h3>
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