import React from 'react';
import {createStore} from 'redux'
import Home from './Screens/homescreen';
import { Provider } from 'react-redux';

const initialState = {
  action:""
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
      console.log(payload?.name)
      return {
        ...state,
        name:payload?.name
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
      <Home/>
    </Provider>
    </>
  )
}

export default App