import { View, Image } from 'react-native'
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
import { login } from '../../../api/login'
import Loader from '../../../components/Reusable/Loader'

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
      login(data.data.id, picture, data, navigation, setLoading);
    }
    setLoading(false);
  })

  return (
    <>
    {loading ?
    <Loader />
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