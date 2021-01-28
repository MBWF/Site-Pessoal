import React from 'react'

import './App.css'

import NavBar from './components/nav-bar/nav-bar'
import Header from './components/header/header'
import Card from './components/card-projects/card-projects'


export default function App() {
    return (
        <>
            <NavBar></NavBar>
            <Header></Header>
            <h1 className='h1-projetos'>Projetos</h1>
            <div className='card-organization'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className='sobre-mim'>
                <h1>SOBRE MIM</h1>
                <p>Me chamo Márcio e sou desenvolvedor Front-End Junior<br/>em busca de uma primeira experiência como desenvolvedor. Sou apaixonado pelo<br/> o desenvolvimento de Websites e 
                    mais ainda em projetos feitos em <b>ReactJS</b>.<br/>Atualmente, trabalho como professor de programação na empresa Simplicode,<br/>onde tenho dedicado meu tempo a ensinar jovens a se divertir no desenvolvimento  

                </p>
            </div>
        </>
    )
}