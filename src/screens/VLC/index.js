import React, {component,useState, useEffect } from 'react';
import {BackHandler, Text,TouchableOpacity,ScrollView, Button, StyleSheet, View} from 'react-native'
//import RNPickerSelect from 'react-native-picker-select'
//import RNExitApp from 'react-native-exit-app'
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage'


const VLCHome=({navigation})=>{
//    alert(props.userid)
    let [mid, setMid] = useState('')

    useEffect(()=>{
        AsyncStorage.getItem('uid').then(async val=>{
            // alert(JSON.parse(val)[0].title)
           //  const projectsVal = JSON.parse(val)
              await  setMid(val)
         })
    },[])
  

    const goToFaultyFacilities=(type)=>{
        //alert(type)
        navigation.navigate('faultyfacility',{type})
     //   Actions.projects()
    }
    const goToDrafts=()=>{
        // Actions.draft()
        Actions.eg()
     }
    const goToDraft=()=>{
        navigation.navigate('vlcreportdraft')

      //  Actions.draft()
       //Actions.sol()
    }
    const goToDrafts2=()=>{
        navigation.navigate('monsandraft')

     //   Actions.draft2()
       //Actions.sol()
    }
    const goToLocationStatus=()=>{
  
        navigation.navigate('Changestatus',{mid})
     //   Actions.draft2()
       //Actions.sol()
    }
    const goToChangeRequest=(k)=>{
  
        navigation.navigate('Changerequest',{title1:k})
     //   Actions.draft2()
       //Actions.sol()
    }

    return(
        <ScrollView style={styles.scrl}>

        <View style={styles.container}>

         <TouchableOpacity style={styles.btn} onPress={()=>{goToFaultyFacilities()}}>
         <Text style={styles.txt}
         > Faulty facilities</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={()=>{goToDraft()}}>
         <Text style={styles.txt}
         > Draft </Text>
     </TouchableOpacity>
     

     </View>
     <View style={{height:70}}/>

     </ScrollView>

    )
}
const styles=StyleSheet.create({
    
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        //height:'100%',
        width:'100%',
        marginTop:30,
      //  marginBottom:30

    },
    scrl:{
        backgroundColor: 'white',

    },
    btn:{
       marginTop:10,
        marginLeft:30,
        marginRight:30,
        padding:25,
        backgroundColor:'#00dff2',
        color: 'white',
        borderRadius:4,
         height:'15%',
         alignItems:'center',
         width:'60%',
         justifyContent:'center'

    },
    
    txt:{
        fontSize:18,
        paddingBottom:10,
        color:'white',
        
        alignItems:'center',
        textAlign:'center'

    }

})

export default VLCHome