import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Strings from '../../resource/Strings.js';
import colors from '../../resource/colors.js';
import styles from './styles';

const Internet = props => (
  <SafeAreaView style={styles.safeAreaViewContainer}>
    <View style={styles.internetContainer}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      {props.isInternetWarningShow ? (
        <View style={styles.internetViewWarning}>
          <Text style={styles.internetTvWarning}>{Strings.please_turn_on}</Text>
        </View>
      ) : (
        <View />
      )}

      <View style={styles.internetViewTvImg}>
        <Image
          style={styles.internetWarningImageView}
          source={require('../resource/images/no_internet_connection.png')}
        />
        <Text style={styles.internetTextMsg}>
          {Strings.no_internet_connection}
        </Text>
        <Text style={styles.internetTvMsgIn}>
          {Strings.please_check_your_internet}
        </Text>
        <TouchableOpacity
          style={styles.internetBtnRequest}
          onPress={props.onTryAgainClick}>
          <Text style={styles.internetTxtRequest}>{Strings.try_again}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
);

export default Internet;
