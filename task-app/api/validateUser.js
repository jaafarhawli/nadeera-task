import axios from "./axios/axios";
import * as SecureStore from 'expo-secure-store';

// This api call is used to validate the stored token when the user opens the app
export const validate = async () => {

    const token = await SecureStore.getItemAsync('token');
    const id = await SecureStore.getItemAsync('id');
    const form = {
    id: id
  }
  try { 
    const user = await axios.post('valid', form, {
        headers: {
            Authorization: `bearer ${token}`
        }
    });
    if(user.data.token)
    return true;
    else
    return false
  } catch(error) {
    console.log(error)
    return false;
  }
}