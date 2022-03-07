import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { PAYMENT } from '../styles/AllStyles'
import {
  Head,
  Field,
  SWITCH,
  PRESS,
} from '../components/Reusable';
import RadioButtonRN from 'radio-buttons-react-native';
import colors from '../theme/colors';
import { data } from '../Data/Paymentdata';
import { MODAL } from '../components/PaymentModal';

export default function Payment(props) {
  const [isVisible, setisVisible] = useState(false)

  return (
    <View style={PAYMENT.container}>
      <ScrollView>
        <Head props={props} />
        <View style={PAYMENT.inContainer}>
          <Text style={PAYMENT.Login}>Login</Text>

          <Field pHolder="Email Address" iname="mail-outline" />
          <Field pHolder="Password " iname="lock-open" />
          <Text style={PAYMENT.Login}>
            Delivery Address
          </Text>
          <Field pHolder="Full name" />
          <Field pHolder="Phone Number" />
          <Field pHolder="Address Line" />
          <View style={{
            flexDirection: "row",
          }}>
            <Field pHolder="State" wdth={150} />
            <Field pHolder="Zip Code" wdth={150} />
          </View>
          <Field pHolder="Country" />
          <Text style={PAYMENT.Login}>
            Delivery Options
          </Text>
          <Text style={[PAYMENT.dMethod, { marginRight: 205, }]}>
            Delivery Method:
          </Text>
          <View style={{ width: 160, marginRight: 125 }}>
            <RadioButtonRN
              data={data}
              initial={1}
              box={false}
              textStyle={{ color: colors.TEXT_COLOR }}
              circleSize={8}
            />
          </View>
          <Text style={[PAYMENT.dMethod, { marginRight: 245, paddingTop: 15 }]}>
            Door Code:
          </Text>
          <Field pHolder="eg. 143" />
          <Text style={[PAYMENT.dMethod, { marginRight: 210, paddingTop: 5 }]}>
            Drop Off option:
          </Text>
          <Field pHolder="Choose drop of method" iname="keyboard-arrow-down" />
          <Text style={PAYMENT.Login}>
            Billing
          </Text>
          <Text style={[PAYMENT.dMethod, { marginRight: 225, paddingTop: 5 }]}>
            Card Number:
          </Text>
          <Field pHolder="xxxx xxxx xxxx xxxx" iname="credit-card" i2 />
          <View style={{
            flexDirection: "row",
          }}>
            <View>
              <Text style={[PAYMENT.dMethod, { paddingTop: 5, marginLeft: 12, marginBottom: -5 }]}>
                Expiry date
              </Text>
              <Field pHolder="MM/YY" wdth={150} />
            </View>
            <View>
              <Text style={[PAYMENT.dMethod, { paddingTop: 5, marginLeft: 10, marginBottom: -5 }]}>
                CVC
              </Text>
              <Field pHolder="xxx" wdth={150} />
            </View>
          </View>
          <View style={PAYMENT.switchView}>
            <Text style={{
              fontWeight: "400",
              fontSize: 14,
              marginRight: 12
            }}>
              Use delivery address
            </Text>
            <SWITCH />
          </View>
          <Text style={[PAYMENT.italic, {fontSize:13}]}>
            *All credit card payments are processed
            through a third party payment processor.
          </Text>
          <PRESS
            marginBottom={22}
            onpress={() => { setisVisible(true) }}
            backColor={colors.PRIMARY}
            txtColor={colors.WHITE}
            title="Checkout" />
        </View>
        <MODAL
          isVisible={isVisible}
          onpress={() => {
            setisVisible(!isVisible);
            props.navigation.navigate("Adresses")
          }}
        />
      </ScrollView>
    </View>
  )
}