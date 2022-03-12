import { View, Text, ScrollView, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
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
import { PICKER } from '../components/Picker';
import FStore from "../Firebase/Firestore"
import firestore from '@react-native-firebase/firestore';

export default function Payment(props) {
  const [isVisible, setisVisible] = useState(false);
  const FormData = [];
  const [eAdress, seteAdress] = useState('pakistan , rahim yar kahn, punjab');
  const [pass, setpass] = useState('');
  const [Fname, setFname] = useState('');
  const [phNo, setphNo] = useState('');
  const [AdresLine, setAdresLine] = useState('');
  const [State, setState] = useState('');
  const [ZipCode, setZipCode] = useState('');
  const [Country, setCountry] = useState('');
  const [dMethod, setdMethod] = useState('');
  const [doorCode, setdoorCode] = useState('');
  const [dropMethod, setdropMethod] = useState('');
  const [Cardno, setCardno] = useState('');
  const [ExDate, setExDate] = useState('');
  const [cvc, setCVC] = useState('ahaahhaha');
  const props1 = {
    eAdress, pass, Fname, phNo, AdresLine, State, ZipCode, Country, dMethod, doorCode, dropMethod, Cardno, ExDate, cvc
  }
 

  return (
    <View style={PAYMENT.container}>
      <ScrollView>
        <Head props={props} />
        <View style={PAYMENT.inContainer}>
          <Text style={PAYMENT.Login}>Login</Text>

          <Field
            pHolder="Email Address"
            iname="mail-outline"
            setChangeText={(Value) => seteAdress(Value)}
          />

          <Field
            pHolder="Password "
            pass
            iname="lock-open"
            setChangeText={(Value) => setpass(Value)}

          />
          <Text style={PAYMENT.Login}>
            Delivery Address
          </Text>
          <Field
            pHolder="Full name"
            setChangeText={(Value) => setFname(Value)}
          />
          <Field
            pHolder="Phone Number"
            setChangeText={(Value) => setphNo(Value)}
          />
          <Field pHolder="Address Line"
            setChangeText={(Value) => setAdresLine(Value)}
          />
          <View style={{
            flexDirection: "row",
          }}>
            <Field pHolder="State" wdth={150}
              setChangeText={(Value) => setState(Value)}
            />
            <Field pHolder="Zip Code"
              setChangeText={(Value) => setZipCode(Value)}
              wdth={150} />
          </View>
          <Field pHolder="Country"
            setChangeText={(Value) => setCountry(Value)}
          />
          <Text style={PAYMENT.Login}>
            Delivery Options
          </Text>
          <Text style={[PAYMENT.dMethod, { marginRight: 205, }]}>
            Delivery Method:
          </Text>
          <View style={{ width: 160, marginRight: 125 }}>
            <RadioButtonRN
              // setChangeText={(Value) => setdoorCode(Value)}
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
          <Field pHolder="eg. 143"
            setChangeText={(Value) => setdoorCode(Value)}
          />
          <Text style={[PAYMENT.dMethod, { marginRight: 210, paddingTop: 5 }]}>
            Drop Off option:
          </Text>
          <PICKER
            label="Choose drop of method"
            label1="Drop down"
            setChangeText={(Value) => setdropMethod(Value)}
          />
          <Text style={PAYMENT.Login}>
            Billing
          </Text>
          <Text style={[PAYMENT.dMethod, { marginRight: 225, paddingTop: 5 }]}>
            Card Number:
          </Text>
          <Field pHolder="xxxx xxxx xxxx xxxx"
            setChangeText={(Value) => setCardno(Value)}
            iname="credit-card" i2 />
          <View style={{
            flexDirection: "row",
          }}>
            <View>
              <Text style={[PAYMENT.dMethod, { paddingTop: 5, marginLeft: 12, marginBottom: -5 }]}>
                Expiry date
              </Text>
              <Field pHolder="MM/YY"
                setChangeText={(Value) => setExDate(Value)}
                wdth={150} />
            </View>
            <View>
              <Text style={[PAYMENT.dMethod, { paddingTop: 5, marginLeft: 10, marginBottom: -5 }]}>
                CVC
              </Text>
              <Field pHolder="xxx"
                setChangeText={(Value) => setCVC(Value)}
                wdth={150} />
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
          <Text style={[PAYMENT.italic, { fontSize: 13 }]}>
            *All credit card payments are processed
            through a third party payment processor.
          </Text>
          {/* <PRESS
            marginBottom={22}
            onpress={() =>
              // setisVisible(true)
              storeData()
            }
            backColor={colors.PRIMARY}
            txtColor={colors.WHITE}
            title="Checkout"
          /> */}
          <Button
            color={colors.PRIMARY}
            title='Checkout'
            onPress={() => FStore({ props1 })}
          />

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