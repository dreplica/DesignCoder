import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import LottieView  from "lottie-react-native";
import { Animated,Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
export default function Success({active}) {
    const [top, settop] = useState(new Animated.Value(0))
    const [opacity, setopacity] = useState(new Animated.Value(0))
    const ref = useRef()
    useEffect(() => {
        if(active){
            Animated.timing(top,{toValue:0,duration:0}).start()
            Animated.timing(opacity,{toValue:0.8}).start()
            ref.current.play()
        }else{
            Animated.timing(top,{toValue:height,duration:0}).start()
            Animated.timing(opacity,{toValue:0}).start()
            ref.current.loop = false
        }
    }, [active])
  return (
    <AnimatedContainer style={{top:top,opacity:opacity}}>
        <LottieView 
            source={require('../assets/json-lottie/success.json')}
            autoPlay={false}
            loop={false} 
            ref={ref}
        />
    </AnimatedContainer>
  );
}

 const Container = styled.View`
    width:100%;
    height:100%;
    background:rgba(255,255,255,0.9);
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
    left:0;

 `
 const AnimatedContainer = Animated.createAnimatedComponent(Container)