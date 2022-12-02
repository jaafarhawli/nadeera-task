import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './LoginStyles'
import { images } from '../../../constants'
import AppText from '../../../components/Reusable/AppText'
import AppButton from '../../../components/Reusable/AppButton'

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.image} />
      <AppText h1 style={styles.header}>Welcome!</AppText>
      <AppButton style={styles.button}>Login With Facebook</AppButton>
    </View>
  )
}

export default Login