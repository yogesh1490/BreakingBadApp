import React from 'react';
import {Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const CharacterView = props => {
  const renderImageItemView = item => (
    <TouchableOpacity onPress={props.itemOnClick}>
      <View style={styles.rowImageViewContainer}>
        <View style={styles.rowImageSubViewContainer}>
          <FastImage
            style={styles.rowImageImage}
            source={{
              uri: item.img,
            }}
          />
          <View style={styles.rowFooterView}>
            <View style={styles.rowImageTitle}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={styles.rowImageTxt}>
                {item.name}
              </Text>

              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={styles.rowImageSubTxt}>
                {item.nickname}
              </Text>
            </View>

            {props.favouritesArray === '' ? (
              <View style={styles.rowFavView} />
            ) : (
              <View style={styles.rowFavView}>
                <TouchableOpacity onPress={props.onFavouriteClick}>
                  <Image
                    style={styles.image}
                    source={
                      props.favouritesArray.includes(item.char_id)
                        ? require('../../assets/images/heart_filled.png')
                        : require('../../assets/images/heart.png')
                    }
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return <View>{renderImageItemView(props.item)}</View>;
};

export default CharacterView;
