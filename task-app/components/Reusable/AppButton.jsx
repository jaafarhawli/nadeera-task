import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../constants'
import AppText from './AppText'

const AppButton = (props) => {
  return (
    <TouchableOpacity style={props.disabled? [styles.disabledButton, props.style] : [styles.button, props.style]} activeOpacity={0.6} onPress={props.onPress}>
        <AppText style={[styles.text, props.textStyle]}>{props.children}</AppText>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
    },
    text: {
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    disabledButton: {
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
    }
  })