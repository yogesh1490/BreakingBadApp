import Constant from '../constants';

const initialState = {
  getCharacterListData: [],
  getCharacterListerror: null,
  isLoading: false,
};

const getCharacterListReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.GET_CHARACTER_LIST_SUCCESS:
      return {
        getCharacterListData: action.payload,
        getCharacterListerror: null,
        isLoading: false,
      };
    case Constant.GET_CHARACTER_LIST_FAILED:
      return {
        getCharacterListData: [],
        getCharacterListerror: action.payload,
        isLoading: false,
      };
    case Constant.GET_CHARACTER_LIST_PENDING:
      return {
        getCharacterListData: [],
        getCharacterListerror: null,
        isLoading: true,
      };
    case Constant.RESET_STORE:
      return {
        getCharacterListData: [],
        getCharacterListerror: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default getCharacterListReducer;
