import { View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { PAYMENT,  } from '../styles/AllStyles'
import colors from '../theme/colors';
import { ColorTxt } from '../components/ColorText';
// import {Picker} from '@react-native-picker/picker';
import { FoodData } from "../Data/Paymentdata"
import { getHeader, getFooter } from '../components/Hooks';

export default function Payment(props) {
 
  const rendor = ({ item }) => {
    return (
      <View style={{
        backgroundColor: colors.PRIMARYFADE_COLOR,
        borderRadius: 10
      }}>
        <ColorTxt
          color={item.id == 6 && colors.TEXT_COLOR}
          t1={item.t1}
          t2={item.t2}
        />
      </View>

    )
  }
  
  return (
    <View style={PAYMENT.container}>
      <FlatList
        data={FoodData}
        renderItem={rendor}
        keyExtractor={item => item.id}
        ListHeaderComponent={getHeader(props)}
        ListFooterComponent={getFooter(props)}
      />
    </View>
  )
}