import React, {Fragment, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Image,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import colors from '../../resource/colors';
import Strings from '../../resource/Strings';
import IconBack from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as getCharacterListActionCreator from '../../redux/action/getCharacterListAction';
import CharacterView from '../CharacterView';
import styles from './styles';
const Details = props => {
  useEffect(() => {
    console.log('Item Data: ', props.navigation.getParam('item', null));
    console.log('Image URI: ', props.navigation.getParam('item', null).img);
  }, []);

  const renderTitleBar = () => (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.titleBarView}>
        <IconBack style={styles.searchIcon} size={27} name="arrow-back" />
      </TouchableOpacity>

      <View style={styles.titleBarViewMiddle} />
      <View style={styles.titleBarView}>
        <Image
          style={styles.imageTitle}
          source={require('../../assets/images/heart_filled.png')}
        />
      </View>
    </View>
  );
  const renderSeasons = item => {
    return (
      <View style={styles.viewSeason}>
        <Text style={styles.characterValueText}>{'Season ' + item}</Text>
      </View>
    );
  };

  const renderImageItemView = item =>
    item.char_id !== props.navigation.getParam('item', null).char_id && (
      <CharacterView
        item={item}
        itemOnClick={() => ''}
        onFavouriteClick={() => ''}
        favouritesArray={''}
      />
    );

  const contentView = () => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Image
            source={{uri: props.navigation.getParam('item', null).img}}
            style={styles.bgPhotoStyle}
          />

          <LinearGradient
            colors={colors.linearGradientDefault}
            start={{x: 0, y: 0}}
            style={styles.linearGradient}
            end={{x: 0, y: 1}}
          />
        </View>

        <View style={styles.viewContent}>
          {renderTitleBar()}
          <Image
            source={{uri: props.navigation.getParam('item', null).img}}
            style={styles.characterImage}
          />

          <Text style={styles.characterNameText}>
            {props.navigation.getParam('item', null).name}
          </Text>
          <Text style={styles.characterNicknameText}>
            {props.navigation.getParam('item', null).nickname}
          </Text>
          <Text style={styles.characterStatusText}>
            {props.navigation.getParam('item', null).status}
          </Text>
          <View style={styles.textContentView}>
            <View style={styles.potrayedContentView}>
              <Text style={styles.characterLabelText}>{Strings.potrayed}</Text>
              <Text style={styles.characterValueText}>
                {props.navigation.getParam('item', null).portrayed}
              </Text>
            </View>

            <View style={styles.birthDayContentView}>
              <View style={styles.viewBirthDate}>
                <Text style={styles.characterValueText}>
                  {moment(
                    props.navigation.getParam('item', null).birthday,
                    'DD/MM/YYYY',
                  ).format('DD-MMMM-YYYY')}
                </Text>
                <IconFeather style={styles.birthIcon} size={24} name="gift" />
              </View>
            </View>
          </View>

          <View style={styles.occupationView}>
            <View style={styles.potrayedContentView}>
              <Text style={styles.characterLabelText}>
                {Strings.occupation}
              </Text>
              {props.navigation
                .getParam('item', null)
                .occupation.map((item, key) => (
                  <Text key={key} style={styles.characterValueText}>
                    {item}
                  </Text>
                ))}
            </View>
          </View>

          <View style={styles.occupationView}>
            <View style={styles.potrayedContentView}>
              <Text style={styles.characterLabelText}>
                {Strings.occupation}
              </Text>
              {props.navigation
                .getParam('item', null)
                .occupation.map((item, key) => (
                  <Text key={key} style={styles.characterValueText}>
                    {item}
                  </Text>
                ))}
            </View>
          </View>

          <View style={styles.occupationView}>
            <View style={styles.potrayedContentView}>
              <Text style={styles.characterLabelText}>
                {Strings.appeard_in}
              </Text>

              <FlatList
                data={
                  props.navigation.getParam('item', null).appearance !==
                  undefined
                    ? props.navigation.getParam('item', null).appearance
                    : []
                }
                horizontal={true}
                renderItem={({item}) => renderSeasons(item)}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>

          <View style={styles.occupationView}>
            <View style={styles.potrayedContentView}>
              <Text style={styles.otherCharacterLabelText}>
                {Strings.other_characters}
              </Text>

              <FlatList
                data={
                  props.getCharacterListData !== undefined
                    ? props.getCharacterListData
                    : []
                }
                horizontal={true}
                renderItem={({item}) => renderImageItemView(item)}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaView} />
      <SafeAreaView style={styles.safeAreaSubView}>
        <StatusBar
          hidden={true}
          backgroundColor={colors.black}
          barStyle="light-content"
        />

        <ScrollView>
          <View style={styles.scrollSubView}>{contentView()}</View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  getCharacterActions: bindActionCreators(
    getCharacterListActionCreator,
    dispatch,
  ),
});

const mapStateToProps = state => ({
  isLoading: state.getCharacterListReducer.isLoading,
  getCharacterListData: state.getCharacterListReducer.getCharacterListData,
  favouritesArray: state.getFavouritesActionReducer.favouritesArray,
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
