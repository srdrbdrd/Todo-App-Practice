import React from 'react'
import {View, Text, Button, SafeAreaView,TouchableOpacity} from 'react-native'

const TodoItem = (props) => {
    
    
    
    
    
    return(
        <TouchableOpacity onPress = {props.onSelect}>
            <Text style = {{backgroundColor: props.isDone ? '#d1c4e9' : '#7c4dff',
            fontSize:18,
            borderRadius:10,
            padding:5,
            color: props.isDone ? 'grey' : 'white',
            margin:6,
            textAlign:"center",
            textDecorationLine: props.isDone ? "line-through" : "none" //listelenen textlerin isDone değerini kontrol ediyoruz true ise üstü çiziliyor.Değilse değişiklik olmuyor.
            }}>{props.todoData}</Text>
                
        </TouchableOpacity>
    )
}

export {TodoItem}