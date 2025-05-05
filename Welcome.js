import React from 'react';
import { Button, ImageBackground, Text, StyleSheet, View } from 'react-native';

const Welcome = ({navigation}) => {
    return (
        
<ImageBackground source={require('../screens/Images/carhome.png')} style={styles.welcomeBackground}>
            <Button title='' style={styles.getStartedButton}
            ></Button>
            <Text onPress = {() => navigation.navigate('Home')} style={styles.getStartedButton}>GET STARTED</Text>
            
           </ImageBackground>
        
    )
}

/* 

--------WELCOME PAGE STRUCTURE--------
TYPE YOUR COMMENT HERE, IN BETWEEN THE "/*"....TYPE THE STRUCTURE OF YOUR DESIGN HERE, FOLLOW YOUR DESIGN ON FIGMA 
AFTER READING, THE ABOVE TWO LINES, YOU CAN DELETE WHAT I WROTE AND START YOUR COMMENT 
*/

const styles = StyleSheet.create({
    welcomeBackground: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },

    getStartedButton: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 30,
        width: 'auto',
        height: 'auto',
        textAlign: 'center',
        top: -130,
       fontWeight: 'bold',
       paddingTop: 10,
       paddingBottom: 10,
       paddingLeft: 10,
       paddingRight: 10,
       
    },
  
  });
  
  /* 

--------WELCOME PAGE STYLING--------
TYPE YOUR COMMENT HERE, IN BETWEEN THE "/*"....TYPE THE STYLE OF YOUR DESIGN HERE, FOLLOW YOUR DESIGN ON FIGMA 
AFTER READING, THE ABOVE TWO LINES, YOU CAN DELETE WHAT I WROTE AND START YOUR COMMENT 
*/

export default Welcome;