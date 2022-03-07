import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { PAYMENT, ODERING, WH, MEAL_STYLE } from '../styles/AllStyles'
import colors from '../theme/colors';
import AnyIcon, { Icons } from '../components/AnyIcons'


const OderDetail = (props) => {
    const [mealPrice, setmealPrice] = useState(6.99)
    const [countItem, setcountItem] = useState(1)
    return (
        <View style={[ODERING.detailView, props.type == "Meal " && { marginBottom: 15 }]}>
            <Image style={ODERING.imgD} resizeMode="contain"
                source={props.type == "Large" ? require("../assets/images/f1.png") : require("../assets/images/f2.png")} />
            <View style={{
                paddingHorizontal: 10
            }}>
                <Text style={ODERING.dTitle}>{props.title}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={ODERING.type}>{countItem} x {props.type}</Text>
                    <View style={[MEAL_STYLE.mCView, { marginLeft: 50 }]}>
                        <TouchableOpacity
                            onPress={() => countItem > 1 && setcountItem(countItem - 1)} >
                            <AnyIcon
                                name="minus-box"
                                type={Icons.MaterialCommunityIcons}
                                color={colors.PRIMARY} size={30}
                            />
                        </TouchableOpacity>

                        <Text style={ODERING.countItem}>{countItem}</Text>
                        <TouchableOpacity
                            onPress={() => countItem < 6 && setcountItem(countItem + 1)}>
                            <AnyIcon
                                name="plus-box"
                                type={Icons.MaterialCommunityIcons}
                                color={colors.PRIMARY} size={30}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{
                    color: colors.PRIMARY,
                    fontSize: 16,
                    fontWeight: "500"
                }}>${mealPrice * countItem}</Text>

            </View>
        </View>
    )
}

export { OderDetail }