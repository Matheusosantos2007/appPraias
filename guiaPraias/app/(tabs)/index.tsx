import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, SafeAreaView} from 'react-navive';

const CategoryCard = ({backgroundColor, title, titleColor ='#FFF'}) =>
(
    <TouchableOpacity style={[styles.card, {backgroundColor}]}>
      <Text style={[styles.cardText, {color: titleColor}]}>
    <TouchableOpacity>
);

export default function Home() {
    return(
        <SafeAreaView style={StyleSheet.container}>
            <StatusBar barstyle="dark-content"/>
            <Image
            source={require('../assets/praias.jpg')}
            style={styles.headerImage} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    headerImage:{
        width: '100%',
        height: 250,
        reslizeMode: 'cover'

    },
    titleContainer:{
        marginVertical: 24,
        allignItems: 'center',
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1e63ff',
    },
    subTitle: {
        fontSize: 16,
        color: '#48d6d2',
        marginTop: 4,
    },
    grid: {
        width: '90%',
        
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    card:{
        width: '48%',
        height: 120,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems:'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
        shadowOpacity: 0.25,
        shadowRadius: 3.85,
        elevation: 5,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});