import { View, ActivityIndicator, Image } from 'react-native'
import React, {useState} from 'react'
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
import { colors } from '../../../constants'

const Login = () => {

  const navigation = useNavigation();
  
  const [loading, setLoading] = useState(false);

  // Connect to facebook app
  const [ , , fbPromptAsync] = Facebook.useAuthRequest({
    clientId: "519953483484349"
  })

  const facebookRegister = useMutation(async () => {
    setLoading(true);
    // Get the token after logging in
    const response = await fbPromptAsync();
    
    if(response.type === 'success') {
      const { access_token } = response.params;
      // Get the id, name, and birthday from the token
      const data = await axios.get(`https://graph.facebook.com/me?fields=id,name,birthday&access_token=${access_token}`);
      // Get the profile picture
      const picture = `https://graph.facebook.com/${data.data.id}/picture?access_token=${access_token}&height=800&width=800`;
      const form = {
        id: data.data.id
      }
      try { const login = await axios.post('login', form);
      if(login.data.status === 0) {
      navigation.navigate('Register', {
        id: data.data.id,
        name: data.data.name,
        birthday: data.data.birthday,
        picture: picture
      });
      } else {
        await SecureStore.setItemAsync('token',login.data.token);
        await SecureStore.setItemAsync('name',login.data.data.name);
        await SecureStore.setItemAsync('birthday',login.data.data.date_of_birth);
        await SecureStore.setItemAsync('picture',login.data.data.profile_picture);
        await SecureStore.setItemAsync('id',login.data.id);
        setLoading(false);
        navigation.navigate('Home');
      }
      } catch(error) {
        console.log(error)
      }
    }
    setLoading(false);
  })

  return (
    <>
    {loading ?
    <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
     <ActivityIndicator size="large" color={colors.primary} />
    </View>
    :
    <View style={styles.container}>
        <Image source={images.logo} style={styles.image} />
        <AppText h1 style={styles.header}>Welcome!</AppText>
        <TouchableOpacity activeOpacity={0.6}>
            <FontAwesome.Button name="facebook" backgroundColor="#3b5998" style={styles.button} onPress={() => facebookRegister.mutate()}>
                <AppText style={styles.buttonText}>Login with Facebook</AppText>
            </FontAwesome.Button>
        </TouchableOpacity>
        <Image source={images.waves} style={styles.waves} />
    </View>}
    </>
  )
}

export default Login