import React from 'react';
import { ImageBackground, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// Add all solid icons to the library
library.add(fab, fas, far);
const Home = ({navigation}) => {
    return (
        
        <ImageBackground source={require('../screens/Images/carhome.png')} style={styles.pageBackground}>
         <View style={styles.viewBackground}>
         <Text onPress = {() => navigation.navigate('Cars')} style={styles.buttonBackground}>CARS</Text>
         <TouchableOpacity style = {styles.arrowLeftStyleContainer}  onPress={() => navigation.navigate('Welcome')}>
         <FontAwesomeIcon size = {50} style = {styles.arrowLeftStyle} icon="fa-solid fa-circle-arrow-left" />
         </TouchableOpacity>
         <Text onPress = {() => navigation.navigate('CarComparison')} style={styles.buttonBackground}>CAR COMPARISON</Text>
         <Text onPress = {() => navigation.navigate('ChargingPoints')} style={styles.buttonBackground}>CHARGING POINTS</Text>
         <Text onPress = {() => navigation.navigate('AboutUs')} style={styles.buttonBackground}>ABOUT US</Text>
         <Text onPress = {() => navigation.navigate('ContactUs')} style={styles.buttonBackground}>CONTACT US</Text>
         </View>
           </ImageBackground>
          
    )
}

/* 
--------HOME PAGE STRUCTURE--------
TYPE YOUR COMMENT HERE, IN BETWEEN THE "/*"....TYPE THE STRUCTURE OF YOUR DESIGN HERE, FOLLOW YOUR DESIGN ON FIGMA 
AFTER READING, THE ABOVE TWO LINES, YOU CAN DELETE WHAT I WROTE AND START YOUR COMMENT 
*/

const styles = StyleSheet.create({
    pageBackground: {
        flex : 1,
        justifyContent : 'center',
        alignItems  : 'center',
       
      
    },

viewBackground : {
       flex : 0.5,
     justifyContent : 'space-evenly',
        alignItems : 'center',
        flexDirection: 'column',
        textAlign: 'center',
      
},
buttonBackground : {
    backgroundColor: 'white',
        color: 'black',
    fontSize: 30,
    width: 300,
    height: 'auto',
    textAlign: 'center',
   fontWeight: 'bold',
   paddingTop: 10,
   paddingBottom: 10,
   paddingLeft: 10,
   paddingRight: 10,

},
arrowLeftStyleContainer: {
    position: 'absolute',
    top: -130,
    left: -40,
    padding: 10, 
}, 
arrowLeftStyle : {
    color: 'white',
  
   
},
  });
  
/* 
--------HOME PAGE STRUCTURE--------
TYPE YOUR COMMENT HERE, IN BETWEEN THE "/*"....TYPE THE STYLE OF YOUR DESIGN HERE, FOLLOW YOUR DESIGN ON FIGMA 
AFTER READING, THE ABOVE TWO LINES, YOU CAN DELETE WHAT I WROTE AND START YOUR COMMENT 
*/
  
  
  export default Home;