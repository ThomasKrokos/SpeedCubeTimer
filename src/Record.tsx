import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Record = (props) => {
    const record = props.record
    const getTime = props.getTime
if(record != 0)
    return (
        <Text>Fastest solve: {getTime(record)}</Text>
  )
else return()
}

export default Record

const styles = StyleSheet.create({})