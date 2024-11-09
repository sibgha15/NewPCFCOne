import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  mainContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(1),
    marginBottom: hp(10),
  },
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    flexDirection: 'column',
  },

  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.background,
    marginVertical: hp(0.5),
  },
});
