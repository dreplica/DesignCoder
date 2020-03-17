import React,{useState, useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import { connect } from "react-redux";
import { LinearGradient} from 'expo-linear-gradient'
import {Ionicons} from "@expo/vector-icons"
import { TouchableOpacity, TouchableWithoutFeedback,Animated, Dimensions, StatusBar } from 'react-native'
export  function Project(props) {
  const ref = useRef()
  const [width, setWidth] = useState(Dimensions.get('window').width)
  const [textHeight, setTextHeight] = useState(new Animated.Value(80))
  const [height, setHeight] = useState(Dimensions.get('window').height)
  const [dimension, setDimension] = useState({
    width:new Animated.Value(315),
    height:new Animated.Value(400),
    titleTop:new Animated.Value(20),
    opacity:new Animated.Value(0),
  })
  useEffect(() => {
    
  }, [Resize,close])

  const Resize = ()=>{
    if(!props.canOpen) return;

    Animated.timing(textHeight,{toValue:1000,duration:200}).start()
    Animated.spring(dimension.width,{toValue:width}).start()
    Animated.spring(dimension.height,{toValue:height}).start()
    Animated.spring(dimension.titleTop,{toValue:40}).start()
    Animated.spring(dimension.opacity,{toValue:1}).start()
    StatusBar.setHidden(true)
    props.setOpen();
    
  }
  
  const close = ()=>{
    Animated.timing(textHeight,{toValue:80,duration:200}).start()
    Animated.spring(dimension.width, { toValue: 315 }).start()
    Animated.spring(dimension.height, { toValue: 400 }).start()
    Animated.spring(dimension.titleTop, { toValue: 20 }).start()
    Animated.spring(dimension.opacity, { toValue: 0 }).start()
    StatusBar.setHidden(false)
    props.setClose();

  }

    return (
      <TouchableWithoutFeedback onPress={Resize}>
        <Animationcontainer
        width={dimension.width}
        height={dimension.height}
        ref={ref}
        >
          <Cover>
            <Image source={props.image} />
            <AnimatedTitle style={{top:dimension.titleTop}}>{props.title}</AnimatedTitle>
            <Author>{props.author}</Author>
          </Cover>
        <AnimatedText style={{height:textHeight}}>{props.text}</AnimatedText>
        {/* <AnimatedLinearGradient
          colors={[`rgba(255,255,255,0)`,`rgba(255,255,255,1)`]}
          style={{
            position:'absolute',
            width:`100%`,
            background:'red',
            bottom: 0,
            height:textHeight
          }}/> */}
          <TouchableOpacity
          onPress={close}
          style={{
            position:'absolute',
            top:35, 
            right:25
          }}
          >
            <Animatedopacity style={{opacity:dimension.opacity}}>
              <Ionicons name="md-close" color="546bfb" size={32}/>
            </Animatedopacity>
          </TouchableOpacity>
        </Animationcontainer>
      </TouchableWithoutFeedback>
  );
}
const mapDispatchToProps =(dispatch)=> {
  return {
    setOpen: ()=>dispatch({type:'openProject'}),
    setClose:()=>dispatch({type:'closeProject'})
}
}

 export default connect(null,mapDispatchToProps)(Project)

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

const Closing = styled.View`
    width:30px;
    height:30px;
    border-radius:15px;
    justify-content:center;
    align-items:center;
    background-color:white;
`
const Animatedopacity = Animated.createAnimatedComponent(Closing)

const Text = styled.Text`
  font-size:17px;
  margin:10px 20px;
  padding:5px;
  align-self:center;
  line-height:24px;
  color:#3c4560;
`
const AnimatedText = Animated.createAnimatedComponent(Text)

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