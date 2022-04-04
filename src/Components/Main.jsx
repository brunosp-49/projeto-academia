import React from "react";
import styled from "styled-components";
import LeftScreen from "./LeftScreen";
import RigthScreen from "./RigthScreen";

const MainContainer = styled.div`
display: flex;
height: 79.5%;
background-color: #f2e800;
`


class Main extends React.Component{
    render(){
        return(
            <MainContainer>
                <LeftScreen
                currentEx = {this.props.currentEx[0]}
                />
                <RigthScreen
                numberInput = {this.props.numberInput}
                onChangeNumberInput = {this.props.onChangeNumberInput}
                currentEx = {this.props.currentEx[0]}
                />
            </MainContainer>
        )
    }
}

export default Main;