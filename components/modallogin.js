import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback, Animated,Keyboard } from 'react-native';
import { BlurView } from 'expo-blur';
import Success from './success';
import Loading from './loading';
// import {BoxShadow} from 'react-native-shadow'

export default function ModalLogin() {
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, sete] = useState(new Animated.Value(15))
    const [password, setp] = useState(new Animated.Value(15))
    const [emailValue, setEmail] = useState("")
    const [passwordValue, setPassword] = useState("")

    const removeAnim = (id)=>{
        //my awesome animation
        console.log("animating")
        if(id === 'email'){
            Animated.timing(email,{toValue:0,duration:500}).start(()=>{
                Animated.timing(email,{toValue:15,delay:100,duration:500}).start()
            })
        }else{
            Animated.timing(password,{toValue:0,duration:500}).start(()=>{
                Animated.timing(password,{toValue:15,delay:100,duration:500}).start()
            })
        }
    }
    // const showAnim = (id)=>{
    //     if(id === 'email'){
    //         Animated.timing(email,{toValue:15,duration:500}).start()
    //     }else{
    //         Animated.timing(password,{toValue:15,duration:500}).start()   
    //     }
    // }

    const wipeDetails = _ =>{
        // alert(emailValue+"   "+passwordValue)
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            setSuccess(true)
        },2000)
        setTimeout(()=>{
            setSuccess(false)
        },4000)
        // setEmail("")
        // setPassword("")
    }

  return (
    <Container>
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
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
        <Modal>
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
        </Modal>
        <Success active={success}/>
        <Loading active={loading}/>
    </Container>
  );
}

const Container = styled.View`
    background:rgba(0,0,0,0.7);
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
`
const Modal = styled.View`
    width:350px;
    height:400px;
    background:white;
    border-radius:20px;
    margin:auto;
    align-items:center;
`
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