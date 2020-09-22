import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { DATA } from '../data'
import { Post } from '../components/Post'

export const MainScreen = ({ navigation }) => {
  const goToPost = () => {
    navigation.navigate('Post')
  }

  return (
    <View style={styles.wrapper}>
      <Text>Проверка</Text>
      <Button onPress={goToPost} title="toPost">На Пост</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})
