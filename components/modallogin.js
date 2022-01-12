import React, { useState,useEffect } from 'react';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback, Animated,Keyboard, Alert, Dimensions,AsyncStorage } from 'react-native';
import { BlurView } from 'expo-blur';
import { connect } from 'react-redux';
import firebase from "./firebase";

import Success from './success';
import Loading from './loading';

const screenHeight = Dimensions.get('window').height;
export  function ModalLogin({action,close_login,set_username}) {
    const [success, setSuccess] = useState(false)
    const [scale, setScale] = useState(new Animated.Value(0.8))
    const [translateY, setTransform] = useState(new Animated.Value(0))
    const [loading, setLoading] = useState(false)
    const [email, sete] = useState(new Animated.Value(15))
    const [top, setTop] = useState(new Animated.Value(screenHeight))
    const [password, setp] = useState(new Animated.Value(15))
    const [emailValue, setEmail] = useState("")
    const [passwordValue, setPassword] = useState("")
    useEffect(() => {
      if(action === 'open_login'){
          Animated.timing(top, { toValue: 0, duration: 300,}).start()
          Animated.timing(scale, { toValue: 1, duration: 400}).start()
        }
        if(action === 'close_login'){
            setTimeout(()=>{
                Animated.timing(top, { toValue: screenHeight, duration: 300,}).start()
                Animated.timing(scale, { toValue: 0.2, duration: 100}).start() 
            },200)
      }
    }, [action])

    const removeAnim = (id)=>{
        //my awesome animation
        console.log("animating")
        if(id === 'email'){
            Animated.timing(email, { toValue: 0, duration: 500}).start(()=>{
                Animated.timing(email, { toValue: 15, delay: 100, duration: 500}).start()
            })
        }else{
            Animated.timing(password, { toValue: 0, duration: 500}).start(()=>{
                Animated.timing(password, { toValue: 15, delay: 100, duration: 500}).start()
            })
        }
    }

    const wipeDetails = _ =>{
        hideKeyboard()
        setLoading(true)
        firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue).then(response=>{
                console.log(response)
                setLoading(false)
                setSuccess(true)
                setTimeout(()=>{
                    setSuccess(false)
                    Alert.alert("Congrats !!!","you have registered successfully",
                    [{text:"ok"},{onPress:()=>true}])
                },500)
        }).catch((err) => {
            setLoading(false)
            Alert.alert("Bad Login", `Please provide login details ${err.message}`)
        })
    }

    const hideDetails = ()=>{
       Alert.alert("Exiting","Do you want to Exit",[
           {text:"exit",onPress:()=>{close_login()}},
           {text:"cancel",onPress:()=>false}
        ])
    }

    const hideKeyboard =()=>{
        Keyboard.dismiss();
    }

  return ( 
    <AnimatedContainer style={{top:top}}>
        <TouchableWithoutFeedback onPress={hideKeyboard}>
            <BlurView 
            intensity={100}
            tint='default'
            style={{
                position:'absolute',
                width:'100%',
                height:'100%'
            }}
            />
        </TouchableWithoutFeedback>
        <AnimatedModal style={{transform:[{scale:scale}]}}>
            <Logo source={require(`../assets/logo-vue.png`)}/>
            <Text> Start Learning Access your privileges</Text>
            <TextInput 
            onChangeText={(val)=>setEmail(val)}
            placeholder='email' 
            value={email}
            // onBlur={()=>showAnim("email")} 
            onFocus={()=>removeAnim('email')}
            keyboardType='email-address'
            />
            <TextInput 
            onChangeText={(val)=>setPassword(val)}
            placeholder='password'
            value={password}
            // onBlur={()=>showAnim("password")} 
            onFocus={()=>removeAnim('password')}
            secureTextEntry={true}
            />
            <AnimatedEmail style={{height:email}} source={require('../assets/icon-email.png')} />
            <AnimatedPass style={{height:password}} source={require('../assets/icon-password.png')} />
                <Button onPress={wipeDetails}>
                    <ButtonText>Log in</ButtonText>
                </Button>
                <Button onPress={hideDetails} style={{backgroundColor:'orange'}}>
                    <ButtonText>Cancel Login</ButtonText>
                </Button>
        </AnimatedModal>
        <Success active={success}/>
        <Loading active={loading}/>
    </AnimatedContainer>
  );
}

const mapStateToProps = (store) =>({
    action:store?.action
})
const mapDispatchToProps = (dispatch) =>{
    return {
        // open_login:()=>dispatch({type:'Open_login'}),
        close_login: () => dispatch({ type:'Close_login'}),
        set_username: (name) => dispatch({ type: 'auth', name })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalLogin)

const Container = styled.View`
    background:rgba(0,0,0,0.7);
    position:absolute;
    top:0;
    z-index:5;
    left:0;
    width:100%;
    height:100%;
`
const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Modal = styled.View`
    width:350px;
    height:450px;
    background:white;
    border-radius:20px;
    margin:auto;
    align-items:center;
`
const AnimatedModal = Animated.createAnimatedComponent(Modal)

const Logo = styled.Image`
    width:60px;
    height:60px;
    margin-top:40px; 
`

const Iconemail = styled.Image`
    position:absolute;
    left:40;
    top:176;
    z-index:4;
    width:23px;
    height:15px;
`
const AnimatedEmail = Animated.createAnimatedComponent(Iconemail)

const Iconpassword = styled.Image`
    position:absolute;
    left:40;
    top:227;
    z-index:4;
    width:23px;
    height:15px;
`
const AnimatedPass = Animated.createAnimatedComponent(Iconpassword)

const Text = styled.Text`
    margin-top:20px; 
    font-size:13px;
    font-weight:700;
    text-align:center;
    width:160px;
    color:#b8bece;
    text-transform:uppercase;
`
const TextInput = styled.TextInput`
    width:295px;
    height:44px;
    border-radius:10px;
    border:1px solid #dbdfea;
    margin-top:10px;
    font-size:17px;
    color:#3c4560;
    padding-left:44px;
`
const Button = styled.TouchableOpacity `
    width:295px;
    margin-top:15px;
    height:60px;
    justify-content: flex-start;
    align-items:center;
    elevation:30px;
    border-radius:10px; 
    background:#529672;
`
const ButtonText = styled.Text `
    width:200px;
    text-align:center; 
    margin:auto;
    text-transform:uppercase;
    font-size:25px;
    color:white;
`