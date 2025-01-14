import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { FAB } from 'react-native-paper';

const FloatingActionButton = ({
    actions = [], // Array of actions
    icon = 'plus', // Default icon
    onPress = () => { }, // Default onPress handler
    style = {}, // Custom styles for the FAB
    color = 'white', // Icon color
}) => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });
  
    const { open } = state;
    return (
        <>
            <FAB.Group
                open={open}
                visible
                icon={open ? 'calendar-today' : 'plus'}
                backdropColor='#000000CC'
                labelStyle={{}}
                actions={[
                   
                    // {
                    //     icon: 'star',
                    //     label: 'Star',
                    //     onPress: () => console.log('Pressed star'),
                    // },
                    {
                        icon: 'email',
                        label: 'Email',
                        onPress: () => console.log('Pressed email'),
                    },
                    {
                        icon: 'bell',
                        label: 'Remind',
                        onPress: () => console.log('Pressed notifications'),
                    },
                ]}
                onStateChange={onStateChange}
                onPress={() => {
                    if (open) {
                        // do something if the speed dial is open
                    }
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'blue', // Default color
    },
});

export default FloatingActionButton;
