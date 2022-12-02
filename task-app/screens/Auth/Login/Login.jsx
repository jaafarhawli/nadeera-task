import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './LoginStyles'
import { images } from '../../../constants'
import AppText from '../../../components/AppText'

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.image} />
      <AppText h1 style={styles.header}>Welcome!</AppText>
    </View>
  )
}

export default Login