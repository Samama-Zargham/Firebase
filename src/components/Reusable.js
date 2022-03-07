import colors from '../theme/colors'
import AnyIcon, { Icons } from '../components/AnyIcons'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { MEAL_STYLE, PAYMENT, PRESS_STYLE, ADRESS, WH, ODERING } from "../styles/AllStyles"
import { CommonActions } from '@react-navigation/native';
import { Switch } from 'react-native-switch';



// Header  Component
const Head = ({ name, i1, i2, props }) => {
    const goTOMAIN = () => (props.navigation.dispatch(CommonActions.goBack()));


    const [press, setpress] = useState(true);
    return (
        <View style={MEAL_STYLE.head}>
            <View style={MEAL_STYLE.headV}>
                <TouchableOpacity
                    onPress={goTOMAIN}
                >
                    <AnyIcon name="chevron-back" type={Icons.Ionicons} color={colors.PRIMARY} />
                </TouchableOpacity>
                <Text style={MEAL_STYLE.head_Title}>{name}</Text>
            </View>
            {
                i1 &&
                <TouchableOpacity onPress={() => setpress(!press)} >

                    {press ? <AnyIcon name="hearto" type={Icons.AntDesign} color={colors.PRIMARY} size={20} style={{ marginRight: 10 }} />
                        : <AnyIcon name="heart" type={Icons.AntDesign} color={colors.PRIMARY} size={20} style={{ marginRight: 10 }} />
                    }

                </TouchableOpacity>
            }
        </View>
    )
}
// Pressable || Touchable  Component
const PRESS = ({ backColor, txtColor, title, onpress, disable, marginTop, marginBottom, width }) => {
    return (
        <TouchableOpacity
            disabled={disable}
            onPress={() => onpress()}
            activeOpacity={0.7}
            style={[PRESS_STYLE,
                { backgroundColor: backColor, },
                marginBottom && { marginBottom: marginBottom },
                marginTop && { marginTop: marginTop }, width && { width: width }]}
        >
            <Text style={[MEAL_STYLE.dollar, { textAlign: "center", color: txtColor, fontSize: 17 }]}>{title}</Text>

        </TouchableOpacity>
    )
}

// Text Field Component
const Field = (props) => {
    return (
        <View style={[PAYMENT.FieldView, props.wdth && { width: props.wdth, margin: 10 }]}>
            {
                props.i2 &&
                <Image
                    style={PAYMENT.png}
                    resizeMode="center"
                    source={require("../assets/images/mastercard.png")} />
            }
            <TextInput
                placeholder={props.pHolder}
                style={PAYMENT.Field}
            />
            {
                props.iname &&
                <AnyIcon name={props.iname} size={16} color={colors.TEXTFADE_COLOR} type={Icons.MaterialIcons} />
            }
        </View >
    )
}


// SWITCH component

const SWITCH = () => {
    const [SS, setSS] = useState(true)
    return (
        <Switch
            value={SS}
            onValueChange={setSS}
            renderActiveText={false}
            renderInActiveText={false}
            switchBorderRadius={100}
            circleBorderWidth={3}
            circleSize={16}
            backgroundActive={colors.PRIMARY}
            backgroundInactive={colors.PRIMARY}
            circleBorderActiveColor={colors.PRIMARY}
            circleBorderInactiveColor={colors.PRIMARY}
            barHeight={16}
        // innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}

        />
    )
}

// ADDRESS fields component
const Address = (props) => {
    return (
        <View>
            <View style={[ADRESS.View1,
            { backgroundColor: props.backColor, },
            props.txt == "Office" && { margin: 15 },
            props.height && { height: props.height },
            props.i1 && { alignItems: "center", }]}>
                <View>
                    {props.i1 &&
                        <View style={ADRESS.iconView}>
                            <AnyIcon
                                name={props.i1}
                                size={props.txt == "Home" ? 20 : 16}
                                color={colors.TEXTFADE_COLOR}
                                type={Icons.MaterialCommunityIcons} />
                            <Text style={{ marginLeft: 5, color: colors.TEXTFADE_COLOR, fontSize: 15 }}>{props.txt}</Text>
                        </View>}
                    {props.i1 && <Text style={{ width: "70%", marginTop: 20 }}>{props.pHolder}</Text>}
                    {!props.i1 && <TextInput
                        disabled={true}
                        numberOfLines={props.i1 && 2}
                        placeholder={props.pHolder}
                        style={[props.i1 && {
                            width: 200, height: 70
                        }]}
                    />}
                </View>
                {props.i1 &&
                    <TouchableOpacity
                        onPress={() => props.onpress()}
                    >
                        <AnyIcon
                            name="edit"
                            size={16}
                            color={colors.TEXTFADE_COLOR}
                            type={Icons.Feather} />
                    </TouchableOpacity>
                }
                {
                    props.redeemPrice && <Text style={[ODERING.s1Txt, { color: colors.PRIMARY, alignSelf: "center" }]}>{props.redeemPrice}</Text>
                }
            </View>
        </View>
    )
}


export { Head, PRESS, Field, SWITCH, Address, }