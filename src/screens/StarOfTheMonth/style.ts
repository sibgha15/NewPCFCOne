import {Platform, StyleSheet} from 'react-native';
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
    backgroundColor: colors.primary,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    paddingTop: Platform.OS === 'ios' ? hp(7) : hp(1.5),
  },
  headerText: {
    color: colors.white,
    fontSize: fonts.fontSize['2xl'],
    textAlign: 'center',
    fontFamily: fonts.fontFamily.medium,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(3),
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
  card: {
    borderRadius: 12,
    padding: 16,
    backgroundColor: colors.white,
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
  },
  ratingStarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  title: {
    color: colors.primaryBlack,
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.xl,
    lineHeight: 26,
  },
  info: {
    color: colors.darkGray,
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.large,
    letterSpacing: 0.5,
  },
  titleRow: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  selectInput: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.grey,
    marginTop: hp(0.5),
    marginBottom: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  selectInputText: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.large,
    color: colors.primaryBlack,
  },
  textArea: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.grey,
    marginTop: hp(0.5),
    height: 120,
  },
  dropdownModel: {
    height: hp(100),
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  dropdownContainer: {
    position: 'absolute',
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 12,
    paddingBottom: hp(10),
    paddingTop: hp(4),
    borderRadius: 8,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  dropdownOption: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: colors.primaryBlack,
  },
  dropdownOptionHover: {
    backgroundColor: colors.lightGrey,
  },
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  evaluationText: {
    color: colors.primary,
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.medium,
    letterSpacing: 0.5,
    paddingTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    paddingVertical: hp(1),
    paddingBottom: hp(4),
    width: wp(100),
    paddingHorizontal: wp(4),
  },
  closebtn: {
    textAlign: 'center',
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.xl,
    lineHeight: 26,
    color: colors.darkGray,
  },
  searchBarContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: colors.white,
    marginBottom: hp(5),
    marginHorizontal: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  searchBarText: {
    fontSize: fonts.fontSize.large,
    color: colors.black,
    fontFamily: fonts.fontFamily.primary,
    letterSpacing: 0.5,
  },
  tableContainer: {
    flexDirection: 'column',
    marginTop: hp(1),
    marginBottom: hp(10),
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    backgroundColor: colors.white,
  },
  tableHeader: {
    backgroundColor: colors.white,
  },
  tableHeaderText: {
    color: colors.darkGray,
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.normal,
    textAlign: 'center',
    letterSpacing: 0.1,
  },
  tableText: {
    color: colors.darkGray,
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.medium,
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.background,
  },
  ratingFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(1),
  },
  col15: {
    flex: 1.2,
  },
  col25: {
    flex: 2.5,
  },
  col40: {
    flex: 4,
  },
  col20: {
    flex: 2.3,
  },
  adminViewCad: {
    paddingVertical: 12,
    paddingHorizontal: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  name: {
    color: colors.primaryBlack,
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.large,
    lineHeight: 24,
  },
  date: {
    color: colors.darkGray,
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.normal,
    letterSpacing: 0.5,
  },
  approveStatusWrapper: {
    backgroundColor: '#41C1791A',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  approveStatusText: {
    color: '#279457',
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.small,
    letterSpacing: 0.5,
  },
  pendingStatusWrapper: {
    backgroundColor: '#FFB35B1A',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  pendingStatusText: {
    color: '#D78B33',
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.small,
    letterSpacing: 0.5,
  },
  rejectStatusWrapper: {
    backgroundColor: '#FC493D1A',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  rejectStatusText: {
    color: '#E13D17',
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.small,
    letterSpacing: 0.5,
  },
});
