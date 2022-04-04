import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 5%;
color: yellow;
`

class Botton extends React.Component{
    render(){
        return(
            <MainContainer>
                <p>Desenvolvido por: Bruno Siqueira | brunosp49@yahoo.com.br </p>
            </MainContainer>
        )
    }
}

export default Botton;