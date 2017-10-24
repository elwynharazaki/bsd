import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';

import PlaceDetail from './PlaceDetail';

class PlaceList extends Component {
   state = { places:[] };

   componentWillMount() {
      console.log('Will Mount');

      axios.get('http://59ef5183684745001253e833.mockapi.io/bsd')
      .then((response) => {
         this.setState({ places: response.data });
      });
   }
   
   renderPlaces() {
      if (this.state.places.length > 0) {
         return this.state.places.map((data, index) =>
            <PlaceDetail key={index} places={data}/>
         );
      }
   }
   
   render () {
      console.log('render places', this.state.places);
      
      return (
         <ScrollView>
            {this.renderPlaces()}
         </ScrollView>
      );
   }
};

export default PlaceList;