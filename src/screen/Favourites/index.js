import React, {Fragment, useEffect} from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as getCharacterListActionCreator from '../../redux/action/getCharacterListAction';
import * as getFavouritesActionCreator from '../../redux/action/getFavouritesAction';
import Icons from 'react-native-vector-icons/AntDesign';
import Strings from '../../resource/Strings';
import CharacterView from '../CharacterView';
import styles from './styles';
import colors from '../../resource/colors';

const Favourites = props => {
  useEffect(() => {
    //default search for blade movie
    props.getCharacterActions.getCharacterListAction('');
  }, [props.getCharacterActions]);

  useEffect(() => {
    //get favourites
    props.getFavouritesActions.getFavouritesAction(0, false);
  }, []);

  const renderTitleBar = () => (
    <View style={styles.headerContainer}>
      <View style={styles.titleBarViewTitle}>
        <Text style={styles.headerTextStyle}>{Strings.favourites}</Text>
      </View>
      <View style={styles.titleBarView}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icons style={styles.searchIcon} size={30} name="close" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderImageItemView = item => (
    <CharacterView item={item} favouritesArray={props.favouritesArray} />
  );

  const getFavourites = favouritesList => {
    let dataArray = [];
    favouritesList.forEach(fav => {
      if (props.favouritesArray.includes(fav.char_id)) {
        dataArray.push(fav);
      }
    });
    return dataArray;
  };
  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaView} />
      <SafeAreaView style={styles.safeAreaSubView}>
        <StatusBar
          hidden={false}
          backgroundColor={colors.black}
          barStyle="light-content"
        />

        {renderTitleBar()}
        <View style={styles.CharacterSearchBarView}>
          <View style={styles.movieContainerView}>
            <View style={styles.CharacterListViewParent}>
              {props.getCharacterListData.length === 0 ? (
                <Text style={styles.CharacterNotAvailableText}>
                  {props.isLoading ? '' : Strings.no_fav_to_show}
                </Text>
              ) : (
                <FlatList
                  data={getFavourites(
                    props.getCharacterListData !== undefined
                      ? props.getCharacterListData
                      : [],
                  )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
