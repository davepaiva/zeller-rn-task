import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Config from 'react-native-config';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: `${Config.BASE_URL}/graphql`,
  cache: new InMemoryCache(),
});

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello World!</Text>
        <Text style={styles.text}>{Config.BASE_URL}</Text>
      </View>
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
