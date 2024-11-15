import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontFamily: fonts.fontFamily.medium,
    color: colors.primaryBlack,
    marginBottom: hp(2),
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthYearButton: {
    margin: wp(1),
    borderRadius: 71,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.background,
    width: '23%',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: '#20AAE2',
  },
  monthYearText: {
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.primary,
    color: colors.secondary,
  },
  selectedText: {
    color: colors.white,
  },
  toggleButtonText: {
    color: colors.primaryBlack,
    fontSize: fonts.fontSize.xl,
    fontFamily: fonts.fontFamily.medium,
    textAlign: 'center',
    marginVertical: hp(2),
  },
  closeButtonText: {
    color: colors.darkGray,
    fontSize: fonts.fontSize.xl,
    fontFamily: fonts.fontFamily.medium,
    textAlign: 'center',
  },
  yearNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(3),
  },
  yearRangeText: {
    color: colors.primaryBlack,
    fontSize: fonts.fontSize.xl,
    fontFamily: fonts.fontFamily.medium,
  },
});
