import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '@components/Text';
import ProfilePlaceholder from '@components/ProfilePlaceholder';
import {globalStyles} from '@styles/globalStyles';

interface CustomerListItemProps {
  name?: string;
  role?: string;
}

const CustomerListItem: React.FC<CustomerListItemProps> = ({
  name = '',
  role = '',
}) => {
  return (
    <View
      style={[globalStyles.row, globalStyles.alignCenter, styles.container]}>
      <View>
        <ProfilePlaceholder name={name} />
      </View>
      <View style={[globalStyles.spaceBetween]}>
        <Text variant="body">{name}</Text>
        <Text variant="subtitle" color="#666">
          {role}
        </Text>
      </View>
    </View>
  );
};

export default CustomerListItem;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
