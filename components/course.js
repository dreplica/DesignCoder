 import React from 'react';
import styled from 'styled-components/native';
 
 export default function Course(props) {
   return (
     <Container>
         <Display>
             <Image source={props.image} />
             <Logo source={props.logo} />
            <Content>
                <Highlight>{props.highlight}</Highlight>
                <Title>{props.title}</Title>
            </Content>
         </Display>
         <Footer>
             <Pic source={props.pic} />
             <Subtitle>
                 <SubHeader>Learn to design and code a React app</SubHeader>
                 <SubText>Taught By Adejo David</SubText>
             </Subtitle>
         </Footer>
         
     </Container>  
   );
 }


 export const Container = styled.View`
    border-radius:10px;
    height:400px;
    width:400px;
    margin:20px 20px 0px 10px;
    
 `

 export const Display = styled.View`
    height:300px;
 `

 export const Content = styled.View`
    margin-left:20px;
    margin-top:15px;
 `

 export const Footer = styled.View`
    background:rgba(0,0,0,0.09);
    height:100px;
    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;
    flex-direction:row;
    align-items:center;
 `

 export const Image = styled.Image`
    position:absolute;
    border-top-right-radius:20px;
    border-top-left-radius:20px;
    height:300px;
    width:100%;
 `

 export const Logo = styled.Image`
    position:relative;
    margin:30px auto 50px auto;
    width:70px;
    height:70px;
 `

 export const Highlight = styled.Text`
    color:lightgrey;
    font-size:23px;
    font-weight:500;
 `

 export const Title = styled.Text`
    color:white;
    font-size:30px;
    font-weight:bold;
    width:180px;
 `

 export const Pic = styled.Image`
    width:50px;
    height:50px;
    margin:0px 20px;
    border-radius:50px;
 `

 export const Subtitle = styled.View`
 `

 export const SubHeader = styled.Text`
    font-size:20px;
    font-weight:bold;

 `

 export const SubText = styled.Text`
    font-weight:300;
 `