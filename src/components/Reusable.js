import colors from '../theme/colors'
import AnyIcon, { Icons } from '../components/AnyIcons'
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MEAL_STYLE } from "../styles/AllStyles"
import { CommonActions } from '@react-navigation/native'


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
                i1 && i2 &&
                <TouchableOpacity onPress={() => setpress(!press)} >

                    {press ? <AnyIcon name={i1} type={Icons.AntDesign} color={colors.PRIMARY} />
                        : <AnyIcon name={i2} type={Icons.AntDesign} color={colors.PRIMARY} />
                    }

                </TouchableOpacity>
            }
        </View>
    )
}
// Pressable || Touchable  Component
const PRESS = ({ backColor, txtColor, title, onPress }) => {
    return (
        <TouchableOpacity
            onPress={ ()=> onPress()}
            activeOpacity={0.7}
            style={{ backgroundColor: backColor, width: 320, height: 45, alignSelf: "center", borderRadius: 7, alignItems: "center", justifyContent: "center" }}
        >
            <Text style={[MEAL_STYLE.dollar, { textAlign: "center", color: txtColor }]}>{title}</Text>

        </TouchableOpacity>
    )
}


export { Head, PRESS }  