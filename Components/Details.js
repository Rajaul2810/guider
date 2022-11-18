import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../Consts/colors';
import { MaterialCommunityIcons, FontAwesome5, AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function Details({ route }) {
    const [modalVisible, setModalVisible] = useState(false);
    const { name, image, duration, price, category, designation } = route.params?.item;

    return (
        <View >
            <ScrollView style={{ backgroundColor: COLORS.bg,marginBottom:100 }}>
                <View style={{ padding: 5, }}>
                    <Image style={{ width: '100%', height: 300, borderRadius: 6 }} resizeMode='stretch' source={{ uri: image }} />
                    <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: COLORS.text }}>{name}</Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', height: 35, paddingLeft: 10, marginBottom: 5 }}>
                    <MaterialCommunityIcons name="toolbox" size={30} color="#ff5d8f" style={{ borderRadius: 50, padding: 2, shadowColor: COLORS.main, backgroundColor: COLORS.bg }} />
                    <Text style={{ color: COLORS.text, fontSize: 18, fontWeight: '500', paddingLeft: 5, width: '90%' }}> {designation}</Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', height: 35, paddingLeft: 10, marginBottom: 5 }}>
                    <AntDesign name="tags" size={30} color="#00cecb" style={{ borderRadius: 50, padding: 2, shadowColor: COLORS.main, backgroundColor: COLORS.bg }} />
                    <Text style={{ color: COLORS.text, fontSize: 18, fontWeight: '500', paddingLeft: 5, width: '90%' }}>Category: {category} </Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', height: 35, paddingLeft: 10, marginBottom: 5 }}>
                    <MaterialIcons name="timer" size={30} color="#fe7f2d" style={{ borderRadius: 50, padding: 2, shadowColor: COLORS.main, backgroundColor: COLORS.bg }} />
                    <Text style={{ color: COLORS.text, fontSize: 18, fontWeight: '500', paddingLeft: 5, width: '90%' }}>Duration: {duration} min</Text>
                </View>

                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', height: 35, paddingLeft: 10, marginBottom: 5 }}>
                    <MaterialIcons name="check-circle" size={30} color={COLORS.main} style={{ borderRadius: 50, padding: 2, shadowColor: COLORS.main, backgroundColor: COLORS.bg }} />
                    <Text style={{ color: COLORS.text, fontSize: 18, fontWeight: '500', paddingLeft: 5, width: '90%' }}>No Video Record Without Permission</Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', height: 35, paddingLeft: 10, marginBottom: 5 }}>
                    <MaterialIcons name="check-circle" size={30} color={COLORS.main} style={{ borderRadius: 50, padding: 2, shadowColor: COLORS.main, backgroundColor: COLORS.bg }} />
                    <Text style={{ color: COLORS.text, fontSize: 18, fontWeight: '500', paddingLeft: 5, width: '90%' }}>No Photo Without Permission</Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', height: 35, paddingLeft: 10, marginBottom: 5 }}>
                    <MaterialIcons name="check-circle" size={30} color={COLORS.main} style={{ borderRadius: 50, padding: 2, shadowColor: COLORS.main, backgroundColor: COLORS.bg }} />
                    <Text style={{ color: COLORS.text, fontSize: 18, fontWeight: '500', paddingLeft: 5, width: '90%' }}>Always good Behavior</Text>
                </View>

                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', }}>
                    <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginLeft: 20 }}>
                        <MaterialCommunityIcons name="currency-bdt" size={24} color={COLORS.main} />
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.main }}>{price}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
                        <AntDesign name="star" size={16} color="#e1de15" />
                        <AntDesign name="star" size={16} color="#e1de15" />
                        <AntDesign name="star" size={16} color="#e1de15" />
                        <AntDesign name="star" size={16} color="#e1de15" />
                        <FontAwesome5 name="star-half-alt" size={16} color="#e1de15" />

                    </View>

                </View>
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Pressable style={{
                        backgroundColor: '#d7d7d7', marginTop: 8, flexDirection: 'row', alignItems: 'center',
                        justifyContent: 'center', borderRadius: 10, height: 50, width: '50%'
                    }}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={{ color: COLORS.main }}>Book Now</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.main} />
                    </Pressable>
                </View>
                <Modal visible={modalVisible} animationType='slide' style={{ backgroundColor: COLORS.bg }} >
                    <MaterialIcons name='close' size={24} color='black' onPress={() => setModalVisible(false)} />
                    <View style={{ alignItems: 'center', elevation: 3 }}>
                        <Image
                            style={styles.stretch}
                            source={require('../assets/Bkash.png')}
                            resizeMode='stretch'
                        />

                    </View>
                    <View style={{ alignItems: 'center', elevation: 3, shadowColor: COLORS.shadow }}>
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

            </ScrollView >

        </View>
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
        shadowColor: COLORS.shadow,
        backgroundColor: 'lightgrey',
        margin: 5,
        padding: 5,


    }
})