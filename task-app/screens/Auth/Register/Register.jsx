import { View, Text, Image } from 'react-native'
import React, {useState} from 'react'
import { styles } from './RegisterStyles'
import Input from '../../../components/Reusable/Input'
import DateTimePicker from '@react-native-community/datetimepicker';
import AppButton from '../../../components/Reusable/AppButton';
import * as ImagePicker from 'expo-image-picker';
import axios from '../../../api/axios/axios';

const Register = ({route}) => {

  const {id, name, birthday, picture} = route.params;
  console.log(id, name, birthday, picture);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(birthday));
  const [image, setImage] = useState(null);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
    console.log(fDate);
  };

  const showDatepicker = () => {
    if (Platform.OS === 'android') {
      setShow(true);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      DocumentPickerOptions: {
        type: 'image/*'
      },
      DocumentResult: {
        name
      }
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const fileName = result.assets[0].uri.split('/').pop();
      const fileType = fileName.split('.').pop();

      console.log(fileName, fileType);
      const formData = new FormData();
      formData.append('image', {
        uri: result.assets[0].uri,
        type: `image/${fileType}`,
        name: fileName
    });
    formData.append('id', id)
     try { 
      await axios.post('profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    }
    catch(error) {
      console.log(error);
    }
  }
  };

  return (
    <View style={styles.container}>
      <Image source={image?{uri: image} : {uri:picture}} style={styles.profile} />
      <AppButton onPress={pickImage}>Select Your Profile Picture</AppButton>
      <Input placeholder='Name' style={styles.nameInput} />
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
    </View>
  )
}

export default Register