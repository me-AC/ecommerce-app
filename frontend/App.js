import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ModalPortal } from 'react-native-modals';
import { Provider } from 'react-redux';
import StackNavigator from './navigation/StackNavigator';
import store from './store';
import { UserContext } from './UserContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from './constants/colors';

export default function App() {
	return (
		<Provider store={store}>
			<StatusBar backgroundColor={Colors.light.primary} />
			<GestureHandlerRootView>
				<UserContext>
					<StackNavigator />
					<ModalPortal />
				</UserContext>
			</GestureHandlerRootView>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
