import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { PAYMENT, ADRESS } from '../styles/AllStyles'
import {
  Head,
  Address,
  PRESS,
} from '../components/Reusable';
import colors from '../theme/colors';
import { addres } from '../Data/Paymentdata';
import { MODAL } from '../components/AddressModal';

export default function Payment(props) {
  const [isVisible, setisVisible] = useState(false);
  const [homeAdress, sethomeAdress] = useState(addres.home);
  const [officeAdress, setofficeAdress] = useState(addres.officce);

  return (
    <View style={PAYMENT.container}>
      <ScrollView>
        <Head props={props} name="Checkout" i1 />
        <Text style={ADRESS.txt}>Address</Text>

        <Address
          i1="home-outline"
          txt="Home"
          pHolder={homeAdress}
          backColor={colors.FIELD}
          isVisible={isVisible}
          onpress={() => {
            setisVisible(!isVisible);
          }} />

        <Address
          i1="office-building-marker-outline"
          txt="Office"
          pHolder={officeAdress}
          backColor={colors.PRIMARYFADE_COLOR}
          isVisible={isVisible}
          onpress={() => {
            setisVisible(!isVisible);
          }}
        />

        <Text style={ADRESS.txt}>Note</Text>

        <Address
          height={190}
          pHolder="Any important note or any precaution...  "
          backColor={colors.FIELD} />

        <PRESS
          marginTop={110}
          // disable={true}
          onpress={() => { props.navigation.navigate("OderingDetails") }}
          backColor={colors.PRIMARY}
          txtColor={colors.WHITE}
          title="Review and Payment" />

        <MODAL
          homeAdress={homeAdress}
          officeAdress={officeAdress}
          isVisible={isVisible}
          onpress={() => { setisVisible(!isVisible) }}
          onpress1={() => {
            sethomeAdress(homeAdress);
            setofficeAdress(officeAdress);
          }}

        />

      </ScrollView>
    </View>
  )
}