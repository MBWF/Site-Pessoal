import React from 'react'

import './App.css'

import NavBar from './components/nav-bar/nav-bar'
import Header from './components/header/header'

export default function App() {
    return (
        <>
            <NavBar></NavBar>
            <Header></Header>

            <div id='projetos'>
                <h1>Projetos</h1>

                <div className='card-projeto'>
                    <div className='projeto-imagem'></div>

                    <h2>Esse é um projeto que eu fiz utilizando essas tecnologias: </h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}