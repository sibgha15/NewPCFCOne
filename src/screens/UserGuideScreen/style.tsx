import {Platform, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? hp(6) : 0,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: hp(3),
    paddingHorizontal: wp(4),
  },
  card: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(3),
    marginBottom: hp(2),
  },
  iconWrapper: {
    height: 44,
    width: 44,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#177DB71A',
  },
  cardText: {
    flex: 1,
    color: colors.primaryBlack,
    fontSize: fonts.fontSize.medium,
    fontFamily: fonts.fontFamily.medium,
    lineHeight: 22,
    letterSpacing: 0.1,
    paddingRight: wp(4),
  },
});
