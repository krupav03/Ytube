import React, { Component,useEffect,useState } from 'react'
import { Text, View,Image,SafeAreaView,Dimensions, TouchableOpacity } from 'react-native'
import { themeColors } from '../Theme'
import * as Icon from "react-native-feather";
import { ScrollView } from 'react-native-gesture-handler';
import { categories, shortVideos, videos } from '../Constants';
import ShortVideoCard from '../Components/ShortVideoCard';
import VideoCard from '../Components/VideoCard';
import { fetchTrendingVideos } from '../API/YoutubeApi';
import DeviceInfo from 'react-native-device-info'
const isTablet = DeviceInfo.isTablet();

const {width, height} = Dimensions.get('window');
export default function HomeScreen ({ navigation }){
    const [activeCategory, setActiveCategory] = useState('All')
    const [videos,setVideos] =useState([])

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetchTrendingVideos()
        setVideos(data)
    }
    return (
    <View style={{backgroundColor:themeColors.bg,flex:1}} >
        {/* logo and profile icon */}
        <SafeAreaView style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:4,marginTop:8}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../assets/icons/youtubeIcon.jpg')} style={{height:height/24,width:width/8,marginTop:3}}/>
            <Text style={{color:'#fff', fontWeight:'500',fontSize:height/32,alignSelf:'center'}}>Youtube</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Icon.Cast stroke="white" strokewidth={1.2} height="22" style={{marginLeft:height/90}}/>
            <Icon.Bell stroke="white" strokewidth={1.2} height="22" style={{marginLeft:height/90}}/>
            <Icon.Search stroke="white" strokewidth={1.2} height="22" style={{marginLeft:height/90}}/>
            <Image source={require('../assets/icons/google.jpg')} style={{height:height/25,width:width/10,borderRadius:40,marginTop:3,borderRadius:22,marginLeft:height/50}}/>
        </View>
        </SafeAreaView>
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
        {/* categories */}


    <View style={{paddingVertical:height/30, paddingBottom:height/60}}>
        <ScrollView style={{paddingHorizontal:height/70}} horizontal showsVerticalScrollIndicator={false}>
        {
            categories.map((category,index) => {
                let isActive = (category == activeCategory)
                let textColor = isActive ? '#000' : '#fff'
                return (
                    <TouchableOpacity onPress={() =>{ 
                        setActiveCategory(category)
                        
                    }} 
                        key={index} style={{backgroundColor: isActive ? '#fff' :'rgba(255,255,255,0.1)',paddingHorizontal:height/70, marginRight:height/80,borderRadius:8, paddingVertical:height/90 }}>
                        <Text style={{color:textColor}}>{category}</Text>
                    </TouchableOpacity>
                )
            })
        }
        </ScrollView>
        </View> 

        {/* suggested videos */}
        {/* <VideoCard video={videos[4]} /> */}


      {/* short videos */}
      <View style={{marginTop:height/80,paddingVertical:height/80}}>
        <View style={{height:1,backgroundColor:'#fff'}}/>
        <View style={{marginHorizontal:height/80,flexDirection:'row',alignItems:'center',marginTop:height/50,marginBottom:height/50}}>
            <Image source={require('../assets/icons/shortsIcon.jpg')} style={{height:height/40,width:width/20}}/>
            <Text style={{color:'#fff', fontWeight:'500',fontSize:height/52,alignSelf:'center', marginLeft:8}}>Shorts</Text>
        </View>
     
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:height/70}}>
        {
            shortVideos.map((item,index) => <ShortVideoCard item={item} key={index}/>)
        }
        </ScrollView>
        <View style={{height:1,backgroundColor:'#fff'}}/>
      </View>

      {/* videos */}
   {activeCategory &&  <ScrollView showsVerticalScrollIndicator={false} style={{paddingVertical:height/70}}>
        {
            videos.map((video,index) => <VideoCard video={video.authorThumbnail[0]} key={index} videoDetails={video} thumbNail={video.thumbnail[0]}/>)
        }
      </ScrollView>}

    

        </ScrollView>
    </View>
    )
}
