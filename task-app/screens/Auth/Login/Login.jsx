import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './LoginStyles'
import { images } from '../../../constants'
import AppText from '../../../components/Reusable/AppText'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Facebook from 'expo-auth-session/providers/facebook'
import { useMutation } from '@tanstack/react-query'
import axios from '../../../api/axios/axios'
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

const Login = () => {

  const navigation = useNavigation();

  const [ , , fbPromptAsync] = Facebook.useAuthRequest({
    clientId: "519953483484349"
  })

  const facebookRegister = useMutation(async () => {
    const response = await fbPromptAsync();
    if(response.type === 'success') {
      const { access_token } = response.params;
      const data = await axios.get(`https://graph.facebook.com/me?fields=id,name,birthday,picture&access_token=${access_token}`);
      console.log(data.data.id, data.data.birthday);
      const form = {
        id: data.data.id
      }
      try { const login = await axios.post('login', form);
      if(login.data.status === 0) {
      navigation.navigate('Register', {
        id: data.data.id,
        name: data.data.name,
        birthday: data.data.birthday,
        picture: data.data.picture
      });
      } else {
        await SecureStore.setItemAsync('user', {
          token: login.data.token,
          name:login.data.data.name,
          birthday: login.data.data.date_of_birth,
          picture: login.data.data.profile_picture
        });
        navigation.navigate('Dashboard');
      }
      } catch(error) {
        console.log(error)
      }
    }
  })

  return (
    <View style={styles.container}>
        <Image source={images.logo} style={styles.image} />
        <AppText h1 style={styles.header}>Welcome!</AppText>
        <TouchableOpacity activeOpacity={0.6}>
            <FontAwesome.Button name="facebook" backgroundColor="#3b5998" style={styles.button} onPress={() => facebookRegister.mutate()}>
                <AppText style={styles.buttonText}>Login with Facebook</AppText>
            </FontAwesome.Button>
        </TouchableOpacity>
        <Image source={images.waves} style={styles.waves} />
    </View>
  )
}

export default Login