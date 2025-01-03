import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	Pressable,
	Alert,
} from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import { UserType } from '../UserContext';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/colors';

const AddressScreen = () => {
	const navigation = useNavigation();
	const [name, setName] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [houseNo, setHouseNo] = useState('');
	const [street, setStreet] = useState('');
	const [landmark, setLandmark] = useState('');
	const [postalCode, setPostalCode] = useState('');
	const { userId, setUserId } = useContext(UserType);
	useEffect(() => {
		const fetchUser = async () => {
			const token = await AsyncStorage.getItem('authToken');
			const decodedToken = jwt_decode(token);
			const userId = decodedToken.userId;
			setUserId(userId);
		};

		fetchUser();
	}, []);
	console.log(userId);
	const handleAddAddress = () => {
		const address = {
			name,
			mobileNo,
			houseNo,
			street,
			landmark,
			postalCode,
		};

		axios
			.post('https://ecommerce-app-latest.onrender.com/addresses', {
				userId,
				address,
			})
			.then((response) => {
				Alert.alert('Success', 'Addresses added successfully');
				setName('');
				setMobileNo('');
				setHouseNo('');
				setStreet('');
				setLandmark('');
				setPostalCode('');

				setTimeout(() => {
					navigation.goBack();
				}, 500);
			})
			.catch((error) => {
				Alert.alert('Error', 'Failed to add address');
				console.log('error', error);
			});
	};
	return (
		<SafeAreaView>
			<ScrollView>
				<View
					style={{
						height: 50,
						backgroundColor: Colors.light.primary,
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							marginLeft: 10,
							color: Colors.light.onPrimary,
							fontSize: 18,
							fontWeight: 'bold',
							// justifyContent: 'flex-start',
						}}
					>
						Add New Address
					</Text>
				</View>

				<View style={{ padding: 10 }}>
					<Text style={{ fontSize: 17, fontWeight: 'bold' }}>Address Name</Text>

					<TextInput
						placeholder="India"
						style={{
							padding: 10,
							borderColor: '#D0D0D0',
							borderWidth: 1,
							marginTop: 10,
							borderRadius: 5,
						}}
					/>

					<View style={{ marginVertical: 10 }}>
						<Text style={{ fontSize: 15, fontWeight: 'bold' }}>
							Full name (First and last name)
						</Text>

						<TextInput
							value={name}
							onChangeText={(text) => setName(text)}
							style={{
								padding: 10,
								borderColor: '#D0D0D0',
								borderWidth: 1,
								marginTop: 10,
								borderRadius: 5,
							}}
							placeholder="enter your name"
						/>
					</View>

					<View>
						<Text style={{ fontSize: 15, fontWeight: 'bold' }}>
							Mobile numebr
						</Text>

						<TextInput
							value={mobileNo}
							onChangeText={(text) => setMobileNo(text)}
							style={{
								padding: 10,
								borderColor: '#D0D0D0',
								borderWidth: 1,
								marginTop: 10,
								borderRadius: 5,
							}}
							placeholder="Mobile No"
						/>
					</View>

					<View style={{ marginVertical: 10 }}>
						<Text style={{ fontSize: 15, fontWeight: 'bold' }}>
							Flat,House No,Building,Company
						</Text>

						<TextInput
							value={houseNo}
							onChangeText={(text) => setHouseNo(text)}
							style={{
								padding: 10,
								borderColor: '#D0D0D0',
								borderWidth: 1,
								marginTop: 10,
								borderRadius: 5,
							}}
							placeholder=""
						/>
					</View>

					<View>
						<Text style={{ fontSize: 15, fontWeight: 'bold' }}>
							Area,Street,sector,village
						</Text>
						<TextInput
							value={street}
							onChangeText={(text) => setStreet(text)}
							style={{
								padding: 10,
								borderColor: '#D0D0D0',
								borderWidth: 1,
								marginTop: 10,
								borderRadius: 5,
							}}
							placeholder=""
						/>
					</View>

					<View style={{ marginVertical: 10 }}>
						<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Landmark</Text>
						<TextInput
							value={landmark}
							onChangeText={(text) => setLandmark(text)}
							style={{
								padding: 10,
								borderColor: '#D0D0D0',
								borderWidth: 1,
								marginTop: 10,
								borderRadius: 5,
							}}
							placeholder="Eg near appollo hospital"
						/>
					</View>

					<View>
						<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Pincode</Text>

						<TextInput
							value={postalCode}
							onChangeText={(text) => setPostalCode(text)}
							style={{
								padding: 10,
								borderColor: '#D0D0D0',
								borderWidth: 1,
								marginTop: 10,
								borderRadius: 5,
							}}
							placeholder="Enter Pincode"
						/>
					</View>

					<Pressable
						onPress={handleAddAddress}
						style={{
							backgroundColor: '#FFC72C',
							padding: 19,
							borderRadius: 6,
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 20,
						}}
					>
						<Text style={{ fontWeight: 'bold' }}>Add Address</Text>
					</Pressable>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AddressScreen;

const styles = StyleSheet.create({});
