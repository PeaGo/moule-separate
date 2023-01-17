/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import App_, { multiply } from 'module-separate';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return <App_ />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
