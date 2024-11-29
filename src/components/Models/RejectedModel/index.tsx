import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../../res/themes';
import {RejectIcon} from '../../../../res/assets/images/svgs';
interface RejectModelProps {
  onClose: () => void;
  title: string;
  message: string;
  buttonText: string;
}

const RejectModel: React.FC<RejectModelProps> = ({
  onClose,
  title,
  message,
  buttonText,
}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.modelContainer}>
        <RejectIcon width={40} height={40} />
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.message}>{message}</Text>
        <TouchableOpacity onPress={onClose} style={Styles.button}>
          <Text style={Styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(100),
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modelContainer: {
    backgroundColor: '#c9c9c9',
    width: wp(70),
    borderRadius: 20,
    paddingVertical: hp(2.5),
    paddingBottom: hp(1.5),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: fonts.fontSize.medium,
    fontFamily: fonts.fontFamily.primary,
    lineHeight: 24,
    paddingTop: hp(2),
    letterSpacing: 0.5,
  },
  message: {
    fontSize: fonts.fontSize.normal,
    color: colors.secondary,
    fontFamily: fonts.fontFamily.primary,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: hp(2),
  },
  button: {
    borderTopWidth: 0.33,
    borderTopColor: '#54545657',
    width: wp(70),
  },
  buttonText: {
    color: colors.dotGrey,
    fontSize: fonts.fontSize.medium,
    fontFamily: fonts.fontFamily.medium,
    lineHeight: 22,
    letterSpacing: 0.1,
    paddingTop: hp(2),
    textAlign: 'center',
  },
});

export default RejectModel;
