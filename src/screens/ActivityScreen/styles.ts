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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    backgroundColor: colors.white,
  },
  headerText: {
    color: colors.primaryBlack,
    fontSize: fonts.fontSize['2xl'],
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: fonts.fontFamily.medium,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  tab: {
    width: wp(50),
  },
  tabText: {
    textAlign: 'center',
    paddingBottom: hp(0.5),
    borderRadius: 3,
    color: colors.lightGrey,
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.medium,
  },
  unreadTabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(2),
  },
  indicator: {
    height: hp(0.5),
    borderBottomWidth: 2,
    borderColor: colors.primary,
    width: wp(50),
  },
  badge: {
    backgroundColor: colors.lightGrey,
    borderRadius: 44,
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(0.5),
  },
  badgeText: {
    color: colors.white,
    fontSize: fonts.fontSize.normal,
    textAlign: 'center',
    fontFamily: fonts.fontFamily.medium,
  },
  contentText: {
    textAlign: 'center',
    marginVertical: hp(2),
    fontSize: fonts.fontSize.medium,
    color: colors.primaryBlack,
  },
  mainContainer: {
    backgroundColor: colors.background,
    flex: 1,
    paddingVertical: hp(2),
    paddingBottom: hp(8),
  },
  notificationCard: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#177DB70D',
  },
  notificationContent: {
    flexDirection: 'row',
    gap: wp(3),
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 68,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.medium,
    lineHeight: 24,
    color: colors.primaryBlack,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
    marginTop: hp(0.5),
  },
  infoText: {
    color: colors.secondary,
    fontSize: fonts.fontSize.normal,
    fontFamily: fonts.fontFamily.primary,
  },
});
