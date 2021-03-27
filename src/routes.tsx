import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';

/* import Search from './pages/Search';
import PokemonResult from './pages/PokemonResult';
import { SearchProvider } from './hooks/SearchContext';
import ItemResult from './pages/ItemResult'; */

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
	return (

		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen name="Home" component={Home} />
			</Navigator>
		</NavigationContainer>

	);
}

export default Routes;