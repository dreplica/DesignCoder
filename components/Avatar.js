import React, { useState,useEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

const Avatar = (save_user)=> {
    const [url, seturl] = useState("https://bit.ly/2QeizSd")
    useEffect(()=>{
        fetch('https://uinames.com/api/?ext')
        .then((response)=>response.json())
        .then((data)=>{
            seturl(data.photo)
            save_user(data)
        })
        // seturl('https://uinames.com/api/?ext')
    },[])
  return (
      <Image source={{ uri:url}} />
  );
}

const dispatch = (args)=> dispatch =>{
    const payload = {
        name:args.name
    }
    dispatch({type:"info_details",payload:payload})
}

export default connect(null,{save_user:dispatch})(Avatar)

const Image = styled.Image` 
  width:50px;
  background:red;
  height:50px;
  margin-top:50px;
  left:10px;
  border-radius:50px;
`