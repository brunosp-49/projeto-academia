import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    border-right: 0px;
    width: 60%;
`
const Title = styled.h1`
color: black;
text-align: center;
margin-top: 5%;
font-size: 3em;
`

const Gif = styled.img`
    display: block;
    box-shadow: 10px 5px 5px black;
    /* border: 5px ridge #8e8e03; */
    margin: 6% auto 0 auto;
    width: 600px;
    height: 340px;
`

class LeftScreen extends React.Component{
    render(){
        return(
            <MainContainer>
                <Title>{this.props.currentEx.title}</Title>
                <Gif src={this.props.currentEx.img}/>
            </MainContainer>
        )
    }
}

export default LeftScreen;