import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';

interface ProfilePlaceholderProps {
  name: string;
  size?: number;
  backgroundColor?: string;
}

const ProfilePlaceholder: React.FC<ProfilePlaceholderProps> = ({name}) => {
  const getInitials = (name: string): string => {
    const parts = name.split('');
    return parts[0];
  };

  return (
    <View style={[styles.container]}>
      <Text color="#428BCA">{getInitials(name)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(66, 139, 202, 0.2)',
  },
});

export default ProfilePlaceholder;
