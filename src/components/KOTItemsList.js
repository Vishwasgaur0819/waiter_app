import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FontFamily } from '../assets/fonts/FontFamily'
import { FontSize } from '../assets/fonts/Fonts'
import Spacer from './shared/Spacer'
import { Button, Divider, TextInput } from 'react-native-paper'
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../styles/colors'
import ModalRoot from './shared/ModalRoot'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fontSize } from '../assets/fonts/FontSize'
import { useDispatch } from 'react-redux'
import { addItemToTableOrder } from '../store/reducers/orderedItemSlice'

const KOTItemsList = ({ data, note }) => {

    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);
    const [noteDetails, setNoteDetails] = useState('');
    const [noteItem, setNoteItem] = useState([]);

    const handleNote = (itm) => {
        try {
            setVisible(true)
            setNoteItem(itm)
            setNoteDetails(itm.note || "");

        } catch (er) {
            console.error(`Error in handleNote-->${er}`);

        }
    }
    const handleSubmit = () => {
        if (noteDetails) {
            dispatch(addItemToTableOrder({
                tableId: noteItem?.tableId,
                item: { ...noteItem, note: noteDetails }
            }));
            setVisible(!visible)
            setNoteDetails('')
        }
        else {
            alert('Please write the note')
        }
    };
    return (
        <View style={{ flex: 1 }}>

            <View style={styles.header} >
                <Text style={styles.headerTxt} >Dish</Text>
                <Text style={styles.headerTxt} >Quantity <Entypo name='cross' size={15} /> Price</Text>
            </View>
            <Spacer />
            <Divider bold />
            <ScrollView>
                {
                    data?.map((item) => {
                        return (
                            <View key={item.id} >
                                <View style={[styles.header, styles.itemsContainer]} >
                                    <View style={{ width: '80%', }}>
                                        <Text style={{ fontFamily: FontFamily.TTCommonsDemiBold }} >{item?.name}</Text>
                                        <Text style={{ fontFamily: FontFamily.TTCommonsRegular, fontSize: FontSize.medium }} >{item?.description || '-'}</Text>
                                        {note && <Button icon="note-edit" style={{ width: '5%', left: -15 }} textColor={colors.splash_background} onPress={() => handleNote(item)} />}
                                        {item?.note && <Text style={{ fontFamily: FontFamily.TTCommonsRegular, fontSize: FontSize.medium }} >note : {item?.note}</Text>}

                                    </View>
                                    <Text style={{ fontFamily: FontFamily.TTCommonsRegular }} >{item?.quantity} {<Entypo name='cross' />} {Number(item?.price)}</Text>
                                </View>
                                {true && <Divider />}
                            </View>
                        )
                    })
                }
            </ScrollView>

            {visible && <ModalRoot showModal={visible} setShowModal={setVisible}
                content={
                    <>
                        <View style={{ position: 'absolute', flex: 1, top: -50, }}>
                            <TouchableOpacity
                                testID='closeModal'
                                onPress={() => {
                                    setVisible(!visible);
                                }}
                                activeOpacity={1}>
                                <View
                                    style={{
                                        width: 35,
                                        height: 35,
                                        borderRadius: 30,
                                        borderWidth: 0.5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderColor: '#000',
                                        backgroundColor: '#fff',
                                    }}>
                                    <MCIcon name="close" color={'#000'} size={20} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <Text style={{
                            fontFamily: FontFamily.TTCommonsMedium,
                            fontSize: fontSize.medium,
                        }}>Note</Text>

                        <TextInput
                            label="Note"
                            value={noteDetails}
                            onChangeText={text => setNoteDetails(text)}
                            activeUnderlineColor={colors.splash_background}
                            style={{ width: '99%', height: 80 }}


                        />
                        <Button
                            mode="contained"
                            onPress={handleSubmit}
                            style={styles.button}
                            contentStyle={{ paddingVertical: 5, }}
                        >
                            Submit

                        </Button>
                    </>

                }

            />}

        </View>

    )

}

export default KOTItemsList

const styles = StyleSheet.create({
    header: { alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' },
    headerTxt: { fontFamily: FontFamily.TTCommonsBold, fontSize: FontSize.h4 },
    itemsContainer: { paddingVertical: 5 },
    button: {
        marginTop: 8,
        backgroundColor: colors?.splash_background,
        width: '100%',
        borderRadius: 5
    },
})