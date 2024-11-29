import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fonts} from '../../../res/themes';

interface RoundedButtonProps {
  title: string;
  onPress?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  loadingColor?: string;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  title,
  onPress,
  isLoading = false,
  disabled = false,
  buttonStyle,
  textStyle,
  loadingColor = '#fff',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || isLoading}>
      <LinearGradient
        colors={
          disabled
            ? [colors.lightGrey, colors.lightGrey]
            : [colors.skyblue, colors.darkBlue]
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.gradient, buttonStyle]}>
        {isLoading ? (
          <ActivityIndicator color={loadingColor} />
        ) : (
          <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 60,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.fontSize.xl,
    fontFamily: fonts.fontFamily.medium,
  },
});

export default RoundedButton;
