import React,{useState} from 'react';
import styled from 'styled-components/native';
import {Ionicons} from "@expo/vector-icons"
import { TouchableOpacity, TouchableWithoutFeedback,Animated, Dimensions, StatusBar } from 'react-native'
export default function Project(props) {
  const [width, setWidth] = useState(Dimensions.get('window').width)
  const [height, setHeight] = useState(Dimensions.get('window').height)
  const [dimension, setDimension] = useState({
    width:new Animated.Value(315),
    height:new Animated.Value(400),
    titleTop:new Animated.Value(20),
  })

  const Resize = ()=>{
    Animated.spring(dimension.width,{toValue:width}).start()
    Animated.spring(dimension.height,{toValue:height}).start()
    Animated.spring(dimension.titleTop,{toValue:40}).start()
    StatusBar.setHidden(true)
  }
  
  const close = ()=>{
    Animated.spring(dimension.width, { toValue: 315 }).start()
    Animated.spring(dimension.height, { toValue: 400 }).start()
    Animated.spring(dimension.titleTop, { toValue: 20 }).start()
    StatusBar.setHidden(true)

  }

    return (
      <TouchableWithoutFeedback onPress={Resize}>
        <Animationcontainer
        width={dimension.width}
        height={dimension.height}
        >
          <Cover>
            <Image source={props.image} />
            <AnimatedTitle style={{top:dimension.titleTop}}>{props.title}</AnimatedTitle>
            <Author>{props.author}</Author>
          </Cover>
        <Text>{props.text}</Text>
          <TouchableOpacity
          onPress={close}
          style={{
            position:'absolute',
            top:35, 
            right:25
          }}
          >
            <Closing>
              <Ionicons name="md-close" color="546bfb" size={32}/>
            </Closing>
          </TouchableOpacity>
        </Animationcontainer>
      </TouchableWithoutFeedback>
  );
}

const Closing = styled.View`
    width:30px;
    height:30px;
    border-radius:15px;
    justify-content:center;
    align-items:center;
    background-color:white;
`

const Text = styled.Text`
  font-size:17px;
  margin:20px;
  padding:5px;
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
const AnimatedTitle = Animated.createAnimatedComponent(Title)

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

const Animationcontainer = Animated.createAnimatedComponent(Container)