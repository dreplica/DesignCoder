import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { AsyncStorage, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const MenuItem =(props) =>{

    const logout = async ()=>{
        if(props.title === 'Log out'){
            await AsyncStorage.clear();
            await AsyncStorage.removeItem('name');
            props.close();
        }
    }

    return (
        <TouchableOpacity onPress={logout}>
            <Container>
                <Iconview>
                    <Ionicons color='#546bfb' name={props?.icon} size={25} />
                </Iconview>
                <Content>
                    <Title>{props?.title}</Title>
                    <Text>{props?.text}</Text>
                </Content>
            </Container>
        </TouchableOpacity>
    );
}

const mapDispatchToProps = (dispatch)=>{
    return {
        close: () => dispatch({ type: "Close"})
    }
}

// const mapStateToProps

export default connect(null,mapDispatchToProps)(MenuItem)

const Text = styled.Text`
    font-size:18px;
    font-weight:300;
    opacity:0.4;
`
const Title = styled.Text`
    font-size:25px;
    font-weight:700;
`
const Content = styled.View`
    padding-left:20px;
`
const Iconview = styled.View`
    height:20px;
    margin-top:6px;
`

const Container = styled.View`
    width:100%;
    margin:50px 30px 0px  50px;
    flex-direction:row;
    justify-content:flex-start;
    align-items:flex-start;
`
