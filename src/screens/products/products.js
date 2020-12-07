import React, {Component, useState, useEffect} from 'react';
import { StyleSheet,Text,TextInput, Dimensions,View,FlatList, ScrollView,TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import * as Contacts from 'expo-contacts';



const Products =({navigation, route})=>{

    
const FlatListSeparator=()=>{
    return(
        <View style={{height:0.5, backgroundColor:'green', width:'100%'}}/>
    )
    };

    return(

        <View style={{flex:1}}>
          
           <TouchableOpacity onPress={()=>navigation.navigate('addproduct')} style={{height:40}}>
               <Text style={{height:40, fontSize:40, textAlign:'center', fontStyle:'italic'}}>
                   +
               </Text>

           </TouchableOpacity>
         
           <View style={styles.box2}>
           <TouchableOpacity style={styles.box3}>
           </TouchableOpacity>
           <Text>Product Name | Price</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        paddingTop:45,
        backgroundColor: '#f0f0f4',
      /*  flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00e9f9',
        height: '100%',
        width:'100%'*/
    },
    header:{
        fontSize: 25,
        textAlign:'left',
        margin:10,
        fontWeight:'bold'
    },
    box:{
        margin:10,
        height:40,
        borderColor: 'grey',
        borderBottomWidth:3,
        width:'90%',
        marginRight:20,
        borderRadius:4
    },
    box1:{
        margin:10,
        height:60,
        borderColor: 'grey',
        borderWidth:1,
        borderBottomWidth:2,
        width:'90%',
        marginRight:20,
        display:'flex',
        borderRadius:4
    },
    box3:{height:200, width:'50%', borderRadius:10,  alignSelf:'center',
     backgroundColor:'#004f54'},
     box2:{height:250, width:'90%',paddingTop:20, alignContent:'center', borderRadius:0,  alignSelf:'center',
      backgroundColor:'grey'},


})

export default Products;