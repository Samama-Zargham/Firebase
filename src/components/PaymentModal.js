import Modal from "react-native-modal";
import ModalSvg from "../assets/svg/ModalSvg.svg"
import AnyIcon, { Icons } from '../components/AnyIcons'
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { PAYMENT } from '../styles/AllStyles'
import colors from '../theme/colors';

const MODAL = (props) => {
    return (
        <Modal
            isVisible={props.isVisible}
        >
            <View style={[PAYMENT.ModelView,{alignItems:"center"}]}>
                <TouchableOpacity
                    onPress={() => {
                        props.onpress()
                    }}
                    style={{ padding: 20, alignSelf: "flex-end" }}
                >
                    <AnyIcon

                        name="closecircleo" type={Icons.AntDesign}
                        color={colors.BLACK}
                        size={18}
                    />
                </TouchableOpacity>
                <Text style={PAYMENT.dollar}>
                    Payment Successful
                </Text>
                <ModalSvg />
                <Text style={[PAYMENT.italic, { paddingHorizontal: 40 }]}>
                    Meal Credits have been added to
                    your Wallet.
                </Text>
            </View>
        </Modal>
    )
}

export {
    MODAL
}