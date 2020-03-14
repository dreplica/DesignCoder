import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const MenuItem =(props) =>{
    return (
        <Container>
            <Iconview>
                <Ionicons color='#546bfb' name={props?.icon} size={25} />
            </Iconview>
            <Content>
                <Title>{props?.title}</Title>
                <Text>{props?.text}</Text>
            </Content>
        </Container>
    );
}
export default MenuItem

const Text = styled.Text`
    font-size:18px;
    font-weight:300;
    opacity:0.4;
`
const Title = styled.Text`
    font-size:25px;
    font-weight:700;
`
const Content = styled.View`
    padding-left:20px;
`
const Iconview = styled.View`
    height:20px;
    margin-top:6px;
`

const Container = styled.View`
    width:100%;
    margin:50px 30px 0px  50px;
    flex-direction:row;
    justify-content:flex-start;
    align-items:flex-start;
`
