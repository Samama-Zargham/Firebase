import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MEAL_STYLE } from "../styles/AllStyles"
import colors from '../theme/colors'
import MC from '../assets/svg/MC.svg'
import AnyIcon, { Icons } from '../components/AnyIcons'
import { Head, PRESS } from '../components/Reusable'



export default function MealCredits(props) {
  return (
    <View style={MEAL_STYLE.container}>
      <Head name="Add Meal Credits" props={props} />
      <View style={MEAL_STYLE.inContainer}>
        <MC />
        <Text style={[MEAL_STYLE.txt, { fontSize: 16, marginTop: 10 }]}>Meal Credits Weelky Plan</Text>
        <Text style={[MEAL_STYLE.chooseMeal]}>Choose the number of Meal Credits.</Text>
        <View style={{ flexDirection: "row", alignItems: "center", }}>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text style={[MEAL_STYLE.txt, { padding: 5, }]}>Meal Credits</Text>
            <View style={MEAL_STYLE.mCView}>
              <AnyIcon
                name="minus-box"
                type={Icons.MaterialCommunityIcons}
                color={colors.PRIMARY} size={30}
              />
              <Text style={MEAL_STYLE.mcTxt}>1</Text>
              <AnyIcon
                name="plus-box"
                type={Icons.MaterialCommunityIcons}
                color={colors.PRIMARY} size={30}
              />
            </View>
          </View>
          <Text style={MEAL_STYLE.Xsign}>x</Text>
          <View style={{ alignItems: "center" }} >
            <Text style={[MEAL_STYLE.txt, { padding: 5 }]}>Price per Meal</Text>
            <Text style={MEAL_STYLE.dollar}>$6.99</Text>
          </View>
        </View>
        <Text style={MEAL_STYLE.TotalAmount}>Total Amount</Text>

      </View>
      <PRESS
        backColor={colors.PRIMARYFADE_COLOR}
        txtColor={colors.PRIMARY}
        title="$6.99/Week" />
      <Text style={[
        MEAL_STYLE.TotalAmount,
        { fontWeight: "400", marginLeft: 10 }]}>Save 40% on Meals Compared to On-demand.</Text>
      <View style={{ marginTop: 90 }}>
        <PRESS
          onPress={() => props.navigation.navigate("Payment")}
          backColor={colors.PRIMARY}
          txtColor={colors.WHITE}
          title="Continue" />
      </View>

    </View>
  )
}