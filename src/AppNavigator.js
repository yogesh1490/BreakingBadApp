import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from './screen/Splash';
import Character from './screen/Character';
import Details from './screen/Details';
import Favourites from './screen/Favourites';

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      },
    },

    Character: {
      screen: Character,
      navigationOptions: {
        header: null,
      },
    },

    Favourites: {
      screen: Favourites,
      navigationOptions: {
        header: null,
      },
    },

    Details: {
      screen: Details,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Splash',
  },
);
export default createAppContainer(AppNavigator);
