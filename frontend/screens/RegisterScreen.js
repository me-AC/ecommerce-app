import {
	StyleSheet,
	Text,
	View,
	Pressable,
	Image,
	KeyboardAvoidingView,
	TextInput,
	Alert,
} from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/colors';

const RegisterScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const navigation = useNavigation();
	const handleRegister = () => {
		const user = {
			name: name,
			email: email,
			password: password,
		};

		// send a POST  request to the backend API to register the user
		axios
			.post('https://ecom-dummy.onrender.com/register', user)
			.then((response) => {
				console.log(response);
				Alert.alert(
					'Registration successful',
					'You have been registered Successfully'
				);
				setName('');
				setEmail('');
				setPassword('');
			})
			.catch((error) => {
				Alert.alert(
					'Registration Error',
					'An error occurred while registering'
				);
				console.log('registration failed', error);
			});
	};
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: Colors.light.primary,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<View>
				<Image
					style={{ width: 150, height: 150 }}
					source={require('../assets/knot.png')}
				/>
			</View>

			<KeyboardAvoidingView>
				<View style={{ alignItems: 'center' }}>
					<Text
						style={{
							fontSize: 17,
							fontWeight: 'bold',
							marginTop: 10,
							color: '#041E42',
						}}
					>
						Register to your Account
					</Text>
				</View>

				<View>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							gap: 5,
							backgroundColor: 'white',
							paddingVertical: 5,
							borderRadius: 5,
							marginTop: 30,
						}}
					>
						<Ionicons
							name="ios-person"
							size={24}
							color="gray"
							style={{ marginLeft: 8 }}
						/>
						<TextInput
							value={name}
							onChangeText={(text) => setName(text)}
							style={{
								color: 'gray',
								marginVertical: 10,
								width: 300,
								fontSize: name ? 16 : 16,
							}}
							placeholder="Enter your name"
						/>
					</View>

					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							gap: 2,
							backgroundColor: 'white',
							paddingVertical: 5,
							borderRadius: 5,
							marginTop: 30,
						}}
					>
						<MaterialIcons
							style={{ marginLeft: 8 }}
							name="email"
							size={24}
							color="gray"
						/>

						<TextInput
							value={email}
							onChangeText={(text) => setEmail(text)}
							style={{
								color: 'gray',
								marginVertical: 10,
								width: 300,
								fontSize: password ? 16 : 16,
							}}
							placeholder="Enter your Email"
						/>
					</View>
				</View>

				<View>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							gap: 2,
							backgroundColor: 'white',
							paddingVertical: 5,
							borderRadius: 5,
							marginTop: 30,
						}}
					>
						<AntDesign
							name="lock1"
							size={24}
							color="gray"
							style={{ marginLeft: 8 }}
						/>

						<TextInput
							value={password}
							onChangeText={(text) => setPassword(text)}
							secureTextEntry={true}
							style={{
								color: 'gray',
								marginVertical: 10,
								width: 300,
								fontSize: email ? 16 : 16,
							}}
							placeholder="Enter your Password"
						/>
					</View>
				</View>

				<View
					style={{
						marginTop: 12,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'flex-end',
					}}
				>
					<Text style={{ color: '#007FFF', fontWeight: '500' }}>
						Forgot Password
					</Text>
				</View>

				<Pressable
					onPress={handleRegister}
					style={{
						width: 200,
						backgroundColor: Colors.light.secondary,
						borderRadius: 6,
						marginLeft: 'auto',
						marginRight: 'auto',
						padding: 15,
						marginTop: 30,
					}}
				>
					<Text
						style={{
							textAlign: 'center',
							color: Colors.light.onSecondary,
							fontSize: 16,
							fontWeight: 'bold',
						}}
					>
						Register
					</Text>
				</Pressable>

				<Pressable
					onPress={() => navigation.goBack()}
					style={{ marginTop: 15 }}
				>
					<Text style={{ textAlign: 'center', color: 'gray', fontSize: 16 }}>
						Already have an account?
					</Text>
					<Text style={{ textAlign: 'center', color: '#007FFF', fontSize: 16 }}>
						Sign in
					</Text>
				</Pressable>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({});
