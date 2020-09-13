import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements'

const sourceImage = {
  uri:
    'https://images.pexels.com/photos/952476/pexels-photo-952476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
}

const Home = () => {
  return (
    <View style={styles.root}>
      <ImageBackground source={sourceImage} style={styles.image}>
        <Text style={styles.h1}>My Season</Text>
        <Input
          placeholder="Chercher un fruit ou un légume"
          inputContainerStyle={styles.input}
          containerStyle={styles.inputContainer}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    color: '#ffffff',
    fontSize: 40
  },
  inputContainer: {
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 30
  },
  input: {
    color: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home
