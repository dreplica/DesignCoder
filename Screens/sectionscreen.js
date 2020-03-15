import React, { useState, useEffect,useRef } from 'react';
import styled from 'styled-components';
import { TouchableOpacity,StatusBar, Linking } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import WebView from 'react-native-webview';

const Section = ({navigation}) =>{
  const [Section, setSection] = useState(navigation.getParam("section"));
  const ref = useRef()
  useEffect(() => {
    StatusBar.setHidden(true)
    StatusBar.setBarStyle('light-content',true)
    return ()=>StatusBar.setBarStyle('dark-content',true)
  }, [])

  const handleview = (event)=>{
    ref.current.stopLoading();
            if(event.url !== 'about:blank'){
              Linking.openURL(event.url)
            }
          }
  return (
    <Container> 
      <StatusBar hidden />
        <Cover>
          <Image source={{uri:Section.image}}/>
          <Label>
              <Logo source={{uri:"https://bit.ly/39QhSpZ"}} />
              <Caption>
              {Section.subtitle}
              </Caption>
            </Label>
          <Title>{Section.title}</Title>
          <Subtitle>{Section.caption}</Subtitle>
        </Cover>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        style={{position:'absolute',top:20, right:20}}
        >
          <Closeview>
            <Ionicons name="md-close" 
            size={36}
            color='#4775f2'
            />
          </Closeview>
        </TouchableOpacity>
        <Content>
          <WebView 
          source={{ uri:'https://twitter.com' }} 
          ref={ref}
          // onShouldStartLoadWithRequest={false}
          onNavigationStateChange={handleview}/>
        </Content>
    </Container>
  );
}
export default Section

const Container = styled.View`
    flex:1;
    justify-content:flex-start;
`
const Cover = styled.View`
  height:375px;
  justify-content:flex-start;
  align-items:flex-start;
`

const Label = styled.View`
  margin-top:10px;
  margin-left:30px;
  height:50px;
  overflow:hidden;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
`
const Closeview = styled.View`
  height:32px;
  width:32px;
  border-radius:16px;
  background:white;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`
const Image = styled.Image`
  position:absolute;
  height:100%;
  width:100%;
`
const Logo = styled.Image`
  height:20px;
  margin-right:5px;
  width:20px;
`
const Title = styled.Text`
  margin-top:10px;
  margin-left:30px;
  color:white;
  font-size:30px;
  font-weight:bold;
  width:150px;
`

const Caption = styled.Text`
  color:white;
  font-size:20px;
  font-weight:400;
  width:150px;
`
const Subtitle = styled.Text`
  color:white;
  position:absolute;
  bottom:10px;
  margin-left:30px;
  font-size:23px;
  font-weight:100;
  width:300px;
`

const Content = styled.View`
    height:100%;
    padding:20px;
`

const html = `
  <h3>Hello everyone, <a href='google.com'>it is</a> i</h3>
  <img src='' alt='image'/>
`
const styling = `
<style>
  *{
    margin:0;
    padding:0;
    font-family:roboto;
  }

  h3{
    font-size:30px;
  }
  </style>
`