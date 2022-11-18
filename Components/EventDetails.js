import { Image, Pressable, ScrollView, Alert, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../Consts/colors';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function EventDetails({ route }) {
    const [modalVisible, setModalVisible] = useState(false);
     
    const { name ,date , startTime , endTime, image , Description } = route.params?.item;



    return (
        <ScrollView>
            <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 20, elevation: 3, shadowColor: COLORS.main, padding: 5, backgroundColor: COLORS.bg }}>
                <View style={{}}>
                    <Image style={{ height: 200, width: "100%", borderRadius: 10 }} source={{ uri: image }} />
                    <View style={{ flexDirection: 'column', justifyContent: 'space-around', paddingTop: 5, paddingBottom: 5 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{name}</Text>
                        <Text style={{ fontSize: 20, color: COLORS.main }}>Date: {date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", marginBottom: 5 }}>
                        <Text style={{ color: COLORS.text }}>Start: {startTime}</Text>
                        <Text style={{ color: COLORS.text }}>End: {endTime}</Text>
                    </View>
                    <View style={{ borderStartWidth: 4, borderColor: COLORS.main, borderBottomStartRadius: 6, borderTopLeftRadius: 6, paddingLeft: 5, backgroundColor: '#EAEAFF', marginBottom: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 20, color: COLORS.main }}>Description:</Text>
                        <Text style={{ fontSize: 20, padding: 5 }}>{Description}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                            <FontAwesome name="video-camera" size={24} color="crimson" />
                            <Text style={{ fontSize: 20, marginLeft: 10, color: 'crimson' }}>Live</Text>
                        </View>
                        <Pressable style={{
                            borderTopWidth: 1, borderColor: '#d7d7d7', flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'center', height: 45, width: '100%', backgroundColor: '#D2D0FF', borderRadius: 20, marginBottom: 10
                        }}
                            onPress={() => setModalVisible(true)}
                        >

                            <Text style={{ color: COLORS.main, fontSize: 18 }}>Join Now</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.main} />
                        </Pressable>
                    </View>
                    <Modal visible={modalVisible} animationType='slide' style={{backgroundColor:COLORS.bg}} >
                        <MaterialIcons name='close' size={24} color='black' onPress={() => setModalVisible(false)} />
                        <View style={{ alignItems: 'center', elevation: 3 }}>
                            <Image
                                style={styles.stretch}
                                source={require('../assets/Bkash.png')}
                                resizeMode='stretch'
                            />

                        </View>
                        <View style={{ alignItems: 'center', elevation: 3, shadowColor:COLORS.shadow }}>
                            <Image
                                style={styles.stretch}
                                source={require('../assets/Nagad.png')}
                                resizeMode='stretch'
                            />
                        </View>
                        <Pressable style={{
                            borderTopWidth: 1, borderColor: '#d7d7d7', flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'center', height: 45, width: '100%', backgroundColor: '#D2D0FF', borderRadius: 20, marginBottom: 10
                        }}
                           
                        >

                            <Text style={{ color: COLORS.main, fontSize: 18 }}>Payment</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.main} />
                        </Pressable>
                    </Modal>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    stretch: {
        height: 100,
        width: 300,
        alignItems: 'center',
        elevation: 10,
        borderColor: COLORS.main,
        borderRadius: 20,
        // borderWidth:2,
       shadowColor:COLORS.shadow,
       backgroundColor:'lightgrey',
        margin: 5,
        padding: 5,


    }
})