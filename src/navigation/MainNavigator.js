import * as React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Adresses from '../screens/Adresses'
import MealCredits from '../screens/MealCredits'
import OderingDetails from "../screens/OderingDetails"
import Payment from "../screens/Payment"
import OderSummary from '../screens/OderSummary'
import colors from '../theme/colors'
import First from '../screens/First'
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor={colors.WHITE} animated />
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name='First' component={First} />
                <Stack.Screen name='MealCredits' component={MealCredits} />
                <Stack.Screen name='Payment' component={Payment} />
                <Stack.Screen name='Adresses' component={Adresses} />
                <Stack.Screen name='OderingDetails' component={OderingDetails} />
                <Stack.Screen name='OderSummary' component={OderSummary} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}