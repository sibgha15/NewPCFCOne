import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import {FilterIcon, SearchIcon} from '../../../../res/assets/images/svgs';
import {colors} from '../../../../res/themes';

interface SearchBarProps {
  onChange?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  editable?: boolean;
}

const SearchBar = ({
  onChange,
  onFocus,
  onBlur,
  editable = true,
}: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    if (onFocus) onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) onBlur();
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.searchBarContainer,
          isFocused && {borderColor: colors.primary, borderWidth: 1},
        ]}>
        <SearchIcon height={24} width={24} style={styles.icon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#808080"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={onChange}
          editable={editable}
        />
        <FilterIcon height={24} width={24} style={styles.icon} />
      </View>
    </View>
  );
};

export default SearchBar;
