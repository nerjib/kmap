import React, {useState, useEffect} from 'react';
import {Button,TextInput, View, Text,TouchableOpacity, StyleSheet,ScrollView,} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
//import RNPickerSelect from 'react-native-picker-select'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Picker} from '@react-native-community/picker'



const FaultyFacility =({navigation})=>{
let [ data, setData] = useState('')
let [projects, setProjects] = useState('')
let [phase, setPhase] = useState('6d')
let [lot, setLot] = useState('')
let [title, setTitle] = useState('Community Borehole')
let [lga, setLga] = useState('Birnin Gwari')
let [uid, setUid] = useState('')
let [mon, setmon] = useState('')


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
    axios.get('https://ruwassa.herokuapp.com/api/v1/vlc')
    .then(res=>{
        AsyncStorage.setItem('vlcfacility', JSON.stringify(res.data))
    })
    AsyncStorage.getItem('vlcfacility').then(val=>{
 //       alert(JSON.parse(val)[0].title)
        const projectsVal = JSON.parse(val)
        setProjects(projectsVal)
    })
    AsyncStorage.getItem('uid').then(async val=>{
       // alert(JSON.parse(val)[0].title)
      //  const projectsVal = JSON.parse(val)
   await   setUid(val)
    })

    AsyncStorage.getItem('uid').then(val=>{
        // alert(JSON.parse(val)[0].title)
       //  const projectsVal = JSON.parse(val)
       setmon(val)
     })

}, [])

const  GotoReport=(e,title,community,lga,ward,lot,phase)=>{
   // return alert(lot)
    //    alert(this.state.mid)
    navigation.navigate('vlcreport',{mid:uid,pid:e,title,community,lga,mon,ward,lot,phase})
}


let row=[]
if(projects){
Object.keys(projects).map((e,i)=>{
//    if((projects[e].state_id==uid || projects[e].local_id==uid) && projects[e].done==='0'){
   // if(projects[e].phase==='6d'){

row.push(<TouchableOpacity key={i} style={styles.row} onPress={()=>GotoReport(projects[e].pid,
projects[e].title,projects[e].community,projects[e].lga,projects[e].ward,
projects[e].lot,projects[e].phase)}>

            <Text ><Text style={styles.txtl}>{projects[e].community}<Text style={styles.sep}>|</Text>                
            </Text>
            <Text style={styles.txtl}>{projects[e].ward}<Text style={styles.sep}>|</Text>
            
            </Text>
            <Text style={styles.txtl}>{projects[e].lga}<Text style={styles.sep}></Text>
            
            </Text>
            </Text>
            <Text  style={styles.txtname}>
            <Text  > {projects[e].title} </Text>
            <Text  style={styles.txtphase} > Phase {projects[e].phase} </Text>
            </Text>
<Text style={styles.txtm}>Problem: {projects[e].problem}</Text>
<Text style={styles.txtm}>Problem duration: {projects[e].problemduration}</Text>
<Text style={styles.txtm}>remark: {projects[e].remark}</Text>

            
</TouchableOpacity>)
    //}
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
        </View>
        </ScrollView>
    )


}

export default FaultyFacility

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
txtm:{
    fontSize:25,
    color:'blue'
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
