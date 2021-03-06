import React, { Component } from 'react';
 
import {
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Picker} from '@react-native-community/picker'
//import { WebView} from 'react-native-webview'
 import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
//import RNHTMLtoPDF from 'react-native-html-to-pdf';
 import * as Print from 'expo-print'
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import ProgressLoader from 'rn-progress-loader'
import * as ImageManipulator from "expo-image-manipulator";
import axios from 'axios';
import Geolo from  '../geo'


const radio_props = [
  {label: 'yes', value:'yes'},
  {label: 'no', value:'no'}
]
const radio_props2 = [
  {label: 'Indian Mark II', value:'Indian Mark II'},
  {label: 'Indian Mark III', value:'Indian Mark III'},
  {label: 'Afridev', value:'Afridev'}

]

const radio_props3 = [
    {label: 'Vertical', value:'Vertical'},
    {label: 'Horizontal', value:'Horizontal'}
     
  ]
  const radio_props4 = [
    {label: 'Very good', value:'Very good'},
    {label: 'good', value:'Good'},
    {label: 'Poor', value:'Poor'}  ,
    {label: 'Very poor', value:'Very poor'}
  ]
  const radio_props5 = [
    {label: 'Black', value:'Black'},
    {label: 'Blue', value:'Blue'},
    {label: 'Red', value:'red'},
    {label: 'green', value:'green'},
    {label: 'brown', value:'yellow'},
    {label: 'white', value:'white'},
    {label: 'cream', value:'cream'},
    {label: 'mixed', value:'mixed'},
    {label: 'others', value:'others'}

  ]
  
/*
  const Sanitation=({route})=>{

    return(
        <Text>
            {route.params.lga}
        </Text>
    )
  }
  export default Sanitation
  
  */

export default class VLCReport extends Component {
  constructor(props){     
    super(props)
    this.state={
        functionality:'',
        functionalityview: 'none',
        problem:'',
        problemduration:'',
        remark:'',
        cause:'',
      setback:'',
      structure:'',
      cdate:'',
      usage:'',
      restoration:'',
      distance:'',
      area:'',
      pitarea:'',
      compartment:'',
      urinals:'',
      nourinals:'',
      tiled: '',
      laterinet: '',
      tilequality: '',
        tilec:'',
      nobasins:'',
      washbasins:'',
      physicallyaid:'',
      door:'',
      gauge:'',
      antirust:'',
      subs:'',
      slabs:'',
      pit:'',
      crack:'',
      crackt: '',
      defect: '',
      sdefect: '',
      rendered:'',
      sandblast: '',
      artwork: '',
      tank: '',
      tankembeded: '',
      tankcap: '',
      tankc: '',
      soakpit: '',
      urinalpit:'',
      pic1:'',
      pic2:'',
      pic3:'',
      pic4:'',
      imgurl1:'',
      imgurl2:'',
      imgurl3:'',
      imgurl4:'',      
      imgurl1C:'',
      imgurl2C:'',
      imgurl3C:'',
      imgurl4C:'',
      gentime:'',
      cordinate:''
    }
    this.createPDF=this.createPDF.bind(this)

  }

