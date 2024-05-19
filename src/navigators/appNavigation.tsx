import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Livestream from '../screens/livestreamPage';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from '../constants/colors';
import { hightPercentage } from '../screeeDimensions';

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Live'
      screenOptions={{
        
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.black,
          borderTopWidth:1,
          borderColor:Colors.yellow
        },
        tabBarLabelStyle:{
          color: Colors.white,
          fontSize: hightPercentage(1),
          fontFamily: 'Roboto-Medium',
        },
        tabBarActiveTintColor: Colors.yellow,
        tabBarInactiveTintColor: '#999900',
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={Livestream}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Livestream}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="plus"
        component={Livestream}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircleo" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Live"
        component={Livestream}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="playcircleo" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Livestream}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigation;




