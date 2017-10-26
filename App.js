import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import PlaceList from './src/components/PlaceList';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#0C508B' }}>
      <Header title={'BSD Where To'} />
        <PlaceList />
    </View>
  );
};

export default App;