  async createPDF () {
    const {params} =this.props.route

 try{   
    let options = {
      html: `<html>
      <head>
          <style>
              table,th,td {border: 1px solid black}
              table{border-collapse: collapse;}
              img {width:10px, height:10px}
          </style>
      </head>
      <body>
      <div style="margin-left:15%;text-align:'right'"><b>VLC Reports</b></div>
      <div><b>General</b></div>
           <table style="width:90%">
              <thead>
                  <tr>
                      <th style="width:5%" >SN</th><th style="width:40%">Description</th><th>Site Information</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td><td>State</td><td>Kaduna</td>
                  </tr>
                  <tr>
                      <td>2</td><td>LGA</td><td>${params.lga}</td>
                  </tr>
                  <tr>
                      <td>3</td><td>Council Ward</td><td>${params.ward}</td>
                  </tr>
  
                  <tr>
                      <td>4</td><td>Reporters ID</td><td>-</td>
                  </tr>
                  <tr>
                      <td>5</td><td>Reporters Name</td><td>${params.mon}</td>
                  </tr>
  
                  <tr>
                      <td>6</td><td>Lot</td><td>${params.lot}</td>
                  </tr>
                  <tr>
                      <td>7</td><td>Community Name</td><td>${params.community}</td>
                  </tr>
                  <tr>
                      <td>8</td><td>Name/ Address of Project Location</td><td>{}</td>
                  </tr>
                  <tr>
                      <td>9</td><td>Contractor Code</td><td>-</td>
                  </tr>
  
                  <tr>
                      <td>10</td><td>Name of Contractor</td><td>${params.contractor}</td>
                  </tr>
                  <tr>
                      <td>11</td><td>Type of Facility</td><td>${params.title}</td>
                  </tr>
  
              </tbody>
          </table>
          <br/>
          <table table style="width:90%">
          <thead>
              <tr>
                  <th style="width:5%"></th><th  style="width:40%"> Information</th><th></th>
              </tr>
          </thead>
          <tbody>
      
              <tr>
                  <td>12</td><td>Is the facility functioning properly?</td>
                  <td>${this.state.functionality}</td>
               </tr>
               <tr>
                   <td>13</td><td>Structure: Problem Description</td><td>${this.state.problem}</td>
               </tr>
               <tr>
                   <td>14</td><td>Structure: Cause of problem</td><td>${this.state.cause}</td>
               </tr>
              <tr>
                  <td>15</td><td>Duration since facility started having problem</td><td>${this.state.problemduration}</td>
               </tr>
               <tr>
                  <td>15</td><td>Remark</td><td>${this.state.remark}</td>
              </tr>
        <tr>
          <td></td><td><b>Capture</b></td><td><b>Details</b></td>
       </tr>
       <tr>
          <td>49</td><td>Cordinate</td><td>${this.state.cordinate}</td>
       </tr>
       <tr>
          <td>50</td><td>Picture 1 <i>(site Overview)</i></td><td><img width="100" height="100" src='${this.state.pic1}'></img></td>
       </tr>
       <tr>
          <td></td><td>Picture 2 <i>(capture inside of female block showing urinals and compartment)</i></td>
          <td><img width="100" height="100" src='${this.state.pic2}'></img></td>
       </tr>
      </tbody>
      </table>
      Generated on ${new Date()}
              <b><u> </u></b>
          </body>
      </html>      `,
      fileName: 'test',
      directory: 'Documents',
    };
 
    //let file = await RNHTMLtoPDF.convert(options)
    let file = await Print.printToFileAsync(options)
      const permission = await MediaLibrary.requestPermissionsAsync();
      if(permission.granted){
      //  await MediaLibrary.createAssetAsync(file.uri)
        let myfile= await MediaLibrary.createAssetAsync(file.uri)
        //  alert(myfile.uri)
          await MediaLibrary.createAlbumAsync('ruwassa file',myfile)
   
      }
    // console.log(file.filePath);
   // alert('Sent, PDF copy saved in documents')    

  
}catch(e){
  alert(e)
}
}

savetoDraft=()=>{
    if(this.state.pic1==''){
        return alert('no image 1')
    }
    //   if(this.state.imgurl1C=='done' & this.state.imgurl2C=='done' & this.state.imgurl3C=='done'){
          // return alert(JSON.stringify(draftdata))
           AsyncStorage.getItem('VLCdraft').then(val=>{
            const {functionality, problem, problemduration,remark,cause,
                setback, structure,cdate,usage,restoration,distance,
                area, pitarea,compartment,urinals,nourinals,tiled,laterinet,
                tilequality,  tilec,nobasins,washbasins,physicallyaid,door,gauge,antirust,
                subs,slabs,pit,crack,crackt,defect,sdefect,rendered,sandblast,artwork,
                tank,tankembeded,tankcap,tankc,soakpit,urinalpit,pic1,pic2,pic3,pic4,imgurl1,
                imgurl2,imgurl3,imgurl4,cordinate} = this.state
                const {params} = this.props.route
                               const myData=
               {pid:params.pid,gentime:new Date(),  community:params.community, title:params.title,lga:params.lga,mid:params.uid, mon:params.mon,
                functionality, problem, problemduration,remark,cause,
                setback, structure,cdate,usage,restoration,distance,
                area, pitarea,compartment,urinals,nourinals,tiled,laterinet,
                tilequality,  tilec,nobasins,washbasins,physicallyaid,door,gauge,antirust,
                subs,slabs,pit,crack,crackt,defect,sdefect,rendered,sandblast,artwork,
                tank,tankembeded,tankcap,tankc,soakpit,urinalpit,pic1,pic2,pic3,pic4,imgurl1,
                imgurl2,imgurl3,imgurl4,cordinate
               }
             
               if(val=='empty' || val==null){
                   alert('emp')
                   AsyncStorage.setItem('VLCdraft', JSON.stringify([myData]))
                   this.createPDF()
                   alert('Saved in draft, pdf file saved in documents')
                }else{
                 //  alert(JSON.stringify(val))
       
                   const myDraftData = JSON.parse(val);
                  // alert(myDraftData)
                   myDraftData.push(myData)
                   AsyncStorage.setItem('VLCdraft',JSON.stringify(myDraftData))
                   this.createPDF()
   
                   alert('saved in draft, PDF saved in document')
                   this.props.navigation.navigate('Home')

       
               }
           })
   }
   
