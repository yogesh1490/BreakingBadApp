import {combineReducers} from 'redux';
import appReducer from './appReducer';
import getFavouritesActionReducer from './getFavouritesActionReducer';
import getCharacterListReducer from './getCharacterListReducer';

export default combineReducers({
  appReducer,
  getCharacterListReducer,
  getFavouritesActionReducer,
});
