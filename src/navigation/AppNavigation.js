import React from 'react'
import { NavigationContainer, ThemeColors } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'
import { View, Text, StyleSheet } from 'react-native'

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
            backgroundColor: '#eee'
        },  }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{ 
          title: 'Рецепт',
          headerStyle: {
            backgroundColor: '#eee'
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

const styles = StyleSheet.create({
      header: {
        backgroundColor: '#eee'
      }
    })
    