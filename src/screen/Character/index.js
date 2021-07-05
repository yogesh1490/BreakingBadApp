import React, {Fragment, useState, useEffect} from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  View,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import IconSearch from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as getCharacterListActionCreator from '../../redux/action/getCharacterListAction';
import * as getFavouritesActionCreator from '../../redux/action/getFavouritesAction';
import styles from './styles';
import Strings from '../../resource/Strings';
import CharacterView from '../CharacterView';

import colors from '../../resource/colors';
const {width} = Dimensions.get('window');

const Character = props => {
  const inputs = [];
  let favourite = [];

  const [isSearchClick, setIsSearchClick] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    //default search for blade movie
    props.getCharacterActions.getCharacterListAction('');
  }, [props.getCharacterActions]);

  useEffect(() => {
    //get favourites
    props.getFavouritesActions.getFavouritesAction();
  }, []);

  const clearSearch = () => {
    inputs.textInput.clear();
    setIsSearchClick(false);
    setSearchValue('');
    props.getCharacterActions.getCharacterListAction('');
    Keyboard.dismiss();
  };

  const removeItem = (array, removeElement) => {
    const index = array.indexOf(removeElement);
    if (index > -1) {
      array.splice(index, 1);
    }
    console.log(array);
  };
  const onFavouriteClick = async id => {
    console.log('FAVOURITES: ID: ', id);

    favourite = await AsyncStorage.getItem('APP_FAVORITES');
    console.log('FAVOURITES: ID:2 ', JSON.parse(favourite));
    favourite = favourite ? JSON.parse(favourite) : [];

    favourite.includes(id) ? removeItem(favourite, id) : favourite.push(id);

    console.log(
      'FAVOURITES: ID:1 ',
      JSON.stringify(favourite.length > 0 ? favourite : ''),
    );
    AsyncStorage.setItem('APP_FAVORITES', JSON.stringify(favourite));
    props.getFavouritesActions.getFavouritesAction();
  };

  const searchFilterFunction = searchTxt => {
    const n = searchTxt.length;

    setSearchValue(searchTxt);

    props.getCharacterActions.getCharacterListAction(searchTxt);
  };

  const renderTitleBar = () => (
    <View style={styles.headerContainer}>
      <View style={styles.titleBarViewTitle}>
        <Text style={styles.headerTextStyle}>{Strings.title}</Text>
      </View>
      <View style={styles.titleBarView}>
        <TouchableOpacity onPress={() => setIsSearchClick(!isSearchClick)}>
          <IconSearch style={styles.searchIcon} size={30} name="search" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Favourites')}>
          <Image
            style={styles.imageTitle}
            source={require('../../assets/images/heart_filled.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderSearchBar = () => (
    <View style={styles.movieViewSearchBarContainer}>
      <TextInput
        style={styles.searchTextInput}
        keyboardType="ascii-capable"
        autoCapitalize="none"
        maxLength={20}
        placeholder={Strings.search_by}
        selectionColor={colors.blue}
        underlineColorAndroid="transparent"
        placeholderTextColor={colors.grey}
        accessible
        blurOnSubmit
        ref={input => {
          inputs.textInput = input;
        }}
        onChangeText={query => searchFilterFunction(query)}
      />
      {isSearchClick ? (
        <TouchableOpacity onPress={() => clearSearch()}>
          <Icons style={styles.searchIcon} size={20} name="close" />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );

  const itemOnClick = item => {
    props.navigation.navigate('Details', {item});
  };

  const renderImageItemView = item => (
    <CharacterView
      item={item}
      itemOnClick={() => itemOnClick(item)}
      onFavouriteClick={() => onFavouriteClick(item.char_id)}
      favouritesArray={props.favouritesArray}
    />
  );

  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaView} />
      <SafeAreaView style={styles.safeAreaSubView}>
        <StatusBar
          hidden={false}
          backgroundColor={isSearchClick ? colors.blackShadow : colors.black}
          barStyle="light-content"
        />

        {isSearchClick ? renderSearchBar() : renderTitleBar()}
        <View style={styles.CharacterSearchBarView}>
          <View style={styles.movieContainerView}>
            <View style={styles.CharacterListViewParent}>
              {props.getCharacterListData.length === 0 ? (
                <Text style={styles.CharacterNotAvailableText}>
                  {props.isLoading ? '' : Strings.no_movie_to_show}
                </Text>
              ) : (
                <FlatList
                  data={
                    props.getCharacterListData !== undefined
                      ? props.getCharacterListData
                      : []
                  }
                  numColumns={2}
                  alwaysBounceHorizontal={false}
                  bounces={false}
                  renderItem={({item}) => renderImageItemView(item)}
                  keyExtractor={(item, index) => index.toString()}
                />
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  getCharacterActions: bindActionCreators(
    getCharacterListActionCreator,
    dispatch,
  ),
  getFavouritesActions: bindActionCreators(
    getFavouritesActionCreator,
    dispatch,
  ),
});

const mapStateToProps = state => ({
  isLoading: state.getCharacterListReducer.isLoading,
  getCharacterListData: state.getCharacterListReducer.getCharacterListData,
  favouritesArray: state.getFavouritesActionReducer.favouritesArray,
});

export default connect(mapStateToProps, mapDispatchToProps)(Character);
