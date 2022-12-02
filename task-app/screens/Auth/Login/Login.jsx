import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './LoginStyles'
import { images } from '../../../constants'
import AppText from '../../../components/Reusable/AppText'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler'

const Login = () => {
  return (
    <View style={styles.container}>
        <Image source={images.logo} style={styles.image} />
        <AppText h1 style={styles.header}>Welcome!</AppText>
        <TouchableOpacity activeOpacity={0.6}>
            <FontAwesome.Button name="facebook" backgroundColor="#3b5998" style={styles.button}>
                <AppText style={styles.buttonText}>Login with Facebook</AppText>
            </FontAwesome.Button>
        </TouchableOpacity>
        <Image source={images.waves} style={styles.waves} />
    </View>
  )
}

export default Login