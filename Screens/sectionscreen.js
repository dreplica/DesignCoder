import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const navigationOptions = {
    title:"Section"
}
const Section = ({navigation}) =>{
    useEffect(() => {
        run();
    }, [])
  const run = ()=> navigationOptions
  return (
    <Container>
        <Text>Section Screen</Text>
        <TouchableOpacity backgroundColor='red' onPress={()=>navigation.goBack()}>
            <Text>Close</Text>
            </TouchableOpacity> 
    </Container>
  );
}
export default Section

const Container = styled.View`
    justify-content:center;
    height:100%;
    align-items:center;
`
const Text = styled.Text`
  /* color:lightblue */
`