   handleGps=(gps)=>{
    this.setState({
        cordinate:gps
    })
}

handlefunctionality=(e)=>{
  
        this.setState({
            functionality: e
        })
        if(e=='no'){
            this.setState({
                functionalityview: 'flex'
            })
        }else{
            this.setState({
                functionalityview: 'none'
            })
        }
    
}
  render() {
    const {params} =this.props.route

    return(
      <ScrollView style={styles.container}>
      <View>
    <Text>{params.title+' '+ params.community+' '+ params.lga}</Text>
          <Geolo onGps={this.handleGps}/>

            <Text>Has the problem been fixed?</Text>
               <RadioForm 
        radio_props={radio_props}
        formHorizontal={true}
        labelHorizontal={false}
        initial={-1}
        animation={false}
        onPress={this.handlefunctionality}
        />
  <Text>Please state the cause</Text>
      <TextInput style={styles.box} value={this.state.cause}  onChangeText={(value)=>{this.setState({cause:value})}}/>

<Text>Remark</Text>
      <TextInput style={styles.box} value={this.state.remark} onChangeText={(value)=>{this.setState({remark:value})}}/>

        <View style={styles.row}>
         <Image source={{uri: this.state.pic1}}
       style={{width: 70, height: 100}} />
         <Image source={{uri: this.state.pic2}}
       style={{width: 70, height: 100}} />
  <Image source={{uri: this.state.pic3}}
       style={{width: 70, height: 100}} />
       <Image source={{uri: this.state.pic4}}
       style={{width: 70, height: 100}} />


</View>
<View style={{marginBottom:20}}>
<Button style={{margin:4}}  onPress={this._takePhoto}   title="Capture site overview showing the whole facility" />
</View>
<View style={{marginBottom:20}}>
 <Button  style={{marginTo:4}}  onPress={this._takePhoto2}  title="Capture where facility is having problem"/>
 </View>
        <View >
          <TouchableOpacity onPress={this.handleSend} style={styles.updbtn}><Text style={styles.btntxt}>Send Report</Text></TouchableOpacity>
      </View>
      <View >
          <TouchableOpacity onPress={this.savetoDraft} style={styles.updbtn}><Text style={styles.btntxt}>Save to draft</Text></TouchableOpacity>
      </View>
      <ProgressLoader visible={this.state.visible} isModal={true} isHUD={true}
            hudColor={"#000000"} color={"#FFFFFF"}/>
    
              </View>
      <View style={{height:50}}/>
      </ScrollView>
    )
  }

