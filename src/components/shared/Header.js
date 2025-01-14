import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import colors from '../../styles/colors';
import { FontFamily } from '../../assets/fonts/FontFamily';
import { FontSize } from '../../assets/fonts/Fonts';

const Header = ({ title, navigation,showBack=true }) => {
    return (
        <View style={styles.mainView} >
            <View style={styles.container}>
                {showBack&&<TouchableOpacity style={{}} onPress={() => { navigation.navigate('Home') }}>
                    <Ant name="arrowleft" size={30} style={styles.icon} />
                </TouchableOpacity>}
                <View style={{...styles.titleBox,alignItems:!showBack?"center":'flex-start',left:!showBack?0:10}} >
                    <Text style={{...styles.title,}}>{title}</Text>
                </View>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: colors.background,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height:60,
        borderColor: '#ccc',
        width: '93%',
        alignSelf: 'center'
    },
    title: {
        fontFamily:FontFamily.TTCommonsMedium,
        fontSize:FontSize.h4,
    },
    titleBox: {flex: 3,alignSelf:'center'},
    icon: {
        color: '#000',
    },
});

export default Header;
