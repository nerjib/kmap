import React from 'react';
import {Button,TextInput,Image, AsyncStorage, View, Text,TouchableOpacity, StyleSheet,ScrollView, KeyboardAvoidingView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
//import RNPickerSelect from 'react-native-picker-select'
//import * as ImagePicker from 'expo-image-picker';
//import Constants from 'expo-constants';
//import * as Permissions from 'expo-permissions';
import ProgressLoader from 'rn-progress-loader';
//import ImageResizer from 'react-native-image-resizer'
//import { Asset } from "expo-asset";
//import * as ImageManipulator from "expo-image-manipulator";
import {Table, Row,Rows} from 'react-native-table-component'

export default class LocationStatus extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tableview:'none',
            tableHead: ['community','ward','status'],
        }
    }

componentDidMount=()=>{
    const {params} = this.props.route
    axios.get('https://ruwassa.herokuapp.com/api/v1/changeoflocation/myrequest/'+params.mid)
        .then(res=>{
            this.setState({receivedData:res.data})
        })
}


render (){
    let data2 = []
   if(this.state.receivedData){
Object.keys(this.state.receivedData).map((e,i)=>data2.push([this.state.receivedData[e].newcommunity,this.state.receivedData[e].newward,this.state.receivedData[e].changestatus ]))
} 
const {params} = this.props.route

  return (
      
        <ScrollView>
            <Text>{this.state.norecord}</Text>
            <View>
            <ProgressLoader visible={this.state.visible} isModal={true} isHUD={true}
            hudColor={"#000000"} color={"#FFFFFF"}/>
                <Table>
                    <Row data={this.state.tableHead}/>
                    <Rows data={data2}/>
                </Table>
            </View>
                    </ScrollView>
    )
}

//end
}
     
   

