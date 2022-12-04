import axios from "./axios/axios";
import * as SecureStore from 'expo-secure-store';

export const validate = async () => {

    const token = await SecureStore.getItemAsync('token');
    const id = await SecureStore.getItemAsync('id');
    const form = {
    id: id
  }
  try { 
    const user = await axios.post('login', form, {
        headers: {
            Authorization: `bearer ${token}`
        }
    });
    await SecureStore.setItemAsync('token',user.data.token);
    await SecureStore.setItemAsync('name',user.data.data.name);
    await SecureStore.setItemAsync('birthday',user.data.data.date_of_birth);
    await SecureStore.setItemAsync('picture',user.data.data.profile_picture);
    return 1;

  } catch(error) {
    console.log(error)
    return 0;
  }
}