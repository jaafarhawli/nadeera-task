import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import * as SecureStore from 'expo-secure-store';
import { colors } from '../../constants';
import AppText from '../Reusable/AppText';
import { images } from '../../constants';
import AppButton from '../Reusable/AppButton';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {

    const navigation = useNavigation();

    const [picture, setPicture] = useState();
    const [userName, setUserName] = useState();
    const [date, setDate] = useState();
    
    const getData = async () => {
        const pic = await SecureStore.getItemAsync('picture');
        const name = await SecureStore.getItemAsync('name');
        const birthday = await SecureStore.getItemAsync('birthday');
        setPicture(pic);
        setUserName(name);
        setDate(birthday.split(" ")[0]);
    }

    const signOut = async () => {
        SecureStore.deleteItemAsync('token').then(
            navigation.replace('Login')
        );
    }

    useEffect(() => {
      getData();
    }, []);

  return (
    <View style={{flex: 1}}>
        <DrawerContentScrollView
            {...props}
            >
            <View style={{backgroundColor: colors.secondary, paddingLeft:20, paddingTop: 60}}>
            <Image
            source={{uri: picture}}
            style={{height: 100, width: 100, borderRadius: 50, marginBottom: 10}}
            />
            <AppText h3 style={styles.name}>{userName}</AppText>
            <AppText h4 style={styles.name}>{date}</AppText>
            </View>
            <Image source={images.flippedWaves} style={styles.waves} />
        </DrawerContentScrollView>
        <AppButton style={styles.logoutButton} onPress={signOut}>Sign Out</AppButton>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    name: {
        color: 'white',
        fontWeight: 'bold'
    },
    logoutButton: {
        position: 'absolute', 
        bottom: 20,
        width: '90%',
        alignSelf: 'center'
    }
  })