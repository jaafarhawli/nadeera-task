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
        marginTop: 40,
        marginBottom: 20
    },
    button: {
        backgroundColor: colors.blue,
        width: 250,
        height: 50,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    waves: {
        width: '100%',
        position: 'absolute',
        bottom: 0
    }
  });