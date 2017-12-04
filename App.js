import React from 'react';
import { StatusBar, View } from 'react-native';

import Header from './src/components/Header';
import PlaceList from './src/components/PlaceList';

const App = () => {
	return (
		<View style={{ flex: 1, backgroundColor: '#0C508B' }}>
         <StatusBar
            barStyle='default'
            backgroundColor='transparent'
            translucent
         />
			<Header />
				<PlaceList />
		</View>
	);
};

export default App;
