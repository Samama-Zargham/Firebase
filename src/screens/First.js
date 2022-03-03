import { Text, Pressable, View } from 'react-native'
import React from 'react'
import colors from '../theme/colors'

export default function First(props) {
    return (
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: colors.PRIMARYFADE_COLOR }}>
            <Pressable
                style={{
                    backgroundColor: colors.PRIMARY,
                    padding: 10,
                    width: "60%",
                    alignSelf: "center",
                    borderRadius: 5,
                    elevation: 10, 
                }}
                onPress={()=> {props.navigation.navigate("MealCredits")}}
            >
                <Text style={{
                    color: colors.WHITE,
                    fontWeight: "bold",
                    fontSize: 18,
                    alignSelf: "center"
                }}
                >Get Started</Text>
            </Pressable>
        </View>
    )
}