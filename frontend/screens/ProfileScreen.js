import {
	Image,
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
} from 'react-native';
import React, { useLayoutEffect, useEffect, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { UserType } from '../UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../constants/colors';

const ProfileScreen = () => {
	const { userId, setUserId } = useContext(UserType);
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigation = useNavigation();
	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: '',
			headerStyle: {
				backgroundColor: Colors.light.primary,
			},
			headerLeft: () => (
				<Text
					style={{
						marginLeft: 10,
						color: Colors.light.onPrimary,
						fontSize: 18,
						fontWeight: 'bold',
						// justifyContent: 'flex-start',
					}}
				>
					KnotCulture
				</Text>
			),
			headerRight: () => (
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						gap: 6,
						marginRight: 12,
					}}
				>
					<Ionicons name="notifications-outline" size={24} color="black" />

					<AntDesign name="search1" size={24} color="black" />
				</View>
			),
		});
	}, []);
	const [user, setUser] = useState();
	useEffect(() => {
		const fetchUserProfile = async () => {
			try {
				const response = await axios.get(
					`https://ecommerce-app-latest.onrender.com/profile/${userId}`
				);
				const { user } = response.data;
				setUser(user);
			} catch (error) {
				console.log('error', error);
			}
		};

		fetchUserProfile();
	}, []);
	const logout = () => {
		clearAuthToken();
	};
	const clearAuthToken = async () => {
		await AsyncStorage.removeItem('authToken');
		console.log('auth token cleared');
		navigation.replace('Login');
	};
	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await axios.get(
					`https://ecommerce-app-latest.onrender.com/orders/${userId}`
				);
				const orders = response.data.orders;
				setOrders(orders);

				setLoading(false);
			} catch (error) {
				console.log('error', error);
			}
		};

		fetchOrders();
	}, []);
	console.log('orders', orders);
	return (
		<ScrollView style={{ padding: 10, flex: 1, backgroundColor: '#E7E1D8' }}>
			<Text style={{ fontSize: 16, fontWeight: 'bold' }}>
				Welcome {user?.name}
			</Text>

			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					gap: 10,
					marginTop: 12,
				}}
			>
				<Pressable
					style={{
						padding: 10,
						backgroundColor: Colors.light.secondary,
						borderRadius: 25,
						flex: 1,
					}}
				>
					<Text
						style={{
							textAlign: 'center',
							color: Colors.light.onSecondary,
							fontWeight: '500',
						}}
					>
						Your orders
					</Text>
				</Pressable>

				<Pressable
					style={{
						padding: 10,
						backgroundColor: Colors.light.secondary,
						borderRadius: 25,
						flex: 1,
					}}
				>
					<Text
						style={{
							textAlign: 'center',
							color: Colors.light.onSecondary,
							fontWeight: '500',
						}}
					>
						Your Account
					</Text>
				</Pressable>
			</View>

			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					gap: 10,
					marginTop: 12,
				}}
			>
				<Pressable
					style={{
						padding: 10,
						backgroundColor: Colors.light.secondary,
						borderRadius: 25,
						flex: 1,
					}}
				>
					<Text
						style={{
							textAlign: 'center',
							color: Colors.light.onSecondary,
							fontWeight: '500',
						}}
					>
						Buy Again
					</Text>
				</Pressable>

				<Pressable
					onPress={logout}
					style={{
						padding: 10,
						backgroundColor: Colors.light.secondary,
						borderRadius: 25,
						flex: 1,
					}}
				>
					<Text
						style={{
							textAlign: 'center',
							color: Colors.light.onSecondary,
							fontWeight: '500',
						}}
					>
						Logout
					</Text>
				</Pressable>
			</View>

			<Text
				style={{
					height: 1,
					borderColor: '#D0D0D0',
					borderWidth: 1,
					marginVertical: 16,
				}}
			/>

			<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Your Orders</Text>

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{loading ? (
					<Text>Loading...</Text>
				) : orders.length > 0 ? (
					orders.map((order) => (
						<Pressable
							style={{
								marginTop: 20,
								padding: 15,
								borderRadius: 8,
								borderWidth: 1,
								borderColor: '#d0d0d0',
								marginHorizontal: 10,
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: 'white',
							}}
							key={order._id}
						>
							{/* Render the order information here */}
							{order.products.slice(0, 1)?.map((product) => (
								<View style={{ marginVertical: 10 }} key={product._id}>
									<Image
										source={{ uri: product.image }}
										style={{ width: 100, height: 100, resizeMode: 'contain' }}
									/>
								</View>
							))}
						</Pressable>
					))
				) : (
					<Text>No orders found</Text>
				)}
			</ScrollView>
		</ScrollView>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({});
