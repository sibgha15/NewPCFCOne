import {Platform, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'ios' ? hp(5) : hp(0),
  },
  mainContainer: {
    flexGrow: 1,
    backgroundColor: colors.background,
  },
});
