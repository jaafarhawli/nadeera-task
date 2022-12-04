import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/Complex/CustomDrawer';
import { Dashboard, Login, Register } from '../screens';

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
        <Drawer.Screen name='Home' component={Dashboard} />
        <Drawer.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Drawer.Screen name='Register' component={Register} options={{headerShown: false}}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;