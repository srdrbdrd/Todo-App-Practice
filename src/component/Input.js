import React from 'react'
import {SafeAreaView, Text, View, TextInput,TouchableOpacity, Button} from 'react-native'
import styles from '../styles' //stil dosyasını çekiyoruz



const Input = (props) => {
    return(
        <View style = {styles.inputItem.Container}>
            
            <TextInput style = {styles.inputItem.textInput}
                placeholder = "Add new Todo"

                value = {props.todoText}
                onChangeText = {props.onEnterText} //onEnterText metodunu bağlıyoruz
            />
            
            <TouchableOpacity style = {styles.inputItem.buttonContainer} onPress = {props.onOkay}>
                <Text style = {{color:'white'}}>+</Text>
            </TouchableOpacity>
            
                

            
            
        </View>
    )
}

export {Input}