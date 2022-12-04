import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../constants';
import { Dashboard } from '../screens';

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
      }}>
        <Drawer.Screen name='Home' component={Dashboard} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;