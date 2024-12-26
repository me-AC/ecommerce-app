import {
	StyleSheet,
	Text,
	View,
	Image,
	KeyboardAvoidingView,
	TextInput,
	Pressable,
	Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/colors';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigation = useNavigation();
	useEffect(() => {
		const checkLoginStatus = async () => {
			try {
				const token = await AsyncStorage.getItem('authToken');

				if (token) {
					navigation.replace('Main');
				}
			} catch (err) {
				console.log('error message', err);
			}
		};
		checkLoginStatus();
	}, []);
	const handleLogin = () => {
		const user = {
			email: email,
			password: password,
		};

		axios
			.post('https://ecommerce-app-latest.onrender.com/login', user)
			.then((response) => {
				console.log(response);
				const token = response.data.token;
				AsyncStorage.setItem('authToken', token);
				navigation.replace('Main');
			})
			.catch((error) => {
				Alert.alert('Login Error', 'Invalid Email');
				console.log(error);
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
					style={{ width: 150, height: 150, marginTop: 30 }}
					source={require('../assets/knot.png')}
				/>
			</View>

			<KeyboardAvoidingView>
				<View style={{ alignItems: 'center' }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
							marginTop: 10,
							color: '#041E42',
						}}
					>
						Login to KnotCulture
					</Text>
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
							marginTop: 40,
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
								// color: 'gray',
								marginVertical: 10,
								width: 300,
								fontSize: email ? 16 : 16,
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
							gap: 5,
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
								fontSize: password ? 16 : 16,
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

				<View style={{ marginTop: 30 }} />

				<Pressable
					onPress={handleLogin}
					style={{
						width: 200,
						backgroundColor: Colors.light.secondary,
						borderRadius: 6,
						marginLeft: 'auto',
						marginRight: 'auto',
						padding: 15,
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
						Login
					</Text>
				</Pressable>

				<Pressable
					onPress={() => navigation.navigate('Register')}
					style={{ marginTop: 15 }}
				>
					<Text style={{ textAlign: 'center', color: 'gray', fontSize: 16 }}>
						Don't have an account?
					</Text>
					<Text style={{ textAlign: 'center', color: '#007FFF', fontSize: 16 }}>
						Sign Up
					</Text>
				</Pressable>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({});
