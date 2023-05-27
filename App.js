import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchComponent from './components/SearchComponent';

import RestaurantListComponent from './components/RestaurantListComponent';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  const [restaurants, setRestaurants] = useState([]);

  const handleSearch = (results) => {
    setRestaurants(results);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SFS" component={HomeScreen} />
        <Stack.Screen name="SearchComponent">
          {(props) => (
            <View style={styles.container}>
              <SearchComponent onSearch={handleSearch} {...props} />
              <RestaurantListComponent restaurants={restaurants} />
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 20,
  },
});
