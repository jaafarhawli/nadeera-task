import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { styles } from './RegisterStyles'
import Input from '../../../components/Reusable/Input'
import DateTimePicker from '@react-native-community/datetimepicker';
import AppButton from '../../../components/Reusable/AppButton';

const Register = ({route}) => {
  const {id, name, birthday, picture} = route.params;
  console.log(id, name, birthday, picture);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(birthday));

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

  return (
    <View style={styles.container}>
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