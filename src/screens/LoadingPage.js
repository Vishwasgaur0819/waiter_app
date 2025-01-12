import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';

const LoadingPage = ({messages=['Loading...']}) => {
    const [messageIndex, setMessageIndex] = useState(0);

    // Cycle through the messages every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 2000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} size="large" color="#6200ee" />
            <Text style={styles.message}>{messages[messageIndex]}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    message: {
        marginTop: 20,
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        paddingHorizontal: 20, // for better readability on smaller screens
    },
});

export default LoadingPage;
