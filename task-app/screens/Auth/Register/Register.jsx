import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './RegisterStyles'

const Register = ({route}) => {
  const {id, name, birthday, picture} = route.params;
  console.log(id, name, birthday, picture);
  return (
    <View style={styles.container}>
      <Text>Register</Text>
    </View>
  )
}

export default Register