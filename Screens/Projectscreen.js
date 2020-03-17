import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PanResponder, Animated } from 'react-native'
import { connect } from 'react-redux';

import Project from '../components/project';

const getNextFunc = (args) => {
  const next = args + 1;
  if (next > projects.length - 1) {
    return 0;
  }
  return next;
}

const Projects = ({ navigation, action}) => {
  const [index, setIndex] = useState(0)
  const [Mask, setMask] = useState(new Animated.Value(0))
  const [pan, setpan] = useState(new Animated.ValueXY())
  const [scale, setScale] = useState(new Animated.Value(0.9))
  const [transform, setTransform] = useState(new Animated.Value(44))
  const [thirdscale, setThirdScale] = useState(new Animated.Value(0.8))
  const [thirdtransform, setThirdTransform] = useState(new Animated.Value(-44))
  const [_panResponder, set_panResponder] = useState();
  useEffect(() => {
    set_panResponder(PanResponder.create({
      onMoveShouldSetPanResponder: (event, gesture) => {
        // alert(action)
        if (gesture.dx === 0 && gesture.dy === 0) {
          return false
        }else {
              if(action === 'open'){
                // alert(action)
                return false;
              }
              return true;
            }
          },
          onPanResponderGrant: () => {        
            Animated.spring(Mask,{toValue:0.5}).start()
            Animated.spring(scale, {toValue: 1}).start()
            Animated.spring(transform, {toValue: 0}).start()
            Animated.spring(thirdscale, {toValue: 0.9}).start()
            Animated.spring(thirdtransform, {toValue: 44}).start()
          },
          onPanResponderMove: Animated.event([
            null, { dx: pan.x, dy: pan.y }
          ]),
          onPanResponderRelease: (e) => {
            const positionY = pan.y.__getValue();
            if (positionY > 200) {
              Animated.spring(pan, {toValue: { x: 0, y: 1000 }
              }).start(() => {
                pan.setValue({ x: 0, y: 0 })
                scale.setValue(0.9)
                transform.setValue(44)
                thirdscale.setValue(0.8)
                thirdtransform.setValue(-44)
                setIndex(()=>getNextFunc(index))
                return;
              })
            }
        Animated.spring(Mask,{toValue:0}).start()
        Animated.spring(pan, {toValue: { x: 0, y: 0 }}).start()
        Animated.spring(scale, {toValue: 0.9}).start()
        Animated.spring(transform, {toValue: 44}).start()
        Animated.spring(thirdscale, { toValue: 0.8 }).start()
        Animated.spring(thirdtransform, { toValue: -44 }).start()
      }
    }))
  }, [index,pan,action])
  return (
    <Container>
      <AnimatedMask style={{opacity:Mask}}/>
      {_panResponder && <>
        <Animated.View
          style={{
            transform: [
              { translateX: pan.x },
              { translateY: pan.y }
            ]
          }}
          {..._panResponder.panHandlers}
        >
          <Project
            title={projects[index].title}
            image={projects[index].image}
            author={projects[index].author}
            text={projects[index].text}
            canOpen={true}
                      />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            zIndex: -1,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ scale: scale }, { translateY: transform }]
          }}

        >
          <Project
            title={projects[getNextFunc(index)].title}
            image={projects[getNextFunc(index)].image}
            author={projects[getNextFunc(index)].author}
            text={projects[getNextFunc(index)].text}
          />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            zIndex: -2,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ scale:thirdscale}, { translateY: thirdtransform }]
          }}

        >
          <Project
            title={projects[getNextFunc(index + 1)].title}
            image={projects[getNextFunc(index + 1)].image}
            author={projects[getNextFunc(index + 1)].author}
            text={projects[getNextFunc(index + 1)].text}
          />
        </Animated.View>
      </>
      }
    </Container>
  );
}

const mapStateToProps = (store)=>({
  action:store.action
})

export default connect(mapStateToProps)(Projects)

const Container = styled.View`
    justify-content:center;
    height:100%;
    align-items:center;
    background:#fff;
`
const Text = styled.Text`
  /* color:lightblue */
`

const Mask = styled.View`
  position:absolute;
  width:100%;
  height:100%;
  left:0px;
  z-index:-3;
  top:0;
  background:#21252b;
  /* z-index:-3; */
`

const AnimatedMask = Animated.createAnimatedComponent(Mask)

const projects = [
  {
    title: "Price Tag",
    image: require('../assets/background5.jpg'),
    author: "By adejo David",
    text: `I am really really happy that i am happy that i want to be happy in tI am really happy that i am happy that i want to be happy in the happy that i am thank you I am really happy that i am happy that i want to be happy in tI am really happy that i am happy that 
    i want to be happy in the happy that i am thank you happy that i am happy that i want to be happy in tI am really happy that i am happy that i want to be happy in the happy that i am thank you I am really happy that i am happy that i want to be happy in tI am really happy that i am happy that 
    i want to be happy in the happy that i am thank you`,

  },
  {
    title: "Home Tag",
    image: require('../assets/background6.jpg'),
    author: "By David Adejo",
    text: "I am really happy that i am happy that i want to be happy in tI am really happy that i am happy that i want to be happy in the happy that i am thank you",

  },
  {
    title: "Comic Tag",
    image: require('../assets/background7.jpg'),
    author: "By Odrago David",
    text: "I am really happy that i am happy that i want to be happy in tI am really happy that i am happy that i want to be happy in the happy that i am thank you",

  },
]
