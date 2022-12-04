import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppText from './AppText'

const Task = (props) => {
  return (
    <View style={styles.container}>
        <Image source={{uri: props.image}} style={styles.image} />
        <View style={styles.titleContainer}>
          <AppText h4 style={styles.title}>{props.name}</AppText>
          <View style={styles.descriptionContainer} >
            <AppText>{props.description}</AppText>
            <AppText style={styles.date}>{props.date.split(" ")[0]}</AppText>
          </View>
        </View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
    image: {
        width: 70, 
        height: 70, 
        marginRight: 20,
        borderRadius: 10
    },
    container: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 30
    },
    title: {
        fontWeight: 'bold'
    },
    titleContainer: {
        flex: 1
    },
    descriptionContainer: {
        width: '100%',
        flexDirection: 'column'   
    },
    date: {
        alignSelf: 'flex-end'
    }
})