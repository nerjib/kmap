import React, {useState, useEffect} from 'react';
import {Button,TextInput, View, Text,TouchableOpacity, StyleSheet,ScrollView,} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
//import RNPickerSelect from 'react-native-picker-select'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Picker} from '@react-native-community/picker'
import ProgressLoader from 'rn-progress-loader'



const ChangeRequest =({navigation, route})=>{
let [ data, setData] = useState('')
let [projects, setProjects] = useState('')
let [phase, setPhase] = useState('6d')
let [lot, setLot] = useState('')
let [title, setTitle] = useState('Community Borehole')
let [lga, setLga] = useState('Birnin Gwari')
let [uid, setUid] = useState('')
let [mon, setmon] = useState('')
let [visible, setVisible] = useState(false)


const handleTitle=(e)=>{
   setTitle(e)
}

const handlePhase=(e)=>{
   setPhase(e)
}

const handleLga=(e)=>{
   setLga(e)
}

useEffect(()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/changeoflocation/requestbydept')
    .then(res=>{
        setProjects(res.data)
      //  AsyncStorage.setItem('projects', JSON.stringify(res.data))
    }).catch(e=>{alert(e)})       

}, [])

const loader=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/changeoflocation/requestbydept')
    .then(res=>{
        setProjects(res.data)
      //  AsyncStorage.setItem('projects', JSON.stringify(res.data))
    }).catch(e=>{alert(e)})
}
const UpdateAcceptedLocation=(pid,community,ward,status)=>{
    setVisible(true)
    const data = {
        pid, community, ward, status
    }
    axios.put('https://ruwassa.herokuapp.com/api/v1/changeoflocation/approvedrequest',data)
    .then(res=>{
        axios.put('https://ruwassa.herokuapp.com/api/v1/changeoflocation/requestrespond',data)
    .then(res=>{
        loader()
        setVisible(false)

    }).catch(e=>{
        setVisible(false)

        alert(e)})

    }).catch(e=>{
        setVisible(false)
        alert(e)})

   // return alert(status)
    //    alert(this.state.mid)
//    navigation.navigate('taskdetails',{uid,pid:e,title,community,lga,mon,contractor:company,ward,lot,phase,lgsup,statesup})
}


const UpdateRejectedLocation=(pid,community,ward,status)=>{
    setVisible(true)
    const data = {
        pid, community, ward, status
    }
  
        axios.put('https://ruwassa.herokuapp.com/api/v1/changeoflocation/requestrespond',data)
    .then(res=>{
        loader()
        setVisible(false)

    }).catch(e=>{
        setVisible(false)

        alert(e)})

  

   // return alert(status)
    //    alert(this.state.mid)
//    navigation.navigate('taskdetails',{uid,pid:e,title,community,lga,mon,contractor:company,ward,lot,phase,lgsup,statesup})
}


const FlatListSeparator=()=>{
    return(
        <View style={{height:1.0, backgroundColor:'green', width:'100%'}}/>
    )
    };

let row=[]
if(projects){
Object.keys(projects).map((e,i)=>{
    if(route.params.title1=='sanitation1'){
    if(projects[e].title==='Sanitation'){
   // if(projects[e].phase==='6d'){

row.push(
    
        <View>
            <Text>Ward: {projects[e].title + route.params.title1}</Text>

<Text  >Community: {projects[e].community}       
</Text>

<Text>Ward: {projects[e].ward}</Text>
<Text>Column: {projects[e].lga}</Text>
<Text>New community: {projects[e].newcommunity}</Text>
<Text>New Ward: {projects[e].newward}</Text>
<Text>Reason: {projects[e].reason}</Text>
<View style={{flexDirection:'row'}}>
<Button title='Accept' style={{color:'red'}} onPress={()=>{UpdateAcceptedLocation(projects[e].pid,projects[e].newcommunity,projects[e].newward,'Accepted')}}/><Button title='Decline' onPress={()=>{UpdateRejectedLocation(projects[e].pid,projects[e].community,projects[e].ward,'Rejected')}}/>
</View>
<FlatListSeparator/>
</View>
)
    }
}else{

    if(projects[e].title==='Motorized Solar Borehole' || projects[e].title==='Community Borehole' || projects[e].title==='Force Lift Borehole' ){
        // if(projects[e].phase==='6d'){
     
     row.push(
         
             <View>
                             <Text>Ward: {projects[e].title + route.params.title1}</Text>

     <Text  >Community: {projects[e].community}       
     </Text>
     
     <Text>Ward: {projects[e].ward}</Text>
     <Text>Column: {projects[e].lga}</Text>
     <Text>New community: {projects[e].newcommunity}</Text>
     <Text>New Ward: {projects[e].newward}</Text>
     <Text>Reason: {projects[e].reason}</Text>
     <View style={{flexDirection:'row'}}>
     <Button title='Accept' style={{color:'red'}} onPress={()=>{UpdateAcceptedLocation(projects[e].pid,projects[e].newcommunity,projects[e].newward,'Accepted')}}/><Button title='Decline' onPress={()=>{UpdateRejectedLocation(projects[e].pid,projects[e].community,projects[e].ward,'Rejected')}}/>
     </View>
     <FlatListSeparator/>
     </View>
     )
         }

}
})
}


    let facility=['Community Borehole', 'Motorized Solar Borehole', 'Force Lift', 'Sanitation']
    let lgas=['Birnin Gwari','Giwa','Igabi','Ikara','Jaba','Jemaa','Kachia',
    'Kaduna North','Kaduna South','Kagarko','kajuru','Kaura','Kauru','Kubau',
    'Kudan','Lere','Makarfi','Sabon Gari','Sanga','Soba','Zangon Kataf','Zaria']
  
    return(

        <ScrollView>
        <View>
                {row
            }
         {//}   <Button onPress={this.search} title='search'/>
}
<View style={{height:70}}/>
<ProgressLoader visible={visible} isModal={true} isHUD={true}
            hudColor={"#000000"} color={"#FFFFFF"}/>
        </View>
        </ScrollView>
    )


}

export default ChangeRequest

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
       // justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#00e9f9',
        //height:'100%',
        width:'100%',
        marginTop:30,
      //  marginBottom:30
    
    },
    
    row:{
     
        marginTop:2,
        marginLeft:10,
        marginRight:10,
     //   height:60,
        padding:0,
        alignContent:'center',
        backgroundColor:'#00dff2',
        borderRadius:4

    },
    txtname:{
        flexDirection:'column',
        textAlign:'left',
        fontSize:15,
        color:'white',
        alignItems:'center',

    },
    txtphase:{
         textAlign:'right',
        fontSize:15,
        color:'white',
        padding:50
    },
    txtloc:{
        flexDirection:'column',
        textAlign:'right',
        alignItems:'center',
       fontSize:12,
       color:'white'
   },
   txtl:{
    fontSize:30,
    color:'white'
},
   txtstat:{
       margin:20,
       color:'white'
   },
   sep:{
       color:'#b1fff5',
       fontSize:20

   }

})
