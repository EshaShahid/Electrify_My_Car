import React from 'react';
import { ImageBackground, TouchableOpacity, Image, Text, StyleSheet, View, Button } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const CarThreeScreen = ({navigation}) => {
    return (
        
        <ImageBackground style ={styles.detailsBackground}>
            <TouchableOpacity style = {styles.arrowLeftStyleContainer}  onPress={() => navigation.navigate('Cars')}>
         <FontAwesomeIcon size = {50} style = {styles.arrowLeftStyle} icon="fa-solid fa-circle-arrow-left" />
         </TouchableOpacity>
      <Image source={require('../Images/carDetailsThree.jpg')}  style={styles.carsImage}></Image>

      <Text style ={styles.detailsText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
       and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
           </ImageBackground>
          
    )
}

/* 
--------THE THIRD CAR DETAIILS PAGE STRUCTURE(WHERE THE THIRD CAR DETAILS ARE DISPLAYED)--------
TYPE YOUR COMMENT HERE, IN BETWEEN THE "/*"....TYPE THE STRUCTURE OF YOUR DESIGN HERE, FOLLOW YOUR DESIGN ON FIGMA
AFTER READING, THE ABOVE TWO LINES, YOU CAN DELETE WHAT I WROTE AND START YOUR COMMENT 
*/

const styles = StyleSheet.create({

    detailsBackground: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black',
        
            },
            arrowLeftStyleContainer: {
                position: 'absolute',
                top: 80,
                left: 0,
                padding: 10, 
            }, 
            arrowLeftStyle : {
                color: 'white',
            },
            carsImage : {
                width: 400,
                height: 300,
               top: -50,
            },
            detailsText: {
                textAlign: 'center',
                color: 'white',
            }
  });
  
/* 
--------THE THIRD CAR DETAIILS PAGE STYLE(WHERE THE THIRD CAR DETAILS ARE DISPLAYED)--------
TYPE YOUR COMMENT HERE, IN BETWEEN THE "/*"....TYPE THE STYLE OF YOUR DESIGN HERE, FOLLOW YOUR DESIGN ON FIGMA
AFTER READING, THE ABOVE TWO LINES, YOU CAN DELETE WHAT I WROTE AND START YOUR COMMENT 
*/
  
  
  export default CarThreeScreen;