import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import App from './App/App';

const rootNavigator = createSwitchNavigator({
    app:App
})

export default createAppContainer(rootNavigator);