import React from 'react';
import styled from 'styled-components/native';

export default function Project(props) {
    return (
      <Container>
        <Cover>
          <Image source={props.image} />
          <Title>{props.title}</Title>
          <Author>{props.author}</Author>
        </Cover>
      <Text>{props.text}</Text>
      </Container>
  );
}

const Text = styled.Text`
  font-size:17px;
  margin:20px;
  line-height:24px;
  color:#3c4560;
`


const Author = styled.Text`
  position:absolute;
  bottom:20px;
  left:20px;
  font-size:15px;
  font-weight:600;
  text-transform:uppercase;
  color:rgba(255,255,255,0.8);
`

const Title = styled.Text`
  font-size:24px;
  position:absolute;
  top:20px;
  left:20px; 
  font-weight:bold; 
  width:300px;
  color:white;
`

const Image = styled.Image`
  position:absolute;
  width:100%;
  height:290px;
`
 

const Cover = styled.View`
  height:290px;
  /* border-radius:20px; */
`

 const Container = styled.View`
  width:315px;
  height:400px;
  overflow: hidden;
  border-radius:20px;
  background:white;
  elevation:20px;
  border-radius:20px;
`;
