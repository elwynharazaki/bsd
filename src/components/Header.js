import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
   const { headerStyle, textStyle } = styles;

   return (
      <View style={headerStyle}>
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

   headerStyle: {
      alignItems: 'center',
      backgroundColor: '#0C508B',
      elevation: 5,
      shadowColor: '#083861',
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.9
   }
};

export default Header;
