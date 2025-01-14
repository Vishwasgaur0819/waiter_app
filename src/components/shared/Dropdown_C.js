import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Menu, Button, IconButton, Text } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FontFamily } from '../../assets/fonts/FontFamily';
import { FontSize } from '../../assets/fonts/Fonts';

const Dropdown_C = ({
    options = [],
    onSelect,
    selectedValue,
    placeholder = 'Select an option',
    buttonStyle,
    iconSize = 24,
    iconColor = '#000',
    buttonHeight=50,
    textStyle
}) => {
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const handleOptionSelect = (option) => {
        onSelect(option); // Pass selected option to parent
        closeMenu();
    };

    return (
        <View style={{left:5}} >
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <TouchableOpacity
                    onPress={openMenu}
                    style={[
                        styles.customButton,
                        { height: buttonHeight },
                        buttonStyle,
                    ]}
                >
                    <Text style={[styles.buttonText, textStyle]}>
                        {selectedValue || placeholder}
                    </Text>
                    <MaterialIcons
                        name={visible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                        size={iconSize}
                        color={iconColor}
                    />
                </TouchableOpacity>
                }
            >
                {options.map((option, index) => (
                    <Menu.Item
                        key={index}
                        onPress={() => handleOptionSelect(option)}
                        title={option?.name}
                        titleStyle={{fontFamily:FontFamily.TTCommonsMedium}}
                    />
                ))}
            </Menu>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
    },
    buttonContent: {
        flexDirection: 'row-reverse', // Places icon on the right
    },
    customButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    buttonText: {
        fontSize: FontSize.medium,
        color: '#000',
        fontFamily:FontFamily.TTCommonsMedium
    },
});

export default Dropdown_C;