  _takePhoto = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [4, 3],
      });

  this._handleImagePicked(pickerResult);
     // const manipResult = await this._CompressImg(pickerResult.uri)
    

    }
  };

  
  _handleImagePicked = async pickerResult => {

    try {
      this.setState({
          uploaded:'',
          visible:false
      });

      if (!pickerResult.cancelled) {
        const manipResult = await this._CompressImg(pickerResult.uri)

this.setState({
pic1:manipResult,
uploadedimg:'done',
visible:false
})

      }else{this.setState({uploaded:'cancelled'})}
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert('Upload failed, sorry :(');
      this.setState({
        uploaded:'failed',
        visible:false
    });
    } finally {
      this.setState({
        uploading: false
      });
    }
  };

  _takePhoto2 = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [4, 3],
      });

  this._handleImagePicked2(pickerResult);
     // const manipResult = await this._CompressImg(pickerResult.uri)
    

    }
  };

  
  _handleImagePicked2 = async pickerResult => {

    try {
      this.setState({
          uploaded:'',
          visible:false
      });

      if (!pickerResult.cancelled) {
        const manipResult = await this._CompressImg(pickerResult.uri)

this.setState({
pic2:manipResult,
uploadedimg:'done',
visible:false
})

      }else{this.setState({uploaded:'cancelled'})}
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert('Upload failed, sorry :(');
      this.setState({
        uploaded:'failed',
        visible:false
    });
    } finally {
      this.setState({
        uploading: false
      });
    }
  };

  _takePhoto3 = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [4, 3],
      });

  this._handleImagePicked3(pickerResult);
     // const manipResult = await this._CompressImg(pickerResult.uri)
    

    }
  };

  
  _handleImagePicked3 = async pickerResult => {

    try {
      this.setState({
          uploaded:'',
          visible:false
      });

      if (!pickerResult.cancelled) {
        const manipResult = await this._CompressImg(pickerResult.uri)

this.setState({
pic3:manipResult,
uploadedimg:'done',
visible:false
})

      }else{this.setState({uploaded:'cancelled'})}
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert('Upload failed, sorry :(');
      this.setState({
        uploaded:'failed',
        visible:false
    });
    } finally {
      this.setState({
        uploading: false
      });
    }
  };

  _takePhoto4 = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [4, 3],
      });

  this._handleImagePicked4(pickerResult);
     // const manipResult = await this._CompressImg(pickerResult.uri)
    

    }
  };

  
  _handleImagePicked4 = async pickerResult => {

    try {
      this.setState({
          uploaded:'',
          visible:false
      });

      if (!pickerResult.cancelled) {
        const manipResult = await this._CompressImg(pickerResult.uri)

this.setState({
pic4:manipResult,
uploadedimg:'done',
visible:false
})

      }else{this.setState({uploaded:'cancelled'})}
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert('Upload failed, sorry :(');
      this.setState({
        uploaded:'failed',
        visible:false
    });
    } finally {
      this.setState({
        uploading: false
      });
    }
  };



  _CompressImg = async (a) => {
    const manipResult = await ImageManipulator.manipulateAsync(
      a,
      [{ rotate: 0 }],
      { compress: 0.1, format: ImageManipulator.SaveFormat.jpeg },
    );
 //   alert(manipResult.uri);
    this.setState({
        uri:manipResult.uri
    })
    return manipResult.uri
  };


  handleSend=()=>{
      this.setState({gentime: new Date()})
    this._handlePick(this.state.pic1)
}
_handlePick = async pickerResult => {
    if(pickerResult==''){
        return alert('no image 1')
    }
  let uploadResponse, uploadResult, uploadResponse2, uploadResult2,uploadResponse3, uploadResult3,uploadResponse4, uploadResult4;

  try {
    this.setState({
        uploaded:'loading...',
        visible:true
    });
    if (pickerResult) {
   
     //  alert(pickerResult)
      uploadResponse = await uploadImageAsync(pickerResult,1,1);
      uploadResult = await uploadResponse.json();
    // alert(uploadResult[0].imgurl)
     if(uploadResult[0].imgurl!=null){
      //   return alert('1 done')
      this.setState({
                  imguri1:pickerResult,
                     uploaded:'done',
                     visible:false,
                     imgurl1:uploadResult[0].imgurl,
        image: uploadResult.location,
        imgurl1C:'done'
      });

      if(this.state.pic2){
          this.setState({
              uploaded:'loading...',
              visible:true
         })
          uploadResponse = await uploadImageAsync(this.state.pic2,1,1);
          uploadResult = await uploadResponse.json();
       //  alert(uploadResult[0].imgurl)
         if(uploadResult[0].imgurl!=null){
    //  return   alert('2 done')
          this.setState({
                      imguri:pickerResult,
                         uploaded:'done',
                         visible:false,
                         imgurl2:uploadResult[0].imgurl,
            image: uploadResult.location,
            imgurl2C:'done'
          });       
      }     

      }else{
          this.setState({
              imgurl2C:'done'
          })
      }
      if(this.state.pic3){
          this.setState({
              uploaded:'loading...',
              visible:true
         })
          uploadResponse= await uploadImageAsync(this.state.pic3,1,1);
          uploadResult = await uploadResponse.json();
        // alert(uploadResult[0].imgurl)
         if(uploadResult[0].imgurl!=null){
           //return alert('3 done')
          this.setState({
                      imguri3:pickerResult,
                         uploaded:'done',
                         visible:false,
                         imgurl3:uploadResult[0].imgurl,
            image: uploadResult.location,
            imgurl3C:'done'
          });
      }
  }else{
      this.setState({
          imgurl3C:'done'
      })
  }
  if(this.state.pic4){
    this.setState({
        uploaded:'loading...',
        visible:true
   })
    uploadResponse= await uploadImageAsync(this.state.pic4,1,1);
    uploadResult = await uploadResponse.json();
  // alert(uploadResult[0].imgurl)
   if(uploadResult[0].imgurl!=null){
     //return alert('3 done')
    this.setState({
                imguri4:pickerResult,
                   uploaded:'done',
                   visible:false,
                   imgurl4:uploadResult[0].imgurl,
      image: uploadResult.location,
      imgurl4C:'done'
    });
}
}else{
this.setState({
    imgurl4C:'done'
})
}

//          alert(this.props.pid+' uid '+this.props.uid+' sumf'+this.state.summaryfrom+' st '+this.state.summaryto+' sum '+this.state.summary)

//Actions.home();
if(this.state.imgurl1C=='done' & this.state.imgurl2C=='done' & this.state.imgurl3C=='done' & this.state.imgurl4C=='done'){
const {setback, structure,cdate,usage,restoration,distance,
area, pitarea,compartment,urinals,nourinals,tiled,laterinet,
tilequality,  tilec,nobasins,washbasins,physicallyaid,door,gauge,antirust,
subs,slabs,pit,crack,crackt,defect,sdefect,rendered,sandblast,artwork,
tank,tankembeded,tankcap,tankc,soakpit,urinalpit,pic1,pic2,pic3,pic4,imgurl1,
imgurl2,imgurl3,imgurl4, gentime, cordinate, functionality, problem, problemduration, remark,
cause} = this.state
const {params} =this.props.route

const data=
{ pid:params.pid,mon:params.mon,mid:params.uid,
    functionality, problem, problemduration, remark, cause,
    setback, structure,cdate,usage,restoration,distance,
    area, pitarea,compartment,urinals,nourinals,tiled,laterinet,    
    tilequality,  tilec,nobasins,washbasins,physicallyaid,door,gauge,antirust,
    subs,slabs,pit,crack,crackt,defect,sdefect,rendered,sandblast,artwork,
    tank,tankembeded,tankcap,tankc,soakpit,urinalpit,pic1,pic2,pic3,pic4,imgurl1,
    imgurl2,imgurl3,imgurl4, gentime,cordinate
}
//return alert(JSON.stringify(draftdata))
axios.post('https://ruwassa.herokuapp.com/api/v1/reports/followupreports', data)
.then(res=>{
    this.createPDF();
    alert('Sent, PDF copy saved in documents \n Thank you for your feedback')   
    this.props.navigation.navigate('Home')
}).catch(error=>{alert(error)}) 

}

  }else{
       
          this.setState({
              imguri:'k',
                 uploaded:'Check your network',
                 visible:false,
                 //imgurl:uploadResult[0].imgurl,
    image: uploadResult.location
  })
      }
    }else{this.setState({uploaded:'cancelled',visible:false})}
  } catch (e) {
  //  console.log({ uploadResponse });
   // console.log({ uploadResult });
    //console.log({ e });
    alert(e)
//      alert('Upload failed, sorry :(');
    this.setState({
      uploaded:'failed',
      visible:false
  });
  } finally {
    this.setState({
      uploading: false,
      visible:false
    });
  }
};


}

