import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './LoginStyles'
import { images } from '../../../constants'

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.image} />
      <Text>login</Text>
    </View>
  )
}

export default Login