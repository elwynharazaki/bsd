import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const Header = (props) => {
   const { viewStyle, textStyle } = styles;

   return (
      <View style={viewStyle}>
         <Text style={textStyle}>{props.title}</Text>
      </View>
   );
};

const styles = {
   textStyle: {
      color: '#6D96B9',
      fontSize: 30,
      padding: 5
   },

   viewStyle: {
      alignItems: 'center',
      backgroundColor: '#0C508B',
      elevation: 5,
      shadowColor: '#083861',
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.9
   }
};

export default Header;
