import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';

 import Home from "../Screens/homescreen";
 import Section from "../Screens/sectionscreen";
import TabNavigator from "./tabnavigator";

 const Appcontainer = createStackNavigator({
     Home:{
         screen:Home,
         navigationOptions:{
             header:null
         }
     },
     Section:{
         screen:Section,
         navigationOptions:{
             title:"Back",
            //  header:`Section`,
         }
     }
 },{mode:"modal"})

 export default createAppContainer(TabNavigator);