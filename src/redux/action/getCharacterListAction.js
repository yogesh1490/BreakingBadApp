import Constants from '../constants';
import {requestStarted, requestCompleted} from './appAction';
import api from '../../utils/api';

const axios = require('axios');

const getCharacterListSuccess = data => dispatch => {
  dispatch({
    type: Constants.GET_CHARACTER_LIST_SUCCESS,
    payload: data,
  });
};

const getCharacterListFailure = error => dispatch => {
  dispatch({
    type: Constants.GET_CHARACTER_LIST_FAILED,
    payload: error,
  });
};

const getCharacterListPending = () => dispatch => {
  dispatch({
    type: Constants.GET_CHARACTER_LIST_PENDING,
  });
};

export const getCharacterListAction = searchText => (dispatch, getState) => {
  dispatch(getCharacterListPending());
  dispatch(requestStarted());

  console.log('getCharacterListAction: searchText: ', searchText);

  axios({
    method: 'get',
    url: api.baseUrl + '/api/characters?name=' + searchText,

    data: {},
  })
    .then(function (response) {
      console.log('getCharacterListAction: response:', response);

      dispatch(
        getCharacterListSuccess(response !== undefined ? response.data : []),
      );

      dispatch(requestCompleted());
    })
    .catch(function (error) {
      console.log('getCharacterListAction: error: ', error);
      dispatch(requestCompleted());
      dispatch(getCharacterListFailure(error));
    });
};
