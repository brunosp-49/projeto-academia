import './App.css';
import React from 'react';
import styled from 'styled-components'
import Header from './Components/Header'
import Main from './Components/Main'
import Botton from './Components/Botton'

const MainContainer = styled.div`
  height: 100vh;
  /* border: 1px solid red; */
  background-color: black;
`

const Division = styled.hr`
  border: 0;
  height: 2px;
  background-image: linear-gradient(to right, transparent, darkgrey, transparent); 
`

const dataBase = [
    {
      id: 0,
      title: "Insira um exercício",
      description: "Digite um número",
      img: "https://i.gifer.com/WWBr.gif"
    },
    {
      id: 1,
      title: "Supino reto",
      description: "Obs: cuidado com os ombros",
      img: "http://www.ferrosports.com.br/img_external/peito/image18.gif"
    },
    {
      id: 2,
      title: "Supino inclinado",
      description: "Obs: cuidado com os ombros",
      img: "http://www.ferrosports.com.br/img_external/peito/image16.gif"
    },
    {
      id: 3,
      title: "Supino declinado",
      description: "Obs: cuidado com os ombros",
      img: "http://www.ferrosports.com.br/img_external/peito/image17.gif"
    },
    {
      id: 4,
      title: "Barra fixa",
      description: "Obs: cuidado com os ombros",
      img: "http://www.ferrosports.com.br/img_external/costas/image13.gif"
    },
    {
      id: 5,
      title: "Rosca Punho",
      description: "Obs: até a falha",
      img: "http://www.ferrosports.com.br/img_external/antebraco/image401.gif"
    },
    {
      id: 6,
      title: "Glúteo caneleira coice",
      description: "Obs: faça com concentração",
      img: "http://www.ferrosports.com.br/img_external/gluteo/image12.gif"
    }
]

class App extends React.Component {
  state = {
    numberInput: 0,
    currentEx: [
      {
        id: 0,
        title: "Insira um exercício",
        description: "Digite um número",
        img: "https://i.gifer.com/WWBr.gif"
      }
    ]
  }

  onChangeNumberInput = (event) =>{
    this.setState({numberInput: event.target.value})
    if(event.target.value <= 6 && event.target.value >= 0){
      this.setState(this.state.currentEx = dataBase.filter(({ id }) => id == event.target.value ))
    } 
  }

  render(){
  return (
    <MainContainer>
      <Header/>
      <Division/>
      <Main 
      controleDeErro = {this.getControleDeErro}
      numberInput = {this.state.numberInput}
      currentEx = {this.state.currentEx}
      onChangeNumberInput = {this.onChangeNumberInput}
      />
      <Division/>
      <Botton/>
    </MainContainer>
  );}
}

export default App;
