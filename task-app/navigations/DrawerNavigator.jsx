import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../constants';
import { Dashboard } from '../screens';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {

  return (
    <Drawer.Navigator 
        screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: colors.white,
            headerTitleStyle: {
                color: colors.white
            },
            headerStyle: {
                backgroundColor: colors.black[200],
                elevation: 0,
                shadowOpacity: 0,
        },
      }}>
        <Drawer.Screen name='Home' component={Dashboard} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;