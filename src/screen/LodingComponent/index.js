import React from 'react';
import {Text, ActivityIndicator, SafeAreaView} from 'react-native';
import styles from './styles';

const LoadingComponent = props => (
  <SafeAreaView style={styles.loaderParent}>
    <ActivityIndicator size="large" color="white" />
    <Text style={styles.loaderTxt}>{'Loading...'}</Text>
  </SafeAreaView>
);

export default LoadingComponent;
