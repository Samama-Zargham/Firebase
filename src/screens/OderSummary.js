import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Alldone from "../assets/svg/Alldone.svg"
import Back from "../assets/svg/Back.svg"
import { ODERING } from '../styles/AllStyles'
import colors from '../theme/colors'
import { Summary } from "../Data/Paymentdata"
import { RowText } from '../components/ColorText';
import { PRESS, } from '../components/Reusable';



export default function OderSummary(props) {
  const render = ({ item }) => {
    return (
      <RowText
        icolor={colors.PRIMARY}
        t1={item.t1}
        t2={item.t2}

      />
    )
  }
  return (
    <View style={[ODERING.container]}>
      <View style={ODERING.headSvg1}><Back /></View>
      <View style={ODERING.Header} />
      <View style={ODERING.headSvg}><Alldone /></View>
      <View style={{
        backgroundColor: colors.WHITE,top:210
      }}>
        <Text style={[ODERING.txt, { textAlign: "center" }]}>Order Summary</Text>
        <FlatList
          data={Summary}
          renderItem={render}
          keyExtractor={item => item.id}
        />
        <Text style={[ODERING.s1Txt, { color: colors.TEXTFADE_COLOR, paddingHorizontal: 22, marginTop:5 }]}>
          An email confirmation will be sent to
        </Text>
        <Text style={[ODERING.s1Txt, { color: colors.TEXT_COLOR, paddingHorizontal: 22 }]}>
          username123@gmail.com
        </Text>
        <PRESS
          marginTop={10}
          marginBottom={22}
          onpress={() => props.navigation.navigate("First") }
          backColor={colors.PRIMARY}
          txtColor={colors.WHITE}
          title="Back to Home" />
      </View>

    </View>
  )
}