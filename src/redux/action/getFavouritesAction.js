import AsyncStorage from '@react-native-community/async-storage';
import Constants from '../constants';
import {APP_FAVORITES} from '../../utils/Constant';

const getFav = data => dispatch => {
  dispatch({
    type: Constants.GET_FAVOURITES,
    payload: data,
  });
};

const removeItem = (array, removeElement) => {
  const index = array.indexOf(removeElement);
  if (index > -1) {
    array.splice(index, 1);
  }
  console.log(array);
};

export const getFavouritesAction = (id, checkFavourite) => async dispatch => {
  let favourites = await AsyncStorage.getItem('APP_FAVORITES');

  if (checkFavourite) {
    favourites = favourites ? JSON.parse(favourites) : [];

    favourites.includes(id) ? removeItem(favourites, id) : favourites.push(id);
    favourites = JSON.stringify(favourites);
    AsyncStorage.setItem('APP_FAVORITES', favourites);
  }
  dispatch(getFav(favourites ? JSON.parse(favourites) : []));
};

export default getFavouritesAction;