async function uploadImageAsync(uri,a,b) {
  let apiUrl = 'https://ruwassa.herokuapp.com/api/v1/activityform';

  
  let uriParts = uri.split('.');
  let fileType = uriParts[uriParts.length - 1];
//alert(fileType)
  let formData = new FormData();
  formData.append('rid',a);
  formData.append('pid', b);
  formData.append('activity',1);
  formData.append('outcome',1);
  formData.append('image', {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });
  

  let options = {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };

  return fetch(apiUrl, options)
 

}

const styles = StyleSheet.create ({
  container:{
      flex:1,
      paddingTop:45,
      backgroundColor: '#f0f0f4',
      flexDirection: 'column',
      marginLeft:15
    /*  justifyContent: 'center',
    /*  alignItems: 'center',
    /*  backgroundColor: '#00e9f9',
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
  box3:{
      margin:10,
      height:60,
      borderColor: 'grey',
      borderWidth:5,
      borderBottomWidth:2,
      width:'50%',
      marginRight:20,
      display:'flex',
      borderRadius:4,
      color:'red'
  },
  txt:{
    fontSize:20,
    marginTop:15,
    marginLeft:5,
    marginRight:2
  },
  txt1:{
      fontSize:15,
      marginTop:15,
      marginLeft:5,
      marginRight:2
    },
  txtstatus:{
      fontSize:20,
      marginTop:15,
      marginLeft:5,
      marginRight:2,
      alignItems:'center',
      alignSelf:'center'
    },
  row:{
      flexDirection:'row',
      alignContent:'stretch',
      alignSelf:'auto'

  },
  updbtn:{
      backgroundColor:'#00c3f9',
      width:150,
      borderRadius:7,
      height:50,
      margin:5
  },
  btnview:{
      flexDirection:'column',
      alignItems:'center',
      marginTop:50,
      backgroundColor:'#00fb03',
      height:50

  },
  btntxt:{
      color:'white',
      textAlign:'center',
      fontSize:20
  },
  img:{
      backgroundColor:"#00b1b0",
      margin:1
  },
  head:{
      flexDirection:'column',
      flex:1,
      alignItems:'flex-start',
      alignContent:'flex-start',
  }

})