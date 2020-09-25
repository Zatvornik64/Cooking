import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native'
import { THEME } from '../theme'
import { HeaderIcons } from '../components/HeaderIcons'

export const RecipeScreen = ({ navigation, route }) => {
  const recipe = route.params.recipe; 

  navigation.setOptions({
    headerRight: () => ( <HeaderIcons navigation={navigation} /> ),
  });

  const toMainHandler = () => {
    navigation.navigate('Main')
  }
  const removeHandler = () => {}

  return (
    <ScrollView>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{recipe.title}</Text>
      </View>
      <Image source={{ uri: recipe.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>Состав</Text>
        <Text style={styles.text}>{recipe.components}</Text>
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.title}>Рецепт</Text>
        <Text style={styles.text}>{recipe.cooking}</Text>
      </View>
      <View style={styles.buttons}>
      <Button
        title='Назад'
        color={THEME.MAIN_COLOR}
        onPress={toMainHandler}
      />
      </View>
      <View style={styles.buttons}> 
      <Button
        title='Удалить'
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
      </View>
    </ScrollView> 
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: "100%",
    height: 300
  },
  textWrap: {
    padding: 10
  }, 
  title: {
    fontSize: 20
  },
  text: {
    fontSize: 16
  },
  buttons: {
    marginBottom: 10
  }
})
