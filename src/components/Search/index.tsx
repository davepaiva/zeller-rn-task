import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Pressable,
} from 'react-native';
import Text from '@components/Text';

interface SearchProps {
  placeholder?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  value: string;
  onChange: (text: string) => void;
  handleClear: () => void;
}

const Search: React.FC<SearchProps> = ({
  placeholder = 'Search...',
  style,
  inputStyle,
  value,
  onChange,
  handleClear,
}) => {
  const handleSearch = (text: string) => {
    onChange?.(text);
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={handleSearch}
        placeholder={placeholder}
        style={[styles.input, inputStyle]}
        placeholderTextColor="#999"
        testID="search-input"
        keyboardType="web-search"
      />
      <Pressable testID="clear-button" onPress={handleClear}>
        <Text>Clear</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  input: {
    width: '80%',
    padding: 8,
    fontSize: 14,
  },
});

export default Search;
