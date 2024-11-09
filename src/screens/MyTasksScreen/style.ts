import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    height: hp(100),
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
  },
  headerText: {
    color: colors.white,
    fontSize: fonts.fontSize['2xl'],
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: fonts.fontFamily.medium,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
    paddingHorizontal: wp(4),
    paddingBottom: hp(5),
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
    borderRadius: 71,
  },
  tabButtonText: {
    color: colors.white,
    fontSize: fonts.fontSize.large,
    fontWeight: '400',
    fontFamily: fonts.fontFamily.primary,
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
    backgroundColor: '#883BA91A',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardRowInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardBadge: {
    borderWidth: 1,
    borderColor: '#EDEEF1',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 30,
  },
  inProgressBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: '#FFB35B1A',
    borderRadius: 30,
  },
  inProgressText: {
    fontSize: fonts.fontSize.small,
    color: '#D78B33',
    fontWeight: '500',
    fontFamily: fonts.fontFamily.medium,
  },
  isCompletetedBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: '#41C1791A',
    borderRadius: 30,
  },
  isCompletetedText: {
    fontSize: fonts.fontSize.small,
    color: '#279457',
    fontWeight: '500',
    fontFamily: fonts.fontFamily.medium,
  },
  cardTitle: {
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.medium,
    color: colors.primaryBlack,
    lineHeight: 24,
    paddingTop: 16,
  },
  cardInfoText: {
    color: colors.secondary,
    fontSize: fonts.fontSize.normal,
    fontWeight: '400',
    fontFamily: fonts.fontFamily.primary,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
