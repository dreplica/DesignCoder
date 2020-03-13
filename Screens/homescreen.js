import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import {ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing, StatusBar} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import Card from '../components/card';
import Logo from '../components/Logo';
import Course from '../components/course'
import Menu from '../components/Menu'
import { connect } from 'react-redux';

const mapStateToProps = (store)=>({
  action:store?.action
})

const mapDispatchToProps = (dispatch) =>({updates:(args)=>dispatch({
  type:args
  })
})


const opacityVal = new Animated.Value(1)
const scaling = new Animated.Value(1)
const Home = ({action,updates}) => {
  const [scale, setscale] = useState(scaling)
  const [opacity, setopacity] = useState(opacityVal)
  useEffect(() => {
    toggle()
  }, [action])
  const toggle = ()=>{
      if(action === 'openmenu'){
        console.log("reduce scale")
        Animated.timing(scale,{
          toValue:0.9,
          duration:300,
          easing:Easing.in()
        }).start()
        Animated.spring(opacity,{
          toValue:0.5
        }).start()
        StatusBar.setBarStyle("light-content",true)
      }
      if(action === 'closemenu'){
        console.log("increase scale")
        Animated.timing(scale, {
          toValue: 1,
          duration: 300,
          easing: Easing.in()
        }).start()
        Animated.spring(opacity,{
          toValue:1
        }).start()
        StatusBar.setBarStyle("dark-content", true)

      }
  }
  return (
    <RootView>
      <Menu /> 
      <Animation style={{transform:[{scale:scale}],opacity:opacity}}>
        <SafeAreaView>
        <ScrollView style={{'height':'100%'}}>
          <TouchableOpacity 
          onPress={() => updates('Open')}
          width={50}
          height={50}
          style={{position:'absolute'}}
          >
            <Avatar source={require('../assets/avatar.jpg')} />
          </TouchableOpacity>
            <TitleBar>
              <Title>Welcome back</Title>
              <Name>David</Name>
              <Ionicons name='md-notifications' 
              size={32} color='#4775f2'
              style={{position:'absolute',right:10, top:6}}
              />
            </TitleBar>
            <ScrollView horizontal={true} 
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 20, paddingBottom: 10,paddingTop:10,flexDirection:'row'}}>
                {
                Logos.map((item, ind) => <Logo key={ind} title={item.text} image={item.image} />)
                }
            </ScrollView>
            <Subtitle>Continue Learning</Subtitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            Cards.map((item,ind)=><Card 
            key={ind}
            image={item.image}
            logo = {item.logo}
            title = {item.title}
            subtitle = {item.subtitle}
            caption = {item.caption}
            />)
          }
            
          </ScrollView>
          <Subtitle>Popular Courses</Subtitle>
          <ScrollView
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          >
            {
            courses.map((item,ind)=><Course
              key={ind}  
              pic={item.pic}
              image={item.image}
              logo={item.logo}
              title='Prototype in InVision Studio'
              highlight='10 Sections'
              />)
            }
          </ScrollView>
        </ScrollView>
        </SafeAreaView>
      </Animation>
    </RootView>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

const RootView = styled.View`
  background:black;
  flex:1;
`

const Container = styled.View`
  flex:1;
  background:white;
  /* margin:50px 0px; */
  border-radius:20px;
  z-index:-1;
`
const Animation = Animated.createAnimatedComponent(Container)
const Avatar = styled.Image`
  width:50px;
  height:50px;
  margin-top:50px;
  left:10px;
  border-radius:50px;
`
const Title = styled.Text`
  font-weight:300;
  font-size:22px;
  margin-left:20px;
  color:grey;
`
const Name = styled.Text`
  font-weight:bold;
  font-size:19px;
  margin-left:20px;
  color:#3c4560;
`
const TitleBar = styled.View`
  margin-left:55px;
  margin-top:50px;
`

const Subtitle = styled.Text`
  color:grey;
  text-transform:uppercase;
  font-size:20px;
  margin:20px 10px;
`

const Logos = [
  {
    image:require("../assets/logo-framerx.png"),
    text:"Framer X"
  },
  {
    image:require("../assets/logo-figma.png"),
    text:"Figma"
  },
  {
    image:require("../assets/logo-studio.png"),
    text:"Studio"
  },
  {
    image:require("../assets/logo-react.png"),
    text:"React"
  },
  {
    image:require("../assets/logo-swift.png"),
    text:"Swift"
  },
  {
    image:require("../assets/logo-sketch.png"),
    text:"Sketch"
  },
]


const Cards = [
  {
    title:"React Native for Designers",
    image:require("../assets/background11.jpg"),
    logo:require("../assets/logo-react.png"),
    subtitle:"React Native",
    caption:"1 of 12 Section"
  },  
  {
    title: "Styled Components",
    image: require("../assets/background12.jpg"),
    logo: require("../assets/logo-react.png"),
    subtitle: "React Native",
    caption: "2 of 12 Section"
  },
  {
    title: "Props and Icons",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-react.png"),
    subtitle: "React Native",
    caption: "3 of 12 Section" 
  },
  {
    title: "Static Data and Loop",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-react.png"),
    subtitle: "React Native",
    caption: "4 of 12 Section"
  }
]

const courses = [
  {
    pic:require('../assets/avatar.jpg') ,
    image:require('../assets/background11.jpg'),
    logo:require('../assets/logo-studio.png'),
    title:'Prototype in InVision Studio',
    highlight:'10 Sections'
  },
  {
    pic:require('../assets/avatar.jpg') ,
    image:require('../assets/background14.jpg'),
    logo:require('../assets/logo-studio.png'),
    title:'Prototype in InVision Studio',
    highlight:'8 Sections'
  },
  {
    pic:require('../assets/avatar.jpg') ,
    image:require('../assets/background13.jpg'),
    logo:require('../assets/logo-studio.png'),
    title:'Prototype in InVision Studio',
    highlight:'7 Sections'
  },
  {
    pic:require('../assets/avatar.jpg') ,
    image:require('../assets/background12.jpg'),
    logo:require('../assets/logo-studio.png'),
    title:'Prototype in InVision Studio',
    highlight:'9 Sections'
  },
]