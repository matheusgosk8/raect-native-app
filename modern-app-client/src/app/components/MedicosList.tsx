import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useReactQueryData } from '../Utils/useReactQueryData'
import { useQuery } from '@tanstack/react-query';
import { TAgenda } from '@/types/dataTypes';
import LoadingSpinner from './Loading';

export default function MedicosList() {

    const { getMedicosData } = useReactQueryData();

    const { data: medicosData, isLoading } = useQuery({
        queryFn: getMedicosData,
        queryKey: ['rqMedicosData']
    })

    return (
        <View className='max-h-[80%]'>
            <Text className='text-3xl font-semibold ml-5'>Lista de médicos </Text>

            <View className='flex flex-col gap-5 mx-5 p-2 rounded-md  max-h-full min-h-full h-hull border border-black bg-gray-200'>
                {
                    isLoading && !medicosData ?
                        <View>

                            <LoadingSpinner message='Aguarde ...' />
                        </View>
                        :

                        <FlatList

                            data={medicosData?.data}
                            renderItem={(itemData) => {
                                return (
                                    <View key={itemData.item.id} className='bg-green-500 rounded-md p-2 my-2 '

                                    >
                                        <Text className='text-white'>Nome do médico: {itemData.item.nome}</Text>
                                        <Text className='text-white'>Especialidade:  {itemData.item.especialidade}</Text>
                                    </View>

                                )
                            }}

                        />}

            </View>
        </View>
    )
}