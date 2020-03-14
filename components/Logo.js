import React from 'react';
import styled from 'styled-components/native';

export default function Logo(props) {
  return (
    <Container>
        <Image  source={props.image} />
        <Text>{props.title}</Text>
     </Container>
  );
}

export const Container = styled.View`
    flex-direction:row;
    align-items:center;
    margin:0px 8px;
    height:60px;
    padding:10px;
    border-radius:10px;
    background:rgba(0,0,0,0.09);
    box-shadow:0 5px 10px rgba(0,0,0,0.25);
`
export const Image = styled.Image`
    width:40px;
    height:40px;
`

export const Text = styled.Text`
    font-weight:bold;
    font-size:17px;
    margin-left:10px;
`
