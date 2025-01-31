import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

// Componente de loading com spinner
const LoadingSpinner = ({ message }: { message?: string }) => {
    return (
        <View className='flex flex-row gap-4 justify-center'>
            {message && <Text className='mt-2 text-white'>{message}</Text>}
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};



export default LoadingSpinner;
