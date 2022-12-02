import { StyleSheet, Text } from 'react-native';
import React from 'react'

const AppText = (props) => {

  return (
    <Text style={
        props.h1 ?
        [ styles.h1, props.style]
        :
        props.h2 ?
        [styles.h2, props.style]  
        :
        props.h3 ? 
        [styles.h3, props.style]
        :
        props.style
    }>{props.children}</Text>
  )
}

export default AppText

const styles = StyleSheet.create({
    h1: {
        fontSize: 35
    },
    h2: {
        fontSize: 28
    },
    h3: {
        fontSize: 22
    }
})