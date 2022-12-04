import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40,
    },
    header: {
      marginBottom: 40
    },
    nameInput: {
      marginBottom: 20,
      width: '100%'
    },
    nameLabel: {
      textAlign: 'left',
    },
    birthdayButton: {
      width: '100%',
      backgroundColor: 'white'
    },
    birthdayButtonText: {
      color: colors.secondary
    },
    profile: {
      width: 200, 
      height: 200,
      borderRadius: 200,
      marginBottom: 20
    }
  });