import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {PanResponder,Animated} from 'react-native'

import Project from '../components/project';
// let panMove = 
const Projects = ({navigation}) =>{
  const [pan, setpan] = useState(new Animated.ValueXY())
  const [_panResponder, set_panResponder] = useState();
    useEffect(() => {
      set_panResponder(PanResponder.create({
        onStartShouldSetPanResponder:()=> true,
        onMoveShouldSetPanResponder:()=>true,
        onPanResponderMove:Animated.event([
          null,{dx:pan.x,dy:pan.y}
        ])
      }))
      console.log(pan)
      // return ()=>set_panResponder()
    }, [])
  return (
    <Container>
      {_panResponder ? <Animated.View 
      style={{transform:[
        {translateX:pan.x},
        {translateY:pan.y}
      ]}}
        {..._panResponder.panHandlers}
      >
        <Project />
      </Animated.View>
    : <Project/>
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