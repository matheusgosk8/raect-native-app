import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Entypo } from 'react-native-vector-icons'
import React, { useState } from 'react'
import LoadingSpinner from '../components/Loading';
import { useReactQueryData } from '../Utils/useReactQueryData';
import { useMutation, useQueryClient } from '@tanstack/react-query';



type Props = {
    isVisible: boolean,
    handleVisibility: () => void;
}

const NovoMedico = ({ handleVisibility, isVisible }: Props) => {
    const [nome, setNome] = useState("");
    const [especialidade, setEspecialidade] = useState("");


    const [loading, setLoading] = useState<boolean>(false);

    const { cadastrarMedico } = useReactQueryData();

    const queryClient = useQueryClient()
    const cadastrarMedicoMutation = useMutation({
        mutationFn: cadastrarMedico,
        onMutate: async (data) => {

            console.log('Mutação iniciada!')
            setLoading(true)

        },
        onSuccess: async (response: { status: number, msg: string }) => {

            queryClient.invalidateQueries({ queryKey: ["rqMedicosData"] });
            queryClient.refetchQueries({ queryKey: ["rqMedicosData"] })

            if (response.status === 200) {
                Alert.alert('sucesso', response.msg)
            }

            if (response.status !== 200) {
                Alert.alert('erro', response.msg)
            }
        },
        onError: async (err) => {

            console.error(err.message);
            Alert.alert('erro', err.message)

        },
        onSettled: async (data) => {
            setLoading(false);
            setNome('');
            setEspecialidade('')
        }
    })



    const handleSubmit = () => {


        setLoading(true)
        if (!nome || !especialidade) {
            Alert.alert("Erro", "Preencha todos os campos!");
            return
        }
        console.log(nome, especialidade)

        cadastrarMedicoMutation.mutate({
            nome: nome,
            especialidade: especialidade
        })


    };


    return (
        <Modal
            visible={isVisible}
            animationType='slide'
            className='justify-center relative pt-5'>


            <View className='mb-5  top-5'>

                <Text className='text-3xl mt-5'
                > Cadastro dos médicos
                </Text>

            </View>

            <View className='p-2 border-gray-500 border-2 rounded-xl m-2 bg-white'>

                <View className='bg-white shadow-md flex flex-col gap-2 max-w-screen-2xl'>
                    <Text className='text-xl font-semibold ml-2'>
                        Nome do médico
                    </Text>
                    <TextInput className='border border-black p-1 rounded-lg mx-2 '
                        onChangeText={setNome}
                        value={nome}
                    />
                </View>

                <View className='bg-white shadow-md flex flex-col gap-2 max-w-screen-2xl'>
                    <Text className='text-xl font-semibold ml-2'>
                        Especialidade
                    </Text>
                    <TextInput className='border border-black p-1 rounded-lg mx-2'
                        onChangeText={setEspecialidade}
                        value={especialidade}
                    />
                </View>

                <View>
                    <Pressable className={loading ? 'bg-blue-500 rounded-md p-1 m-2  pointer-events-none' : 'bg-blue-500 rounded-md p-1 m-2 '}
                        disabled={loading}
                        onPress={handleSubmit}
                    >
                        {loading ?
                            <LoadingSpinner message='Aguarde' /> : <Text className='text-white text-center text-2xl'> Enviar</Text>}
                    </Pressable>

                    <Pressable className={loading ? 'bg-red-500 rounded-md p-1 m-2  pointer-events-none' : 'bg-red-500 rounded-md p-1 m-2 '}
                        disabled={loading}
                        onPress={handleVisibility}
                    >
                        {loading ?
                            <LoadingSpinner message='Aguarde' /> : <Text className='text-white text-center text-2xl'> Fechar</Text>}
                    </Pressable>
                </View>

            </View>

        </Modal>
    )
}

export default NovoMedico


