import AsyncStorage from '@react-native-community/async-storage';
import Constants from '../constants';
import {APP_FAVORITES} from '../../utils/Constant';

const getFav = data => dispatch => {
  dispatch({
    type: Constants.GET_FAVOURITES,
    payload: data,
  });
};
export const getFavouritesAction = () => async dispatch => {
  const favourites = await AsyncStorage.getItem('APP_FAVORITES');

  dispatch(getFav(favourites ? JSON.parse(favourites) : []));
};

export default getFavouritesAction;
