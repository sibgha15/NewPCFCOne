import React, {cloneElement} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Check, UnCheck} from '../../../res/assets/images/svgs';
import {Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../res/themes';

interface CheckboxItemProps {
  label: string;
  isChecked: boolean;
  onPress: () => void;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({
  label,
  isChecked,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
      {isChecked ? (
        <View
          style={{
            backgroundColor: colors.primary,
            width: 16,
            height: 16,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 2,
          }}>
          <Check />
        </View>
      ) : (
        <UnCheck />
      )}
      <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1),
    gap: wp(2),
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: fonts.fontSize.large,
    color: colors.primaryBlack,
    fontFamily: fonts.fontFamily.primary,
  },
});

export default CheckboxItem;
