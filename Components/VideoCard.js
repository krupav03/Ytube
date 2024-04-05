import React, { Component, useState } from 'react'
import { Image, Text, View,Dimensions } from 'react-native'
import * as Icon from "react-native-feather";
const {width, height} = Dimensions.get('window');
export default function VideoCard ({video,videoDetails,thumbNail}) {
  const [views,setViews] = useState(videoDetails.viewCount)
 

  /*: This line declares a function named abbreviateNumber that takes a number (number) as input.

    const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];: 
    This line declares an array named SI_SYMBOL which holds the suffixes for the abbreviated numbers. For example, "k" for thousands, "M" for millions, and so on.
    
    const tier = Math.log10(Math.abs(number)) / 3 | 0;
    This line calculates the tier of the number. It calculates the logarithm (base 10) of the absolute value of the input number, divides it by 3 (since each tier corresponds to a factor of 1000), and then takes the integer part using the bitwise OR operator (| 0).
    
    if (tier == 0) return number;
     If the tier is 0 (meaning the number is less than 1000), it returns the original number without any abbreviation.
    
    const suffix = SI_SYMBOL[tier];
    This line gets the appropriate suffix from the SI_SYMBOL array based on the calculated tier.
    
    const scale = Math.pow(10, tier * 3);
    This line calculates the scale factor for the number based on the tier. For example, if the tier is 1, it means the number is in thousands, so the scale would be 1000.
    
    const scaled = number / scale;
    This line scales down the original number by dividing it by the calculated scale.
    
    return scaled.toFixed(1) + suffix;
    This line formats the scaled number with one decimal place using toFixed(1), and appends the appropriate suffix. Finally, it returns the formatted string.
    
    Example usage is provided at the bottom, where we call the abbreviateNumber() function with a number (views), and store the result in formattedViews. Then, we log the result to the console.
    
    This function can be used to format large numbers, such as views or likes on YouTube, into a more readable format, making it easier for users to understand the magnitude of the number.*/
  
    function abbreviateNumber(number) {
    const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

    // what tier? (determines SI symbol)
    const tier = Math.log10(Math.abs(number)) / 3 | 0;

    // if zero, we don't need a suffix
    if (tier == 0) return number;

    // get suffix and determine scale
    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);

    // scale the number
    const scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
}

// Example usage:
const formattedViews = abbreviateNumber(views);
    return (
      <View style={{position:'relative',top:height/40}}>
       <Image source={{uri:video.url}} style={{height:height/4,width:height/2,marginBottom:height/70}} />
       <View style={{position:'absolute',left:height/2.5,top:height/4.5,alignItems:'flex-end', marginBottom:height/50}}>
        <View style={{backgroundColor:'#000',borderRadius:5,paddingHorizontal:8}}>
        <Text style={{color:'#fff',fontWeight:'500',fontSize:height/80}}> {videoDetails.lengthText}</Text>
        </View>
       </View>

       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:height/60,marginHorizontal:height/50}}>
        <Image  source={{uri:thumbNail.url}} style={{height:height/25,width:width/10,borderRadius:40}}/>
        <View style={{flex:1}}>
        <Text style={{color:'#fff',fontSize:height/60,marginLeft:height/60,fontWeight:'700'}}>{videoDetails.title}</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'#BAC4C8',fontSize:height/70,marginLeft:height/60,marginRight:height/90,marginTop:height/90}}>{videoDetails.channelTitle} </Text>
        <View style={{width: 6,height: 6,borderRadius: 3,backgroundColor: '#666',alignSelf:'center',marginTop:height/90}}/>
        <Text style={{color:'#BAC4C8',fontSize:height/70,marginLeft:height/90,marginRight:height/90,marginTop:height/90}}>{formattedViews} views</Text>
        <View style={{width: 6,height: 6,borderRadius: 3,backgroundColor: '#666',alignSelf:'center',marginTop:height/90}}/>
        <Text style={{color:'#BAC4C8',fontSize:height/70,marginLeft:height/90,marginTop:height/90}}>{videoDetails.channelTitle}</Text>
        </View>
        
        </View>

        <View style={{alignSelf:'flex-start'}}>
        <Icon.MoreVertical stroke={'white'} strokeWidth={2} height="15" />
        </View>
       </View>
      </View>
    )
}

