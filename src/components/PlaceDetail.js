import React from 'react';
import { Image, Text, View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const PlaceDetail = (props) => {
   return (
      <View>
         <Card>
            <CardSection>
               <View>
                  <Text style={styles.titleStyle}>{props.places.place}</Text>
                  <Text style={styles.detailStyle}>{props.places.location}</Text>
               </View>
            </CardSection>

            <CardSection>
               <Image
                  style={{ height: 150, width: '100%' }}
                  source={{ uri: props.places.image }}
               />
            </CardSection>
         </Card>
      </View>
   );
};

const styles = {
   titleStyle: {
      color: '#EAF9FF',
      fontSize: 20,
      padding: 2
   },

   detailStyle: {
      color: '#6D96B9',
      fontSize: 15,
      padding: 2
   }
};

export default PlaceDetail;
