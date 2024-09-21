import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import useFormInput from '../hooks/useFormInput'

const Form = () => {

    const nameInput = useFormInput("")
    const emailInput = useFormInput("")

    const handleSubmit = () => {

        console.log("Name : ", emailInput.value);
        console.warn("Name : ", nameInput.value.toString());

    }

    return (
        <View>

            <Text>Name : </Text>

            <TextInput placeholder='Enter name' value={nameInput.value}
                onChange={nameInput.change} />

            <Text>Name : </Text>
            <TextInput placeholder='Enter Email' value={emailInput.value}
                onChange={emailInput.change} keyboardType='email-address' />

            <Button title='Submit Data' onPress={handleSubmit}></Button>

        </View>
    )
}

export default Form

const styles = StyleSheet.create({})