import React, { useState,useEffect } from 'react';
import styled from 'styled-components/native';
import { Animated ,TouchableOpacity, Dimensions} from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import MenuItem from './MenuItems';

const screenHeight = Dimensions.get("window").height;
const Menu = ()=> {
    const animate = new Animated.Value(screenHeight)
    const [top, setTop] = useState(animate)
    useEffect(() => {
      Animated.spring(top,{
          toValue:0
      }).start()
    }, [])
    const toggle = ()=>{
        Animated.spring(top,{
            toValue:screenHeight
        }).start()
    }
  return (
    <Animate style={{top:top}}>
         <Cover >
            <Image source={require('../assets/background12.jpg')} />
            <Title>Adejo David</Title>
            <Subtitle>adejo.david@decagon.dev</Subtitle>
         </Cover>
        <TouchableOpacity 
            onPress={toggle} 
            style={{
                position:'absolute',
                top:120,
                left:'50%',
                marginLeft:-22,
                zIndex:1 
            }}>
            <CloseView>
               <Ionicons name='md-close'  
                size={40} color={'#546bfb'}/>
            </CloseView>
        </TouchableOpacity>
        <Content>
         {
         Menu_item.map((item,ind)=><MenuItem 
         key={ind}
         title={item.title} 
         icon={item.icon} 
         text={item.text} />)
         }
         </Content>
     </Animate>
  );
}

export default Menu;

const Image = styled.Image`
    position:absolute;
    width:100%;
`
const Title = styled.Text`
    font-weight:bold;
    font-size:25px;
    color:white;
    margin-bottom:8px;
`
const Subtitle = styled.Text`
    color:white;
`


const Content = styled.View`
    width:100%;
    height:${screenHeight};
    background:white;
`

const CloseView = styled.View`
    align-items:center;
    justify-content:center;
    width:42px;
    background:white;
    height:42px;
    elevation:50;
    border-radius:50px;
`
const Cover = styled.View`
    width:100%;
    height:142px;
    justify-content:center;
    align-items:center;
    overflow:hidden;
`

const Container = styled.View`
    position:absolute;
    height:100%;
    width:100%;
    top:0px;
    z-index:2 ;
`
const Animate = Animated.createAnimatedComponent(Container)

const Menu_item = [
    {
        icon:'md-settings',
        title:'Account',
        text:'settings'
    },
    {
        icon:'md-card',
        title:'Billing',
        text:'payments'
    },
    {
        icon:'md-compass',
        title:'Learn React',
        text:'start course'
    },
    {
        icon:'md-exit',
        title:'Log out',
        text:'see you soon'
    },
]