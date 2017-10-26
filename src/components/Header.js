import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const Header = (props) => {
   const { viewStyle, textStyle } = styles;

   const bsd = 'http://59ef5183684745001253e833.mockapi.io/bsd'

   return (
      <View style={viewStyle}>
         <Text style={textStyle}>{props.title}</Text>
      </View>
   );
};

const styles = {
   textStyle: {
      color: '#6D96B9',
      fontSize: 50,
      padding: 10
   },

   viewStyle: {
      backgroundColor: '#0C508B',
      alignItems: 'center',
      shadowColor: '#083861',
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.9,
      elevation: 5
   }
};

export default Header;
