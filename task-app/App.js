import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigations/AuthNavigator';
import DrawerNavigator from './navigations/DrawerNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { validate } from './api/validateUser';
import React, {useState, useEffect} from 'react'
import { ActivityIndicator, View } from 'react-native';
import { colors } from './constants';

export default function App() {

  const client = new QueryClient();
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const checkIfValid = async () => {
    const valid = await validate();
    setLoading(false)
    if(isAuth != valid)
    setIsAuth(valid)
  }
  
  useEffect(() => {
    checkIfValid();
  }, [isAuth]);

  return (
      <QueryClientProvider client={client}>
        <NavigationContainer>
          {
          loading ? 
          <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
          :
          isAuth ? 
          <DrawerNavigator />
          :
          <AuthNavigator />
          }
        </NavigationContainer>
      </QueryClientProvider>
  );
}