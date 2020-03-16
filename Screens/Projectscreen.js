import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PanResponder, Animated } from 'react-native'

import Project from '../components/project';

const getNextFunc = (args) => {
  const next = args + 1;
  if (next > projects.length - 1) {
    return 0;
  }
  return next;
}

const Projects = ({ navigation }) => {
  const [index, setIndex] = useState(0)
  const [pan, setpan] = useState(new Animated.ValueXY())
  const [scale, setScale] = useState(new Animated.Value(0.9))
  const [transform, setTransform] = useState(new Animated.Value(44))
  const [thirdscale, setThirdScale] = useState(new Animated.Value(0.8))
  const [thirdtransform, setThirdTransform] = useState(new Animated.Value(-44))
  const [_panResponder, set_panResponder] = useState();
  useEffect(() => {
    set_panResponder(PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
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
        Animated.spring(pan, {toValue: { x: 0, y: 0 }}).start()
        Animated.spring(scale, {toValue: 0.9}).start()
        Animated.spring(transform, {toValue: 44}).start()
        Animated.spring(thirdscale, { toValue: 0.8 }).start()
        Animated.spring(thirdtransform, { toValue: -44 }).start()
      }
    }))
  }, [index,pan])
  return (
    <Container>
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

const projects = [
  {
    title: "Price Tag",
    image: require('../assets/background5.jpg'),
    author: "By adejo David",
    text: "I am really happy that i am happy that i want to be happy in tI am really happy that i am happy that i want to be happy in the happy that i am thank you",

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
