import AnyIcon from '../components/AnyIcons'
import { View, Text, } from 'react-native'
import React, { useState } from 'react'
import { ODERING } from "../styles/AllStyles"


const IconPlus = (props) => {
    return (
        <View style={ODERING.rowView}>
            <AnyIcon name={props.iname} type={props.itype} size={17} color={props.icolor} />
            <Text style={ODERING.rowTxt}>{props.rowTxt}</Text>
        </View>
    )
}
export{IconPlus}