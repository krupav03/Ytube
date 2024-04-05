import React, { Component } from 'react'
import { Image, Text, View,Dimensions } from 'react-native'
import * as Icon from "react-native-feather";
const {width, height} = Dimensions.get('window');
export default function ShortVideoCard ({item}) {
    return (
      <View style={{position: 'relative',justifyContent:'space-between'}}>
      <Image source={item.image} style={{height: height/3, width: height/5, borderRadius: 10, marginLeft: height/90, marginBottom: height/40}} />
      <View style={{position:'absolute',right:4,top:10}}>
        <Icon.MoreVertical stroke={'white'} strokeWidth={1.4} height="28" />
      </View>
      <View style={{ position:'absolute',top:height/3.5,left:height/60}}>
        <Text style={{color:'#fff', fontWeight: '500', fontSize: height/75}}>{item.title}</Text>
        <Text style={{color:'#fff', fontWeight: 'bold', fontSize: height/80}}>{item.viewCount} views</Text>
      </View>
      
    </View>
    











/* <View style={{position: 'relative'}}>
  <Image source={item.image} style={{height: height/3, width: height/5, borderRadius: 10, marginLeft: height/90, marginBottom: height/20}} />
  <View style={{position: 'absolute', top: 0, right: 0}}>
    <Icon.MoreVertical stroke={'white'} strokeWidth={1.4} height="28" />
  </View>
  <View style={{position: 'absolute', bottom: 5, right: 5, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 5, borderRadius: 10}}>
    <Text style={{color:'#fff', fontWeight: 'bold', fontSize: 8}}>{item.title}</Text>
    <Text style={{color:'#fff', fontWeight: 'bold', fontSize: 8}}>{item.viewCount} views</Text>
  </View>
</View> */




    )
}
