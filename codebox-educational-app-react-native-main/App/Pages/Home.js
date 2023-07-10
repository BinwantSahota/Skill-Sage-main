import React, { useContext } from 'react'
import { ScrollView, View } from 'react-native'
import CourseList from '../Components/CourseList'
import SearchBar from '../Components/SearchBar'
import Slider from '../Components/Slider'
import VideoCourseList from '../Components/VideoCourseList'
import WelcomeHeader from '../Components/WelcomeHeader'
import { AuthContext } from '../Context/AuthContext'



export default function Home() {
    const {userData,setUserData}=useContext(AuthContext)
   
  return (
    <ScrollView style={{padding:20}}>
        <WelcomeHeader/>
        <SearchBar/>
        <Slider/>
        <VideoCourseList/>
        <CourseList type={'basic'} />
        <CourseList type={'advance'} />
        <View style={{height:100}}> 
          
        </View>
    </ScrollView> 
  )
}