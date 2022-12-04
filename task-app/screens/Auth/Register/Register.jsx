import { View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import { styles } from './RegisterStyles'
import Input from '../../../components/Reusable/Input'
import DateTimePicker from '@react-native-community/datetimepicker';
import AppButton from '../../../components/Reusable/AppButton';
import * as ImagePicker from 'expo-image-picker';
import axios from '../../../api/axios/axios';
import AppText from '../../../components/Reusable/AppText';
import * as SecureStore from 'expo-secure-store';
import { colors } from '../../../constants'
import { useNavigation } from '@react-navigation/native';

const Register = ({route}) => {

  const navigation = useNavigation();

  const {id, name, birthday, picture} = route.params;
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(birthday? new Date(birthday): '');
  const [image, setImage] = useState(picture? picture: '');
  const [userName, setUserName] = useState(name? name: '');
  const [imageChanged, setImageChanged] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(true);

  // Set the date to the new selected one
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  // Open the date picker
  const showDatepicker = () => {
    if (Platform.OS === 'android') {
      setShow(true);
    }
  };

  // Open the image picker 
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImageChanged(true);
  }
  };

  const register = async () => {
    // Convert date to send it to the server
    let formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    const formData = new FormData();
    // If the user has chosen a new image
    // Get the file name and file type from the uri
    if(imageChanged) {
    const fileName = image.split('/').pop();
    const fileType = fileName.split('.').pop();
      formData.append('image', {
        uri: image,
        type: `image/${fileType}`,
        name: fileName
    });}
    // Otherwise upload the facebook profile image
    else {
      formData.append('image', {
        uri: image,
        type: `image/jpeg`,
        name: id + '.jpg'
    });
    }
    formData.append('id', id);
    formData.append('name', userName);
    formData.append('date_of_birth', formattedDate);
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

  useEffect(() => {
    if(date === '' || image==='' || userName==='')
    setDisabled(true);
    else
    setDisabled(false)
  }, [date, image, userName, loading]);

  return (
    <View style={styles.container}>
      <AppText h1 style={styles.header}>Register Account</AppText>
      <TouchableOpacity  activeOpacity={0.6} onPress={pickImage} style={styles.profileContainer}>
        <ActivityIndicator size="large" color={colors.primary} style={!loading? styles.none : null} />
        <Image source={{uri: image}} style={loading? styles.none : styles.profile} onLoadEnd={() => setLoading(false)} />
      </TouchableOpacity>
      <View style={styles.nameInput}>
        <AppText style={styles.nameLabel}>Name</AppText>
        <Input defaultValue={name} onChange={newText => setUserName(newText)} />
      </View>
      <AppButton style={styles.birthdayButton} textStyle={styles.birthdayButtonText} onPress={showDatepicker}>Select Birthday Date</AppButton>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <AppButton style={styles.registerButton} disabled={disabled} onPress={!disabled? register : null} >Register</AppButton>
    </View>
  )
}

export default Register