import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import * as SecureStore from 'expo-secure-store';
import axios from '../../api/axios/axios';

const Dashboard = () => {
    
    const {data} = useQuery([], async () => {
        const token = await SecureStore.getItemAsync('token');
        return axios.get('', {
            headers: {
                Authorization: `bearer ${token}`
        }}).then((res) => res.data.data);
    })

    console.log(data);

  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}

export default Dashboard