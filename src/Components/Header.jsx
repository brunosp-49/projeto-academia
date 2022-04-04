import React from "react";
import styled from "styled-components";
import Logo from "../img/logo.png"

const MainContainer = styled.div`
display: flex;
justify-content: center;
height: 15%;
`
const Imagem = styled.img`

`

class Header extends React.Component{
    render(){
        return(
            <MainContainer>
                <Imagem src={Logo}/>
            </MainContainer>
        )
    }
}

export default Header;