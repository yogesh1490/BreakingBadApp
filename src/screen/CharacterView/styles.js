import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../resource/colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  rowImageViewContainer: {
    flex: 1,
    flexDirection: 'row',
    width: width / 2,
    height: width / 2 + width / 10 + 80,
    borderColor: colors.light_grey,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light_blue,
  },
  rowImageSubViewContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowImageImage: {
    resizeMode: 'contain',
    borderRadius: 8,
    width: width / 2 - 30,
    height: width / 2 + width / 10,
    backgroundColor: colors.light_grey,
  },
  rowImageTitle: {
    flex: 0.8,
    flexDirection: 'column',
    marginTop: 10,
  },
  rowFavView: {
    flex: 0.2,
    justifyContent: 'center',
    marginTop: 10,
  },
  rowFooterView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rowImageTxt: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'Roboto-Bold',
  },

  rowImageSubTxt: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Roboto-Thin',
  },
  image: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
});

export default styles;
