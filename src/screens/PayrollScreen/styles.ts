import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../res/themes';

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    paddingBottom: hp(4),
    position: 'relative',
  },
  headerText: {
    color: colors.white,
    fontSize: fonts.fontSize['2xl'],
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: fonts.fontFamily.medium,
  },
  backIcon: {
    position: 'absolute',
    left: wp(3),
    top: hp(2.9),
    zIndex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: -hp(3),
    paddingVertical: hp(4),
    paddingBottom: hp(2),
    paddingHorizontal: wp(4),
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  closeButtonText: {
    color: colors.darkGray,
    fontSize: fonts.fontSize.xl,
    fontFamily: fonts.fontFamily.medium,
    textAlign: 'center',
  },
});
