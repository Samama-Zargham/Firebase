import { View, Text, } from 'react-native'
import React, { useState } from 'react'
import { ODERING } from "../styles/AllStyles"
import colors from '../theme/colors'

const ColorTxt = (props) => {
    return (
        <View style={[ODERING.colorTxtView, !props.icolor && { justifyContent: "space-between" }]}>
            <Text style={[ODERING.s1Txt,
            !props.icolor && { fontSize: 15 },
            { color: props.color ? props.color : props.icolor }]}>
                {props.t1}
            </Text>
            <Text style={[ODERING.s1Txt,
            { color: props.color },
            !props.icolor && { fontSize: 15 }]}>
                {props.t2}
            </Text>
        </View>
    )
}

const RowText = (props) => {
    return (
        <View style={[ODERING.colorTxtView, { justifyContent: "space-between" }]}>
            <Text style={[ODERING.s1Txt, { color: props.icolor }]}> {props.t1}</Text>
            <Text style={[ODERING.s1Txt, { color: colors.TEXTFADE_COLOR }]}>
                {props.t2}
            </Text>
        </View>
    )
}
export { ColorTxt, RowText }