import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { THEME } from '../theme'
import { View, StyleSheet, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 

import { MainScreen } from '../screens/MainScreen'
import { RecipeScreen } from '../screens/RecipeScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { AboutScreen } from '../screens/AboutScreen'


const Stack = createStackNavigator()

function RootStack() {

  return (
    <Stack.Navigator
      initialRouteName="Main"
      //screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ 
          title: 'Список рецептов',
          headerStyle: {
            backgroundColor: THEME.HEADER_BACKGROUND
        },  }}
      />
      <Stack.Screen
        name="Recipe"
        component={RecipeScreen}
        options={{ 
          title: 'Рецепт',
          headerStyle: {
            backgroundColor: THEME.HEADER_BACKGROUND
        },  }}
      />
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{ 
          title: 'Создадим новый',
          headerStyle: {
            backgroundColor: THEME.HEADER_BACKGROUND
        },  }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ 
          title: 'О программе',
          headerStyle: {
            backgroundColor: THEME.HEADER_BACKGROUND
        },  }}
      />
    </Stack.Navigator>
  );
}

export const AppNavigation = () => {
    return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    )}


    