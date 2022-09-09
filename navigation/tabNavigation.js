import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/feed';
import StoryScreen from '../screens/createStory';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName
                if (route.name === 'HomeScreen'){
                    iconName: focused
                    ? 'book'
                    : 'book-outline'
                }
                else if (route.name === 'StoryScreen'){
                    iconName: focused
                    ? 'add-circle-outline'
                    : 'add-circle'
                }
                return(
                    <Ionicons name={iconName} size={size} color={color} />
                )
            }, 
        })}
            tabBarOptions = {{
                activeTintColor: 'red',
                inactiveTintColor: 'salmon'
            }}
        >
        <Tab.Screen name='HomeScreen' component={HomeScreen} />

        <Tab.Screen name='StoryScreen' component={StoryScreen} />

        </Tab.Navigator>
    );
}
//export default BottomTabNavigator