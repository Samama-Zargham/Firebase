import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { PAYMENT } from '../styles/AllStyles'
import { Head } from '../components/Reusable'
export default function Payment(props) {
  return (
    <View style={PAYMENT.container}>
      <Head props={props} />
      <ScrollView>
        <View style={PAYMENT.inContainer}>
          <Text style={PAYMENT.Login}>Login</Text>
        </View>
      </ScrollView>
    </View>
  )
}