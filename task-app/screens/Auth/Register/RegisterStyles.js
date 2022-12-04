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
      backgroundColor: 'white',
      marginBottom: 21
    },
    birthdayButtonText: {
      color: colors.secondary
    },
    profile: {
      width: 200, 
      height: 200,
      borderRadius: 200,
      marginBottom: 20
    },
    profileContainer: {
      width: 200, 
      height: 200,
      borderRadius: 200,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    registerButton: {
      width: '100%'
    },
    none: {
      display: 'none'
    }
  });