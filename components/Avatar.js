import React, { useState,useEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

const Avatar = ({save_user})=> {
    const [url, seturl] = useState("https://bit.ly/2QeizSd")
    useEffect(()=>{
        fetch('https://uinames.com/api/?ext&region=nigeria')
        .then((response)=>response.json())
        .then((data)=>{
            seturl(data.photo)
            save_user(data)
        })
    },[])
  return (
      <Image source={{ uri:url}} />
  );
}

const mapDispatchToProps =(dispatch) =>{
    
    return ({
        save_user:(args)=>dispatch({type:"info_details",payload:args.name})})
}

export default connect(null,mapDispatchToProps)(Avatar)

const Image = styled.Image` 
  width:50px;
  /* background:red; */
  height:50px;
  margin-top:50px;
  left:10px;
  border-radius:50px;
`