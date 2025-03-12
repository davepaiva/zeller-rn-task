import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Config from 'react-native-config';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import CustomerListScreen from '@screens/CustomerListScreen.tsx';

const client = new ApolloClient({
  uri: `${Config.BASE_URL}/graphql`,
  cache: new InMemoryCache(),
});

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <CustomerListScreen />
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
