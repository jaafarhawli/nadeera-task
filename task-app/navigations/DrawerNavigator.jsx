import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/Complex/CustomDrawer';
import { Dashboard } from '../screens';
import AuthNavigator from './AuthNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {

  return (
    <Drawer.Navigator 
        screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: 'black',
            headerTitleStyle: {
                color: 'black'
            },
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name='Dashboard' component={Dashboard} />
        <Drawer.Screen name='Login' component={AuthNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;