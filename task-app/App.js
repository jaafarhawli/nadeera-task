import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigations/AuthNavigator';
import DrawerNavigator from './navigations/DrawerNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export default function App() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}