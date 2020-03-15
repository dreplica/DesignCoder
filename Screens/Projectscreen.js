import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {PanResponder,Animated} from 'react-native'

import Project from '../components/project';
// let panMove = 
const Projects = ({navigation}) =>{
  const [pan, setpan] = useState(new Animated.ValueXY())
  const [scale, setScale] = useState(new Animated.Value(0.9))
  const [transform, setTransform] = useState(new Animated.Value(44))
  const [_panResponder, set_panResponder] = useState();
    useEffect(() => {
      set_panResponder(PanResponder.create({
        onPanResponderGrant:()=>{
          Animated.spring(scale,{
            toValue:1
          }).start()
          Animated.spring(transform,{
            toValue:44
          }).start()
        },
        onStartShouldSetPanResponder:()=> true,
        onMoveShouldSetPanResponder:()=>true,
        onPanResponderMove:Animated.event([
          null,{dx:pan.x,dy:pan.y}
        ]),
        onPanResponderRelease:(e)=>{
          Animated.spring(pan,{
          toValue:{x:0,y:0}
        }).start()
          Animated.spring(scale, {
            toValue: 0.9
          }).start()
          Animated.spring(transform, {
            toValue: 44
          }).start()
      }
      }))
    }, [])
  return (
    <Container>
      {_panResponder && <>
      <Animated.View 
      style={{transform:[
        {translateX:pan.x},
        {translateY:pan.y}
      ]}}
        {..._panResponder.panHandlers}
      >
        <Project 
        title={"Price Tag"} 
        image={require('../assets/background5.jpg')}
        author={"By adejo David"}
          text={"I am really happy that i am happy that i want to be happy in tI am really happy that i am happy that i want to be happy in the happy that i am thank you"}
        />
      </Animated.View>
      <Animated.View 
      style={{
        position:'absolute',
        zIndex:-1,
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        transform:[{scale:scale},{translateY:transform}]}}
      
      >
        <Project 
        title={"Price Tag"} 
        image={require('../assets/background5.jpg')}
        author={"By adejo David"}
          text={"I am really happy that i am happy that i want to be happy in tI am really happy that i am happy that i want to be happy in the happy that i am thank you"}
        />
      </Animated.View>
      </>
      }
    </Container>
  );
}
export default Projects

const Container = styled.View`
    justify-content:center;
    height:100%;
    align-items:center;
    background:#f0f3f5;
`
const Text = styled.Text`
  /* color:lightblue */
` 