import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(35),
    backgroundColor: '#1881BB',
  },
  text: {
    fontSize: 24,
    color: '#000000',
  },
});
