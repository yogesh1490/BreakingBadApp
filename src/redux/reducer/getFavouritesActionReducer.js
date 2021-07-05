import Constant from '../constants';

const initialState = {
  favouritesArray: [],
};

const getFavouritesActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.GET_FAVOURITES:
      return {
        favouritesArray: action.payload,
      };

    default:
      return state;
  }
};

export default getFavouritesActionReducer;
