import React from 'react';
import { ImageBackground, Image, TouchableOpacity, Text, StyleSheet, View, Button } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Cars = ({navigation}) => {
    return (
        
    
            <View style={styles.carsBackground}>
                <TouchableOpacity style = {styles.arrowLeftStyleContainer}  onPress={() => navigation.navigate('Welcome')}>
         <FontAwesomeIcon size = {50} style = {styles.arrowLeftStyle} icon="fa-solid fa-circle-arrow-left" />
         </TouchableOpacity>
       <Image source={require('../screens/Images/carDetailsOne.jpg')}  style={styles.carsImage}></Image>
       <TouchableOpacity style = {styles.arrowRightStyleContainer}  onPress={() => navigation.navigate('CarOneScreen')}>
         <Text onPress = {() => navigation.navigate('CarOneScreen')} style={styles.arrowRightStyleText}>
         <FontAwesomeIcon  size = {10} style = {styles.arrowRightStyle} icon="fa-solid fa-arrow-right" />
         </Text>
         </TouchableOpacity>
         <Text style = {styles.priceText} >Price: $9000.00</Text>

         <Image source={require('../screens/Images/carDetailsTwo.jpg')}  style={styles.carsImage}></Image>
         <TouchableOpacity style = {styles.arrowRightStyleContainer}  onPress={() => navigation.navigate('CarTwoScreen')}>
         <Text onPress = {() => navigation.navigate('CarTwoScreen')} style={styles.arrowRightStyleText}>
         <FontAwesomeIcon size = {10} style = {styles.arrowRightStyle} icon="fa-solid fa-arrow-right" />
         </Text>
         </TouchableOpacity>
         <Text style = {styles.priceText}>Price: $17000.00</Text>
         
         <Image source={require('../screens/Images/carDetailsThree.jpg')}  style={styles.carsImage}></Image>
         <TouchableOpacity style = {styles.arrowRightStyleContainer}  onPress={() => navigation.navigate('CarThreeScreen')}>
         <Text onPress = {() => navigation.navigate('CarThreeScreen')} style={styles.arrowRightStyleText}>
         <FontAwesomeIcon size = {10} style = {styles.arrowRightStyle} icon="fa-solid fa-arrow-right" />
         </Text>
         </TouchableOpacity>
         <Text style = {styles.priceText}>Price: $98000.00</Text>

       <Image source={require('../screens/Images/carDetailsFour.jpg')}  style={styles.carsImage}></Image>
         <TouchableOpacity style = {styles.arrowRightStyleContainer}  onPress={() => navigation.navigate('CarFourScreen')}>
         <Text onPress = {() => navigation.navigate('CarFourScreen')} style={styles.arrowRightStyleText}>
         <FontAwesomeIcon size = {10} style = {styles.arrowRightStyle} icon="fa-solid fa-arrow-right" />
         </Text>
         </TouchableOpacity>
         <Text style = {styles.priceText}>Price: $1800.00</Text>

       </View>
        
          
    )
}

/* 
--------CARS PAGE STRUCTURE(WHERE THE CARS ARE DISPLAYED)--------
TYPE YOUR COMMENT HERE, IN BETWEEN THE "/*"....TYPE THE STRUCTURE OF YOUR DESIGN HERE, FOLLOW YOUR DESIGN ON FIGMA 
AFTER READING, THE ABOVE TWO LINES, YOU CAN DELETE WHAT I WROTE AND START YOUR COMMENT 
*/

const styles = StyleSheet.create({
    carsBackground: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginTop: 140,
  marginBottom: 0,
  
            },
arrowLeftStyleContainer: {
                position: 'absolute',
                top: -90,
                left: 20,
                padding: 10, 
            }, 
arrowLeftStyle : {
                color: 'black',
            },
   carsImage : {
       width: 354,
       height: 130,
      
    },
    arrowRightStyleContainer: {
        flex: 1,
        top: -130,
        left: 156,
       
       
    }, 
    arrowRightStyleText: {
        backgroundColor: 'black',
        opacity: 0.7,
        height: 130,
       width: 40,
       
       
    },
    arrowRightStyle : {
        color: 'white',
        marginLeft: 150,
        marginTop: 200,     
    },

    priceText: {
        flex:1, 
        top: -20,
        left: 100,
        fontSize: 20,
        fontWeight: 'bold',
    }
  });
  
/* 
--------CARS PAGE STRUCTURE(WHERE THE CARS ARE DISPLAYED)--------
TYPE YOUR COMMENT HERE, IN BETWEEN THE "/*"....TYPE THE STYLE OF YOUR DESIGN HERE, FOLLOW YOUR DESIGN ON FIGMA 
AFTER READING, THE ABOVE TWO LINES, YOU CAN DELETE WHAT I WROTE AND START YOUR COMMENT 
*/
  
  
  export default Cars;