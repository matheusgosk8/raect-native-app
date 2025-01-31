import React, { useState } from 'react'
import { Button, Modal, NativeSyntheticEvent, Pressable, Text, TextInput, TextInputChangeEventData, View } from 'react-native'
import { AntDesign } from "react-native-vector-icons";


type Props = {
    handleSendItem: (data: string) => void;
    isVisible: boolean;
    modalVisibility: (data: boolean) => void;
}

const ItemInput = ({ handleSendItem, isVisible, modalVisibility }: Props) => {


    const [tempItemInput, setTempItemInput] = useState<string>('');

    const handleSendData = () => {
        handleSendItem(tempItemInput)
        setTempItemInput('')
        modalVisibility(false)
    }


    return (
        <Modal
            visible={isVisible}
            animationType='slide'
        >
            <View className="w-full px-5 flex flex-col gap-2 mt-5">
                <View className='FLEX flex-row justify-between'>
                    <Text> Insira uma tarefa</Text>
                    <Pressable
                        onPress={() => modalVisibility(false)}
                    >
                        <AntDesign name="closecircleo" size={20} color="black" />
                    </Pressable>
                </View>

                <TextInput className="rounded-md border border-black p-2 placeholder:opacity-75 placeholder:text-gray-500"
                    onChange={(e) => setTempItemInput(e.nativeEvent.text)}
                    value={tempItemInput}
                    placeholder='Inserir tarefa'
                />
                <Button title="Enviar"
                    onPress={handleSendData}
                />
            </View>
        </Modal>

    )
}

export default ItemInput