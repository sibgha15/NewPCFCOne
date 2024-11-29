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
    paddingBottom: hp(2),
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
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
  },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardIconWrapper: {
    width: 45,
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#177DB71A',
  },
  cardText: {
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.medium,
    color: colors.primaryBlack,
  },
});
