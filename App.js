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
      console.log("opening")
      return {
        ...state,
        action:'openmenu'
      }
    case "Close":
      console.log('closing')
      return {
        ...state,
        action:"closemenu"
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