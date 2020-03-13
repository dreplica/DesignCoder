import React from 'react';
import  styled from 'styled-components/native';
import { AppRegistry } from 'react-native';



export default function Card(props) {
    return (
       <Container>
           <Cover>
               <Images source={props.image} />
               <Title>{props.title}</Title>
           </Cover>
           <Content>
               <Logo source={props.logo} />
               <Wrapper>
                   <Caption>{props.caption}</Caption>
                   <Subtitle>{props.subtitle}</Subtitle>
               </Wrapper>
           </Content>
       </Container>
  );
}
export const Content = styled.View`
    flex-direction:row;
    align-items:center;
    height:80px; 
`
export const Logo = styled.Image`
    width:44px;
    height:44px;
    margin-left:20px;

`

export const Wrapper = styled.View`
    margin-left:15px;
    height:50%;
`
export const Caption = styled.Text`
    font-size:20px;
    color:black;
    font-weight:bold;
`

export const Subtitle = styled.Text`
    font-size:15px;
    color:grey;
    font-weight:500;
`

export const Container = styled.View`
  width:340px;
  margin:20px 10px;
  height:280px;
  background:rgba(0,0,0,0.05); 
  border-radius:20px;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.5);
`;

export const Cover = styled.View`
    width:100%;
    height:200px;

`

export const Images = styled.Image`
    width:100%;
    height:200px;
    position:absolute;
    border-top-left-radius:20px;
    border-top-right-radius:20px;
`
export const Title = styled.Text`
        margin:20px;
        color: white;
        width:170px;
        font-weight:bold;
        font-size:26px;
`