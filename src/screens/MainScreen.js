import React from 'react'
import { ScrollView,  StyleSheet, FlatList } from 'react-native'
import { DATA } from '../data'
import { Post } from '../components/Post'
import { HeaderIcons } from '../components/HeaderIcons'

export const MainScreen = ({ navigation }) => {

  const onOpen = recipe => {
    navigation.navigate('Recipe', { recipe } ) 
  }

  navigation.setOptions({
    headerRight: () => ( <HeaderIcons navigation={navigation} /> ),
  });

  return (
    <ScrollView style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={recipe => recipe.id.toString()}
        renderItem={({ item }) => <Post recipe={item} onOpen={onOpen} />}
      /> 
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    marginBottom: 10
  },
})
