import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../res/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    paddingBottom: hp(4),
    paddingTop: Platform.OS === 'ios' ? hp(7) : hp(1.5),
  },
  headerText: {
    color: colors.white,
    fontSize: fonts.fontSize['2xl'],
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: fonts.fontFamily.medium,
  },
  mainContainer: {
    backgroundColor: colors.background,
    flex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -hp(3),
    paddingTop: hp(3),
    paddingHorizontal: wp(4),
    paddingBottom: hp(8),
  },
  cardContainer: {
    flexDirection: 'column',
    gap: hp(2),
  },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  cardIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#177DB71A',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  textWrapper: {
    flex: 1,
    // paddingHorizontal: wp(2),
  },
  titleText: {
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.medium,
    color: colors.primaryBlack,
    lineHeight: 24,
  },
  dateText: {
    fontSize: fonts.fontSize.normal,
    color: colors.darkGray,
    fontFamily: fonts.fontFamily.primary,
  },
  moreInfoButton: {
    paddingLeft: wp(2),
  },
});
