import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const navigationOptions = {
    title:"Courses"
}
const Courses = ({navigation}) =>{
    useEffect(() => {
        run();
    }, [])
  const run = ()=> navigationOptions
  return (
    <Container>
        <Text>Courses Screen</Text>
         
    </Container>
  );
}
export default Courses

const Container = styled.View`
    justify-content:center;
    height:100%;
    align-items:center;
`
const Text = styled.Text`
  /* color:lightblue */
`