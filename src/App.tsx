/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Axios from 'axios';

const Stack = createStackNavigator();

function HomeScreen(props: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Setting"
        onPress={() => {
          props.navigation.navigate('SettingScreen');
        }}
      />
    </View>
  );
}

function SettingScreen(props: any) {
  React.useEffect(() => {
    Axios.get('https://api.themoviedb.org/3/movie/')
      .then((response) => {
        Alert.alert('Success');
      })
      .catch((err) => {
        Alert.alert('Error');
      });
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Screen</Text>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
}

const App = () => {
  return (
    // <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
