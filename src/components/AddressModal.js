import Modal from "react-native-modal";
import AnyIcon, { Icons } from '../components/AnyIcons'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { PAYMENT, ADRESS } from '../styles/AllStyles'
import colors from '../theme/colors';
import {
    SWITCH,
    PRESS,
} from '../components/Reusable';
import { Field } from "./ModalInputs";
import { Fdata } from "../Data/Paymentdata";

const MODAL = (props) => {
    const renderItem = ({ item }) => {
        return (
            <Field
                head={item.head}
                placeholder={item.placeholder}
            />
        )
    }
    return (
        <Modal
            isVisible={props.isVisible}
        >
            <View style={[PAYMENT.ModelView, { paddingHorizontal: 22, height: 450, }]}>
                <View style={ADRESS.modalView1}>
                    <Text style={[PAYMENT.dollar, { marginLeft: -22 }]}>
                        Edit Address
                    </Text>
                    <TouchableOpacity
                        onPress={() => { props.onpress() }} >
                        <AnyIcon

                            name="closecircleo" type={Icons.AntDesign}
                            color={colors.BLACK}
                            size={18}
                        />
                    </TouchableOpacity>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Fdata}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <View style={ADRESS.swtch}>
                    <Text style={{ marginRight: 7 }}>
                        Make it primary Delivery Address
                    </Text>
                    <SWITCH />
                </View>
                <PRESS
                    width={280}
                    marginBottom={22}
                    onpress={() => {
                        props.onpress1();
                        props.onpress()
                    }}
                    backColor={colors.PRIMARY}
                    txtColor={colors.WHITE}
                    title="Save Adress" />
            </View>
        </Modal>
    )
}

export {
    MODAL
}