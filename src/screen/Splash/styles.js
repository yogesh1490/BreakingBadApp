import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../resource/colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  splashContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  safeAreaView: {flex: 0, backgroundColor: colors.lightslategray},
  safeAreaSubView: {flex: 1, backgroundColor: colors.lightslategray},
  splashText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 38,
    fontFamily: 'Roboto-Bold',
  },
  textView: {flexDirection: 'row', alignItems: 'center'},
});

export default styles;
