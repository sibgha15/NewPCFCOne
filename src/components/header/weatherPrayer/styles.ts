import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../../res/themes';

export const styles = StyleSheet.create({
  container: {
    paddingTop: hp(2),
    paddingHorizontal: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  weatherContainer: {
    flexDirection: 'row',
    backgroundColor: '#0000001A',
    alignItems: 'center',
    paddingVertical: hp(1.2),
    paddingHorizontal: hp(1),
    borderRadius: 25,
    width: hp(20),
    gap: hp(0.5),
  },

  temperatureText: {
    fontSize: fonts.fontSize.xl,
    fontFamily: fonts.fontFamily.medium,
    color: colors.white,
    textAlign: 'center',
  },

  weatherText: {
    fontSize: fonts.fontSize.normal,
    color: colors.white,
    fontFamily: fonts.fontFamily.primary,
    marginLeft: wp(1),
    textAlign: 'center',
  },

  prayerTimeText: {
    fontSize: fonts.fontSize.xl,
    fontFamily: fonts.fontFamily.medium,
    color: colors.white,
    textAlign: 'center',
  },

  prayerText: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fonts.fontFamily.primary,
    marginLeft: wp(1),
    textAlign: 'center',
  },
});
