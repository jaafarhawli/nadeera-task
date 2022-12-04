import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigations/AuthNavigator';
import DrawerNavigator from './navigations/DrawerNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { validate } from './api/validateUser';
import React, {useState, useEffect} from 'react'
import Loader from './components/Reusable/Loader';

export default function App() {

  const client = new QueryClient();

  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Check if the token stored is valid
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
          <Loader />
          :
          // If the stored token is valid, open the dashboard page
          // Else, redirect to the login page
          isAuth ? 
          <DrawerNavigator />
          :
          <AuthNavigator />
          }
        </NavigationContainer>
      </QueryClientProvider>
  );
}