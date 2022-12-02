import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: '40%',
    },
    
    image: {
        width: 300,
        height: 150
    },

    header: {
        color: colors.secondary,
        marginTop: 40
    }
  });