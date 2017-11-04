import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
   const { cardStyle } = styles;

   return (
      <View style={cardStyle}>
         {props.children}
      </View>
   );
};

const styles = {
   cardStyle: {
      borderBottomWidth: 0,
      borderColor: '#0C508B',
      borderWidth: 1,
      borderRadius: 2,
      elevation: 2,
      shadowColor: '#083861',
      shadowOpacity: 0.2,
      shadowRadius: 2,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
   }
};

export default Card;
