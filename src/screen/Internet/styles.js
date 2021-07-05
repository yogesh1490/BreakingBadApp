import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../resource/colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  internetContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  internetViewWarning: {
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  internetTvWarning: {
    color: colors.white,
    fontSize: 14,
    padding: 5,
    paddingTop: 3,
    paddingBottom: 3,
    fontFamily: 'Roboto-Bold',
  },
  internetWarningImageView: {
    width: 180,
    height: 130,
    marginBottom: 20,
  },
  internetTextMsg: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  internetTvMsgInfo: {
    color: colors.grey4,
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    marginTop: 7,
    textAlign: 'center',
    marginRight: 40,
    marginLeft: 40,
  },
  internetBtnRequest: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    backgroundColor: colors.royalblue,
    color: colors.white,
    marginTop: 100,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 4,
  },
  internetViewTvImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  internetTxtRequest: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

export default styles;
