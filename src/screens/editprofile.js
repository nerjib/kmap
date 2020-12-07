import React, { Components } from 'react';
import {AsyncStorage, View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import ProgressLoader from 'rn-progress-loader' ;
import {Picker} from '@react-native-community/picker'



export default class EditProfile extends React.Component {
state={
email:'',
password:'',
password2: '',
pword: '',
lga: 'Birnin Gwari',
fname:'',
lname: '',
oname:'',
phone: '',
id:'',
visible: false,
warning:'',
btn:false,
gender:'',
address:'',
uid:'',
actno:'',
bank:''
}


componentDidMount=()=>{
    const {params} = this.props.route
this.setState({uid:params.uid})
    axios.get('https://ruwassa.herokuapp.com/api/v1/users/'+params.uid)
    .then(res=>{
     //   alert(JSON.stringify(res.data))
        this.setState({
            fname:res.data[0].first_name,
            lname:res.data[0].last_name,
            oname: res.data[0].other_name,
            actno: res.data[0].actno,
            bank: res.data[0].bank,
        })
    }).catch(e=>{alert(e)})
 
}
handleChangePhone =(text)=>{
this.setState({
phone: text
})
}
   handleChangePass = (text)=>{
       this.setState({
           password:text
       })
   }
   handleChangePass2 = (text)=>{
    this.setState({
        password2:text
    })
    if(this.state.password==text){
        this.setState({pword:this.state.password, warning:'', btn:true})
    }else{
        this.setState({warning:'Password not match', btn:false})
    }
}
handleChangeFname = (text)=>{
    this.setState({
        fname: text
    })
}
handleChangeLname = (text)=>{
    this.setState({
        lname: text
    })
}
handleChangeOname = (text)=>{
    this.setState({
        oname: text
    })
}

handleChangeEmail = (text)=>{
    this.setState({
        email: text
    })
}

  goToHome=(userid)=>{
    Actions.Home({userid})
}
    saveUserId=async userId=>{
        try {
            await AsyncStorage.setItem('userId', userId);
      1  }catch(error) {
            alert(error.message)
        }
    }

Update=()=>{
  //alert('HelloEmail: '+a+' check your  Password and try again '+b)

this.setState({
    visible:true
})
const data = {
    act: this.state.actno,
    bank: this.state.bank,
    fname: this.state.fname,
    lname: this.state.lname,
    oname: this.state.oname,
  
}

axios.put('https://ruwassa.herokuapp.com/api/v1/users/updatebank/'+this.state.uid,data).then(res=>{
       alert('Account updated successfully  ')
    //  AsyncStorage.setItem('uid', (res.data.data.id))
      // AsyncStorage.setItem('mon', (res.data.data.first_name+' '+res.data.data.last_name))
     //  AsyncStorage.setItem('email', JSON.stringify(res.data[0].email))
       //AsyncStorage.setItem('phone', (res.data.data.phone))
      //AsyncStorage.setItem('login','granted1')
  this.props.navigation.navigate('myhome');
     // alert(res.data[0].id)
     this.setState({
        visible:false
    })
   }  
    ).catch(error=>{
        this.setState({
            visible:false
        })
        alert(error)
})
   //alert('wrong combination')


}

check=()=>{
    AsyncStorage.getItem('email').then((val)=>alert(val))
    AsyncStorage.getItem('pass').then((val)=>alert(val))
Actions.async();
}

updateLGA=(text)=>{
        this.setState({
            lga:text
        })
}
handleChangeWord=(text)=>{
    this.setState({
        ward:text
    })
}
handleChangeGender=(text)=>{
    this.setState({
        gender:text
    })
}
handleChangeAddress=(text)=>{
    this.setState({
        address:text
    })
}
render(){
    const lgas=['Birnin Gwari','Giwa','Igabi','Ikara','Jaba','Jemaa','Kachia',
    'Kaduna North','Kaduna South','Kagarko','Kajuru','Kaura','Kauru','Kubau',
    'Kudan','Lere','Makarfi','Sabon Gari','Sanga','Soba','Zangon Kataf','Zaria']
    const gender=['Male','Female']
    return(
        <ScrollView>
        <View style={styles.container}>

            
        <TextInput style={styles.input} 
            underlineColorAndroid ="transparent"
            placeholder="First Name"
            onChangeText={(value)=>{this.setState({fname:value})}}
            value={this.state.fname}
              // password={true}         
            /> 
            <TextInput style={styles.input} 
                        value={this.state.lname}

            underlineColorAndroid ="transparent"
            placeholder="Last Name"
            onChangeText={(value)=>{this.setState({lname:value})}}
              // password={true}         
            /> 
               <TextInput style={styles.input} 
            underlineColorAndroid ="transparent"
            placeholder="Other Name"
            onChangeText={(value)=>{this.setState({oname:value})}}
            value={this.state.oname}

              // password={true}         
            /> 

            <TextInput style={styles.input}
            underlineColorAndroid ="transparent"
            placeholder="Account number"
            onChangeText={(value)=>{this.setState({actno:value})}}
            value={this.state.actno}

            />
    <TextInput style={styles.input}
            underlineColorAndroid ="transparent"
            placeholder="Bank"
            onChangeText={(value)=>{this.setState({bank:value})}}
            value={this.state.bank}

            />
     
    
            <Text>{this.state.warning}</Text>
       {     <TouchableOpacity style={styles.submitbutton}
            onPress={()=>this.Update()}>
            <Text style={styles.text}>Update</Text>

            </TouchableOpacity>}

           <View style={{flexDirection:'row', marginLeft:10}}>
           </View>
            <ProgressLoader visible={this.state.visible} isModal={true} isHUD={true}
            hudColor={"#000000"} color={"#FFFFFF"}/>
            
        </View>
        <View style={{height:40}}/>
        </ScrollView>
    )
}
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 23
    },
    input:{
        margin:15,
        height:40,
        borderColor: 'grey',
        borderWidth:1
    },
    submitbutton:{
        padding:10,
        margin:15,
        height:42,
        alignItems:'center',
        borderRadius:7,
        backgroundColor:'#00a1ff',
        color: 'white',
         justifyContent:'center'
    },
    text:{
        color:'white',
        fontSize:25,
        
    }

})