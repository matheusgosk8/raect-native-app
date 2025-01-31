import { Alert, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Entypo } from 'react-native-vector-icons'
import React, { useState } from 'react'
import LoadingSpinner from '../components/Loading';
import { useReactQueryData } from '../Utils/useReactQueryData';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import MedicosList from '../components/MedicosList';
import NovoMedico from '../components/NovoMedico';

const Medicos = () => {


    const [novoMedicoModal, setNovoMedicoModal] = useState<boolean>(false);
    const changeModalVisibility = () => {
        setNovoMedicoModal(current => !current)
    }

    return (
        <View className='flex-1 justify-between relative'>

            <MedicosList />
            <NovoMedico isVisible={novoMedicoModal} handleVisibility={changeModalVisibility} />


            <View className='absolute bottom-3 w-full'>
                <Pressable className='bg-blue-500 p-2 rounded-md flex flex-row justify-center items-center mx-2'
                    onPress={changeModalVisibility}
                >
                    <Text className='text-white tetx-xl'> Adicionar médico </Text>
                </Pressable>
            </View>




        </View>
    )
}

export default Medicos


