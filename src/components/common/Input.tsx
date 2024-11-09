import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import {CloseEye, OpenEye} from '../../../res/assets/images/svgs';
import {colors, fonts} from '../../../res/themes';

interface CustomInputProps extends TextInputProps {
  label?: string;
  errorMessage?: string;
  containerStyle?: object;
  inputStyle?: object;
  isPassword?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  errorMessage,
  containerStyle,
  inputStyle,
  isPassword = false,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[styles.inputContainer, errorMessage && {borderColor: 'red'}]}>
        <TextInput
          style={[styles.input, inputStyle]}
          secureTextEntry={isPassword && !isPasswordVisible}
          onFocus={props.onFocus} // Call onFocus when input is focused
          {...props}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.iconContainer}>
            {isPasswordVisible ? <OpenEye /> : <CloseEye />}
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: fonts.fontFamily.medium,
    color: colors.black,
    paddingBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    height: 52,
    padding: 12,
    fontSize: fonts.fontSize.large,
  },
  iconContainer: {
    padding: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default CustomInput;
