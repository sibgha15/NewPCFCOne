import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    paddingTop: hp(2),
    paddingHorizontal: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  weatherContainer: {
    flexDirection: 'row',
    backgroundColor: '#0000001A',
    alignItems: 'center',
    paddingVertical: hp(1.2),
    paddingHorizontal: hp(1),
    borderRadius: 25,
    width: hp(20),
    gap: hp(0.5),
  },

  temperatureText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },

  weatherText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
    marginLeft: wp(1),
    textAlign: 'center',
  },

  prayerTimeText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },

  prayerText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
    marginLeft: wp(1),
    textAlign: 'center',
  },
});
