import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40,
    },
    nameInput: {
      marginBottom: 20
    },

    birthdayButton: {
      width: '100%',
      backgroundColor: 'white'
    },
    birthdayButtonText: {
      color: colors.secondary
    }
  });