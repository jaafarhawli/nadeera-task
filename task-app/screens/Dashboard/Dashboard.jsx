import { View, ScrollView } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import * as SecureStore from 'expo-secure-store';
import axios from '../../api/axios/axios';
import { styles } from './DashboardStyles';
import AppText from '../../components/Reusable/AppText';
import Task from '../../components/Reusable/Task';

const Dashboard = () => {
    
    const {data} = useQuery(["todoList"], async () => {
        const token = await SecureStore.getItemAsync('token');
        return axios.get('', {
            headers: {
                Authorization: `bearer ${token}`
        }}).then((res) => res.data.data);
    })

  return (
    <ScrollView style={styles.container}>
      <AppText h3 style={styles.header}>Todo List</AppText>
      {data?.map((task, index) => (
        <Task key={index} image={task.image} name={task.name} description={task.description} date={task.date.split(" ")[0]} />
     ))}
    </ScrollView>
  )
}

export default Dashboard