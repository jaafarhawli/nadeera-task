import axios from "./axios/axios";
import * as SecureStore from 'expo-secure-store';

export const register = async (formData, userName, formattedDate, id, navigation) => {
    try { 
        const data = await axios.post('register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        await SecureStore.setItemAsync('token',data.data.authorization.token);
        await SecureStore.setItemAsync('name',userName);
        await SecureStore.setItemAsync('birthday',formattedDate);
        await SecureStore.setItemAsync('picture',data.data.data.profile_picture);
        await SecureStore.setItemAsync('id', id);
        navigation.navigate('Home');
      }
      catch(error) {
        console.log(error);
      }
}