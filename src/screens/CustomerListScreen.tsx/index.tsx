import React, {useMemo, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import useListZellerCustomers from '@hooks/useListZellerCustomers';
import Text from '@components/Text';
import RadioButtons, {RadioButtonOption} from '@components/RadioButton';
import {globalStyles} from '@styles/globalStyles';
import CustomerListItem from './components/CustomerListItem';
import ListHeaderComponent from './components/ListHeader';
import Divider from '@components/Divider';
import {FilterId} from '@app_types/filter';
import {Customer} from '@app_types/customer';
import Search from '@components/Search';
const ItemSeparator = () => <View style={styles.separator} />;

const CustomerListScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterId>('0');
  const [searchTerm, setSearchTerm] = useState('');
  const {data, loading, error} = useListZellerCustomers(
    selectedFilter === '0' ? 'Admin' : 'Manager',
    searchTerm,
  );

  const FILTERS: RadioButtonOption[] = useMemo(
    () => [
      {
        id: '0',
        label: 'Admin',
        value: 'admin',
        isSelected: selectedFilter === '0',
      },
      {
        id: '1',
        label: 'Manager',
        value: 'manager',
        isSelected: selectedFilter === '1',
      },
    ],
    [selectedFilter],
  );

  const handleFilterChange = (selectedId: string) => {
    setSelectedFilter(selectedId as FilterId);
  };

  const renderItem = ({item}: {item: Customer}) => (
    <CustomerListItem name={item.name} role={item.role} />
  );

  const renderListHeader = () => (
    <ListHeaderComponent selectedFilter={selectedFilter} />
  );

  const customers = (data?.listZellerCustomers?.items || [])
    .filter(Boolean)
    .map((item: Customer) => ({
      id: item?.id || '',
      name: item?.name || '',
      role: item?.role || '',
    }));

  const renderContent = () => {
    switch (true) {
      case !!error:
        return (
          <View testID="error" style={[styles.container, globalStyles.center]}>
            <Text>Error: {error.message || 'Something went wrong'}</Text>
          </View>
        );
      case !loading && !error:
        return (
          <FlatList
            testID="customer-list"
            ListHeaderComponent={renderListHeader}
            data={customers}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={item => item.id}
          />
        );
      case loading:
      default:
        return (
          <View
            testID="loading"
            style={[styles.container, globalStyles.center]}>
            <Text>Loading...</Text>
          </View>
        );
    }
  };

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <View style={styles.container}>
      <Search
        value={searchTerm}
        onChange={handleSearch}
        handleClear={handleClear}
      />
      <Divider />
      <Text variant="heading">User Types</Text>
      <View>
        <RadioButtons
          options={FILTERS}
          onSelect={handleFilterChange}
          selectedId={selectedFilter}
          containerStyle={styles.radioButtons}
        />
      </View>

      <Divider />
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: '100%',
  },
  radioButtons: {
    marginTop: 16,
    width: '100%',
    alignItems: 'flex-start',
  },
  separator: {
    height: 10,
  },
});

export default CustomerListScreen;
