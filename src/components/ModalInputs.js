import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import colors from '../theme/colors'
// Text Field Component
const Field = ({ head, placeholder }) => {
    return (
        <View
            style={{ backgroundColor: colors.FIELD, marginBottom: 12, borderRadius: 10, paddingHorizontal: 10, }}>
            <Text style={{ fontSize: 13, color: colors.TEXTFADE_COLOR, fontWeight: "600", marginTop: 5, marginBottom:-9 }}>{head}<Text style={{ color: colors.PRIMARY }}>*</Text></Text>
            <TextInput
                placeholder={placeholder}
                style={{ height: 45, fontSize:13 }}
            />
        </View >
    )
}

export { Field }