import React, { Component,useEffect } from 'react'
import { Text, View,Platform } from 'react-native'
import AppNavigator from './Navigation/AppNavigator'
import SplashScreen from 'react-native-splash-screen'

export default function App() {
    useEffect(() => {
        SplashScreen.hide();
    },[])
    return (
     <AppNavigator/>
    )
}
