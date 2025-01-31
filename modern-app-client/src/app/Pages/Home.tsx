import { Link } from "expo-router";
import React, { useState } from "react";
import { Button, NativeSyntheticEvent, Pressable, ScrollView, Text, TextInput, TextInputChangeEventData, View, FlatList, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ItemInput from "../components/ItemInput";
import { TItem } from "@/types/ItensTypes";
import ItensList from "../components/ItensList";


const Home = () => {

    const [itens, setItens] = useState<TItem[]>([]);


    const handleSendItem = (data: string) => {

        if (data) {
            setItens((itens) => [...itens,
            {
                text: data,
                id: Math.random().toString()
            }
            ])
        }

    }

    const removeItem = (itemId: string) => {
        const itensTemp = itens.filter((item: TItem) => {
            return item.id !== itemId
        })
        setItens(itensTemp)
    }

    const [inputModal, setInputModal] = useState<boolean>(false);
    const modalVisibility = (isVisible: true | false) => {
        setInputModal(isVisible)
    }

    return (
        <View className="flex-1 h-[80%]">
            <View className="w-full h-28  bg-black">
                <Image
                    className="w-full h-28"
                    source={require('../assets/images/header.png')}
                    alt="Img"
                    resizeMode="contain"
                    height={28}
                />
            </View>


            <Text className="text-xl font-semibold mt-5 px-2">
                Tarefas App
            </Text>

            <Pressable
                onPress={() => modalVisibility(true)}
            >
                <View className="flex flex-col justify-center items-center px-5 my-2">
                    <Text className="border border-black rounded-md bg-blue-500 text-white w-full text-center p-2">
                        Adicionar item
                    </Text>
                </View>

            </Pressable>


            <ItemInput
                handleSendItem={handleSendItem}
                isVisible={inputModal}
                modalVisibility={modalVisibility}
            />

            <View className=" w-full">

                <ItensList itens={itens} removeItem={removeItem} />

            </View>


        </View>
    )
}



export default Home