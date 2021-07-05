import React, {Component, Fragment} from 'react';
import {StatusBar, SafeAreaView, Text, View} from 'react-native';

import Strings from '../../resource/Strings';

import NavigationService from '../../redux/NavigationService';
import styles from './styles';

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      NavigationService.replace('Character');
    }, 2000);
  }

  render() {
    return (
      <Fragment>
        <SafeAreaView style={styles.safeAreaView} />
        <SafeAreaView style={styles.safeAreaSubView}>
          <StatusBar hidden />
          <View style={styles.splashContainer}>
            <View style={styles.textView}>
              <Text style={styles.splashText}>{Strings.title}</Text>
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default Splash;
