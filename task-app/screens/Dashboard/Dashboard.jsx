import { View, Text, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import * as SecureStore from 'expo-secure-store';
import { styles } from './DashboardStyles';

const Dashboard = () => {
    const [picture, setPicture] = useState();
    const getImage = async () => {
        const pic = await SecureStore.getItemAsync('picture');
        setPicture(pic);
    }

    useEffect(() => {
      getImage();
    }, []);

  return (
    <View>
      <Text>Dashboard</Text>
      <Image source={{uri: picture}} style={styles.profile} />
    </View>
  )
}

export default Dashboard