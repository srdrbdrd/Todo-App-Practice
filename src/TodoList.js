import React, {useState} from 'react'
import {View, Text, Button, SafeAreaView,FlatList,Dimensions} from 'react-native'

import {Input, TodoItem } from './component/'

const TodoList =  (props) =>{
    const  [todoList,setTodoList] = useState([])
    const [todoText,setTodoText] = useState("")
    

    const setText = (text) =>{
        setTodoText(text)
    }

    const addTodo = () =>{
        let newArray = [...todoList]

        newArray.push({todoName: todoText, isDone: false})
        setTodoList(newArray)
        setTodoText("") //Her yeni todo ekledikten sonra textinput değerini temizliyorum.
        
    }

    function todoSelect(id){
        let newArray = [...todoList]
        newArray[id].isDone = !newArray[id].isDone
        setTodoList(newArray)
    }

    const renderTodo = ({item, index}) =>{
        return(
            <TodoItem todoData = {item.todoName} isDone = {item.isDone} onSelect = {() => todoSelect(index)}/>
        )//todoData görünen text datası.todoName array değerinin string değeri.isDone textDecorationLine için true false değerini kontrol ediyor.Ardından todoSelect ile array yeniden oluşturuluyor.
    }

    const ListEmpty = () => { //Eğer liste boş ise bu view ekrana gelecek.
        return (
            <View style = {{flex:1}}>
          
            <Text style={{ textAlign: 'center',
            justifyContent:'center',
            marginTop:Dimensions.get('window').height*0.4,
            fontSize:18 }}>Add some Todo</Text>
          </View>
        );
      };


    return(

        <SafeAreaView style = {{flex:1}}> 
            <View style = {{flex:1}}>
                
                <FlatList 
                    keyExtractor = {(item,index) => index.toString()}
                    data = {todoList} //veriler todoList state inden alınıyor.
                    renderItem = {renderTodo} 
                    ListEmptyComponent = {ListEmpty} //bütün işlemlerden sonra bir değer dönmüyorsa bu view devreye girecek.
                    
                    
                />
                
                <Input
                    todoText = {todoText} 
                    onEnterText = {setText}
                    onOkay = {addTodo}
                />

                
            </View>
        </SafeAreaView>
    
    )




}



export default TodoList