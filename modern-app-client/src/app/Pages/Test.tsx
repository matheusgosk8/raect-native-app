import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { FontAwesome5, AntDesign } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query';
import { useReactQueryData } from '../Utils/useReactQueryData';
import LoadingSpinner from '../components/Loading';
import { TAgenda } from '@/types/dataTypes';


const Test = () => {


    const { getData } = useReactQueryData()

    const { data, isLoading, isError } = useQuery({
        queryFn: getData,
        queryKey: ['rqGetData']
    })

    if (data) {
        console.log('Rq data ---> ', data)
    }

    const navigation = useNavigation();

    const goToRoute = (route: string) => {
        switch (route) {
            case 'home':
                return navigation.navigate('Home' as never);
            case 'test':
                return navigation.navigate('Test' as never)
        }
    }


    return (
        <View className='flex-1 justify-center items-center gap-10'>
            <Text className='text-xl font-semibold'>
                Página de testes ...
            </Text>
            <View>
                <Text className='font-semibold text-xl'>
                    Dados da api

                </Text>

                <View>
                    {
                        isLoading ?
                            <LoadingSpinner />
                            :
                            data && data.medicos.map((item: TAgenda, index: number) => (
                                <Text key={index}> Nome do médico: {item.nome}</Text>)
                            )
                    }

                </View>

            </View>

            <View className='flex flex-row gap-2'>
                <View className='shadow-md p-2 rounded-md bg-white'>
                    <Pressable onPress={() => goToRoute('home')}>
                        <AntDesign name='home' size={50} />
                    </Pressable>
                </View>
                <View className='shadow-md p-2 rounded-md bg-white'>
                    <Pressable onPress={() => goToRoute('test')}>
                        <FontAwesome5 name='network-wired' size={50} />
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

export default Test

