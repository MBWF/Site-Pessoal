import React from 'react'

import './App.css'
import './Global.css';

import financas from '../src/assets/financas.png'
import imagem01 from '../src/assets/imagem01.jpg'
import dashboard from '../src/assets/imagem02.jpg'

import NavBar from './components/nav-bar/nav-bar'
import Header from './components/header/header'
import Card from './components/card-projects/card-projects'


export default function App() {
    return (
        <>
            <NavBar></NavBar>
            <Header></Header>
            <h1 className='h1-projetos'><u>Projetos</u></h1>
            <div className='card-organization'>
                <Card imagem={dashboard} title='Dashboard' ></Card>
                <Card imagem={imagem01} title='Ecoalyzer'  ></Card>
                <Card imagem={financas} title='Financas'  ></Card>
            </div>
            

            <div className='sobre-mim'>
                <h1><u>SOBRE MIM</u></h1>
                <p>Me chamo Márcio e sou desenvolvedor Front-End Junior<br/>em busca de uma primeira experiência como desenvolvedor. Sou apaixonado pelo<br/> o desenvolvimento de Websites e 
                    mais ainda em projetos feitos em <b>ReactJS</b>.<br/>Atualmente, trabalho como professor de programação na empresa Simplicode,<br/>onde tenho dedicado meu tempo a ensinar jovens a se divertir no desenvolvimento  
                </p>
            </div>

            <footer>Copyright 2021 <br/>Desenvolvido por Márcio B. W. Filho </footer>
        </>
    )
}