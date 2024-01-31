import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View     
    style={{
     paddingHorizontal:10,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     height:100,
    }}>
      <View>
       <Image
            style={{height:28,width:110}}
            source={require('./Images/Instagram_logo.png')}
            />
            </View>
            <View style={{ flexDirection:'row'}}>
            <TouchableOpacity style={{marginRight:15}}>
             <Image  style={{height:20,width:20}}
            source={require('./Images/heart.png')}/>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{position:'relative'}}>
              <Image  style={{height:20,width:20}}
                source={require('./Images/images.png')}/>
               <View style={{position:'absolute',bottom:12,left:13}}>
                <Text style={{backgroundColor:'red',paddingHorizontal:5,borderRadius:10}}>
                   
                   5

                </Text>
               </View>
              </View>
              </TouchableOpacity>
            
            </View>
    </View>
    
  )
}

export default Header

const styles = StyleSheet.create({})