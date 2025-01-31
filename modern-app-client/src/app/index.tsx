import { Link } from "expo-router";
import React, { useState } from "react";
import Home from "@/app/Pages/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test from "./Pages/Test";
import { FontAwesome5, AntDesign } from "react-native-vector-icons";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Medicos from "./Pages/Medicos";


const Tab = createBottomTabNavigator();


export default function Page() {

  const queryClient = new QueryClient()

  return (

    <QueryClientProvider client={queryClient}>

      <Tab.Navigator initialRouteName="Home" id={undefined}>
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: (() => (
              <AntDesign name='home' size={20} />
            ))
          }}
        />
        <Tab.Screen name="Test" component={Test}
          options={{
            tabBarIcon: (() => (
              <FontAwesome5 name='network-wired' size={20} />
            ))
          }}
        />

        <Tab.Screen name="Insert" component={Medicos}
          options={{
            tabBarIcon: (() => (
              <AntDesign name='totop' size={20} />
            ))
          }}
        />

      </Tab.Navigator>
    </QueryClientProvider>

  );
}


