import { View, Text } from 'react-native'
import React from 'react'
import Header from '../src/Header'
import Stories from '../src/Stories'

const Dashboard = () => {
  return (
    <View  style={{flex:1,}}>
        <Header />
        <Stories />
    </View>
  )
}

export default Dashboard