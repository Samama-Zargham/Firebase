import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ODERING, WH } from '../styles/AllStyles'
import {
    Head,
    Address,
    PRESS,
} from './Reusable';
import { OderDetail } from './OrderDetails';
import colors from '../theme/colors';
import { Icons } from './AnyIcons';
import { IconPlus } from './IconPlus';
import { ColorTxt } from './ColorText';
import Option from './AddTip';
import { PICKER } from './Picker';


const getFooter = (props) => {
    return (
        <View style={{
            backgroundColor: colors.PRIMARYFADE_COLOR,
            borderRadius: 10
        }}>
            <PRESS
                marginTop={10}
                onpress={() => { props.navigation.navigate("OderSummary") }}
                marginBottom={20}
                backColor={colors.PRIMARY}
                txtColor={colors.WHITE}
                title="Confirm Order" />
        </View>

    )
}

const getHeader = (props) => {
    const [tip, settip] = useState("$5.00")

    return (
        <ScrollView>

            <Head props={props} name="Order Details" i1 />
            <Text style={ODERING.txt}>Item Details</Text>
            <OderDetail title="Spaghetti Bolognese" type="Meal " />
            <OderDetail title="Veg & Chicken Salad" type="Large" />
            <Text style={[ODERING.txt]}>Address</Text>
            <IconPlus
                iname="location-outline"
                itype={Icons.Ionicons}
                icolor={colors.PRIMARY}
                rowTxt="My House"
            />
            <Text style={ODERING.sTxt}>31 South Glenridge Street Rome,
                Appartment#9 Floor 6, NY 13447
            </Text>
            <Text style={[ODERING.txt]}>Delivery Details</Text>

            <IconPlus
                iname="clock-time-four-outline"
                itype={Icons.MaterialCommunityIcons}
                icolor={colors.PRIMARY}
                rowTxt="Delivery Window"
            />
            <PICKER
                label="6:30 PM-8:30 PM"
                label1="6:30 PM-8:30 PM" 
            />
            <ColorTxt
                icolor={colors.PRIMARY}
                t1="$1.49"
                t2="  Delivery Fee."
            />


            <IconPlus
                iname="bicycle"
                itype={Icons.Ionicons}
                icolor={colors.PRIMARY}
                rowTxt="Estimated Delivery Time"
            />
            <Text style={[ODERING.s2Txt, { marginTop: 5 }]}>Recieve this Order by: </Text>
            <Text style={ODERING.s2Txt}>8:30 PM, 20 November 2021 </Text>

            <Text style={[ODERING.txt]}>Add Tip (Optional)</Text>
            <Option
                options={['$5.00', '$6.00', '$8.00', 'Other']}
                onChange={(option) => {
                    settip(option)
                }}
            />
            <Text style={[ODERING.txt]}>Redeem Voucher</Text>
            <Address
                redeemPrice="$2.00"
                height={50}
                pHolder="Enter Redeem Code"
                backColor={colors.FIELD} />
            <PRESS
                marginTop={15}
                onpress={() => { alert("incorrect code") }}
                marginBottom={30}
                width={190}
                backColor={colors.PRIMARY}
                txtColor={colors.WHITE}
                title="Redeem" />
        </ScrollView >

    )
}

export { getFooter, getHeader }