import {createStackNavigator} from 'react-navigation-stack';

import Login from '../../Screen/Login';
import Home from  '../../Screen/Home'

const NavigatorConfig = {
    initialRouteName: 'login',
    headerMode: 'none',
}


const rootConfig = {
    login: Login,
    home: Home,
}

export default createStackNavigator(rootConfig, NavigatorConfig);