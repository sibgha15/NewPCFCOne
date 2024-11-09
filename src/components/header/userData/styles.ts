import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    paddingTop: hp(10),
    paddingHorizontal: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userAvatarContainer: {
    flexDirection: 'row',
    gap: wp(3),
    alignItems: 'center',
  },

  infoContainer: {
    flexDirection: 'column',
  },

  name: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    fontFamily: 'Dubai-Bold',
  },

  designation: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
  },

  scanQRContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#0000001A',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0000001A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 1,
  },
});
