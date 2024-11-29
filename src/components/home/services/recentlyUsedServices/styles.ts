import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../../../../res/themes';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#F5F7FC',
    paddingHorizontal: hp(2),
    paddingVertical: hp(3),
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: fonts.fontSize.xl,
    fontFamily: fonts.fontFamily.medium,
  },
  serviceCardContainer: {
    paddingVertical: hp(1),
  },
  serviceCard: {
    marginTop: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(1),
    paddingHorizontal: hp(2),
    borderRadius: 12,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: hp(1),
    alignItems: 'center',
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceName: {
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.medium,
    color: '#1A1A1A',
  },
});
