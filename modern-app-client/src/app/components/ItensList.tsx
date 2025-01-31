import { TItem } from '@/types/ItensTypes';
import React from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { FontAwesome, AntDesign } from "react-native-vector-icons";


type Props = {
  itens: TItem[],
  removeItem: (data: string) => void;
}

const ItensList = ({ itens, removeItem }: Props) => {
  return (
    <View className="flex flex-col gap-5 px-2 py-1 m-2 rounded-sm border-gray-300 border">
      {
        itens.length > 0 ?
          <FlatList

            data={itens}
            keyExtractor={(item, index) => {
              return item.id
            }}
            renderItem={(itemData) => {
              return (
                <View className="w-full bg-purple-700 p-1 rounded-md px-2 mb-2 flex flex-row justify-between"
                  key={itemData.item.id}
                >
                  <Text className="text-white line-clamp-1 text-nowrap">
                    {itemData.item.text}
                  </Text>
                  <Pressable onPress={() => removeItem(itemData.item.id)}>
                    <AntDesign name="closecircleo" size={20} color="white"

                    />
                  </Pressable>

                </View>
              )
            }}
          />
          :
          <Text>
            Nenhum item disponível!
          </Text>
      }
    </View>
  )
}

export default ItensList