import 'react-native-gesture-handler';
import React from 'react';
import {createStore} from 'redux'
import { Provider } from 'react-redux';

import AppContainer from "./navigator/appNavigator";

const initialState = {
  action:"",
  auth:false
}

const Reducer =(state = initialState,action) =>{
  switch(action.type){
    case "Open":
      return {
        ...state,
        action:'openmenu'
      }
    case "Close":
      return {
        ...state,
        action:"closemenu"
      }
    case "info_details":
      console.log(action.payload)
      return {
        ...state,
        name:action?.payload
      }
    case "openProject":
      return {
        ...state,
        action:"open"
      }
    case "closeProject":
      return {
        ...state,
        action:"close"
      }
    case "Open_login":
      console.log("it has opened")
      return {
        ...state,
        action:"open_login"
      }
      case "Close_login":
        console.log("it has closed")
      return {
        ...state,
        action:"close_login"
      }
    default:
      return state;
  }
}

const store = createStore(Reducer)
const App = () => {
  return (
    <>
    <Provider store={store}> 
     <AppContainer />
    </Provider>
    </>
  )
}

export default App