import {View, StyleSheet} from 'react-native';
import Text from '@components/Text';

interface ListHeaderComponentProps {
  selectedFilter: string;
}

const ListHeaderComponent = ({selectedFilter}: ListHeaderComponentProps) => (
  <View style={styles.container}>
    <Text variant="heading">{`${
      selectedFilter === '0' ? 'Admin' : 'Manager'
    } Users`}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});

export default ListHeaderComponent;
