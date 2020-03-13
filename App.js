import React from 'react';
import {createStore} from 'redux'
import Home from './Screens/homescreen';
import { Provider } from 'react-redux';

const initialState = {
  action:"openmenu"
}

const Reducer =(state = initialState,action) =>{
  switch(action.type){
    case "toggleMenu":
      return {
        ...state,
        action:state.action === 'openmenu'?'closeMenu':'openmenu'
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