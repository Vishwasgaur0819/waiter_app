import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import colors from '../../styles/colors';

const Header = ({ title, navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => {navigation.navigate('Home')}}>
                <Ant name="arrowleft" size={30} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.titleBox} >
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={{ flex: 1 }} >

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: colors.background,
        borderColor: '#ccc',
        width:'93%',
        alignSelf:'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    titleBox: { alignSelf: 'center', flex: 3, justifyContent: 'center', alignItems: 'center' },
    icon: {
        color: '#000',
    },
});

export default Header;
