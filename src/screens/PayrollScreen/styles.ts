import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../res/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: hp(7),
    paddingHorizontal: wp(4),
    paddingBottom: hp(5),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerText: {
    color: colors.white,
    fontSize: fonts.fontSize['2xl'],
    fontFamily: fonts.fontFamily.medium,
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
