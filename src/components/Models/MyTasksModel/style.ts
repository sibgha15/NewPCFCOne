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
    backgroundColor: '#4d4d4d',
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
  flexbetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  sectionTitle: {
    color: colors.primaryBlack,
    fontSize: fonts.fontSize.large,
    fontWeight: '500',
    fontFamily: fonts.fontFamily.medium,
    lineHeight: 24,
  },
  dateInputContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(3),
  },
  dateText: {
    fontSize: fonts.fontSize.large,
    color: colors.primaryBlack,
    fontFamily: fonts.fontFamily.primary,
  },
});
