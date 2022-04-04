import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    border-left: 6px ridge;
    border-left-color: #636319;
    width: 40%;
    justify-content: center;
`
const Informacoes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
`
const InformacoesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    font-size: 2em;
    color: black;
    input{
        width: 16vw;
        height: 7vh;
        border-radius: 10px;
        border-color: black;
        font-size: 1.5em;
        margin-left: 2%;
        background-color: black;
        color: white;
    }
`
const DivInformacoes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    border: 1px ridge black;
    background-color: #000000;
    border-radius: 15px;

    p{
        font-size: 2em;
        color: white;
    }
`


class RigthScreen extends React.Component{
    render(){
        return(
            <MainContainer>
                <Informacoes>
                    <DivInformacoes>
                        <p>{this.props.currentEx.description}</p>
                    </DivInformacoes>
                </Informacoes>
                <InformacoesContainer>
                    <label>N° exercício: </label>
                    <input type="number" value={this.props.numberInput} onChange={this.props.onChangeNumberInput} min="0" max="6"/>
                </InformacoesContainer>
            </MainContainer>
        )
    }
}

export default RigthScreen;