// src/components/ToggleCard.tsx

import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface ToggleCardProps {
  icon: React.ReactNode;
  label: string;
  isEnabled: boolean;
  onToggle: (value: boolean) => void;
  iconBgColor?: string;
}

const ToggleCard: React.FC<ToggleCardProps> = ({
  icon,
  label,
  isEnabled,
  onToggle,
  iconBgColor = colors.lightGrey,
}) => {
  return (
    <View style={styles.cardItem}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={[styles.iconWrapper, {backgroundColor: iconBgColor}]}>
          {icon}
        </View>
        <Text style={styles.cardItemText}>{label}</Text>
      </View>
      <Switch
        trackColor={{false: colors.background, true: colors.primary}}
        thumbColor={isEnabled ? colors.white : colors.white}
        onValueChange={onToggle}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(1),
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardItemText: {
    color: colors.primaryBlack,
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.primary,
    marginLeft: wp(4),
    letterSpacing: 0.4,
  },
});

export default ToggleCard;
