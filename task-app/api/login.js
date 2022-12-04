import axios from "./axios/axios";
import * as SecureStore from 'expo-secure-store';

export const login = async (id, picture, data, navigation, setLoading) => {
    const form = {
        id: id
      }
      try { 
      const login = await axios.post('login', form);
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
        navigation.navigate('Home');
      }
      } catch(error) {
        console.log(error)
      }
} 