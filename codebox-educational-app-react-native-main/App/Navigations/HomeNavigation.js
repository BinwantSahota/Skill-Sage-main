import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CourseChapter from '../Pages/CourseChapter';
import CourseDetails from '../Pages/CourseDetails';
import Home from '../Pages/Home';
import PlayVideo from '../Pages/PlayVideo';

const Stack = createNativeStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="home" component={Home} ></Stack.Screen>
        <Stack.Screen name="course-detail" component={CourseDetails} ></Stack.Screen>
        <Stack.Screen name="course-chapter"
        component={CourseChapter}/>
         <Stack.Screen name="play-video"
        component={PlayVideo}/>
    </Stack.Navigator>
  )
}