import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modelContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.background,
    width: '100%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingVertical: hp(3),
    paddingBottom: hp(4),
    paddingHorizontal: wp(4),
  },
  heading: {
    fontSize: fonts.fontSize['2xl'],
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: fonts.fontFamily.medium,
    lineHeight: 32,
    color: colors.primaryBlack,
    marginBottom: hp(3),
  },
  closeButtonText: {
    color: colors.darkGray,
    fontSize: fonts.fontSize.xl,
    fontWeight: '500',
    fontFamily: fonts.fontFamily.medium,
    textAlign: 'center',
  },
  calenderContainer: {
    borderRadius: 12,
  },
});
