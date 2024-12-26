import {
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableHighlight,
	View,
} from 'react-native';
import React, { useState } from 'react';
import {
	Ionicons,
	SimpleLineIcons,
	Feather,
	FontAwesome,
} from '@expo/vector-icons';
import GlobalFooter from '../components/GlobalFooter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/colors';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const FaqScreen = () => {
	const navigation = useNavigation();
	const [OrderView, setOrderView] = useState(false);
	const [VendorView, setVendorView] = useState(false);

	function handleOrderView() {
		setVendorView(false);
		setOrderView(true);
	}

	function handleVendorView() {
		setVendorView(true);
		setOrderView(false);
	}

	return (
		<SafeAreaView>
			<ScrollView>
				{/* Welcome Design Top */}
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						padding: 6,
						alignItems: 'center',
						backgroundColor: Colors.light.primary,
						justifyContent: 'space-between',
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
						KnotCulture
					</Text>
					<Pressable
						onPress={() => {
							navigation.navigate('About Us');
						}}
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							gap: -4,
							justifyContent: 'center',
						}}
					>
						<Entypo name="info-with-circle" size={15} color="black" />
						<Text
							style={{
								marginLeft: 10,
								color: Colors.light.onPrimary,
								fontSize: 15,
								fontWeight: 'bold',
								// justifyContent: 'flex-start',
							}}
						>
							About Us
						</Text>
					</Pressable>
				</View>
				<View
					style={{
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						height: 144,
						backgroundColor: '#FFB76BE5',
						borderWidth: 1,
					}}
				>
					<View
						style={{
							alignItems: 'center',
						}}
					>
						<Text style={{ fontSize: 22, fontWeight: '500' }}>Welcome!</Text>
						<Text style={{ fontSize: 22, fontWeight: '500' }}>How can</Text>
						<Text style={{ fontSize: 22, fontWeight: '500' }}>
							We Help You?
						</Text>
					</View>
				</View>

				{/* Search Bar
				<View style={[styles.search, { marginVertical: 18 }]}>
					<TextInput
						style={{ maxWidth: '80%' }}
						placeholder="Type Your Question Here"
					></TextInput>
					<Ionicons name="search" size={18} color="#636768" />
				</View> */}

				<Text style={styles.head}>What Do You Need Help With?</Text>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-around',
						marginVertical: 24,
					}}
				>
					{/* Order View Button */}
					<TouchableHighlight
						activeOpacity={0.7}
						underlayColor="#FFB76B"
						onPress={handleOrderView}
						style={{ borderRadius: 20 }}
					>
						<View
							style={{
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								height: 110,
								width: 135,
								backgroundColor: '#FFB76B',
								borderRadius: 20,
								borderWidth: 1,
								shadowColor: 'black',
								// // shadowOffset: { width: 10, height: 10 },
								elevation: 10,
							}}
						>
							<SimpleLineIcons name="handbag" size={18} />
							<View style={{ height: 3 }} />
							<Text style={{ fontSize: 16 }}>Shopping</Text>
							<Text style={{ fontSize: 16 }}>With</Text>
							<Text style={{ fontSize: 16 }}>Us</Text>
						</View>
					</TouchableHighlight>

					{/* Vendor View Button */}
					<TouchableHighlight
						activeOpacity={0.7}
						underlayColor="#FFB76B"
						onPress={handleVendorView}
						style={{ borderRadius: 20 }}
					>
						<View
							style={{
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								height: 110,
								width: 135,
								backgroundColor: '#FFB76B',
								borderRadius: 20,
								borderWidth: 1,
								shadowColor: 'black',
								shadowOffset: { width: 10, height: 10 },
								elevation: 10,
							}}
						>
							<Feather name="truck" size={18} />
							<View style={{ height: 3 }} />
							<Text style={{ fontSize: 16 }}>Selling</Text>
							<Text style={{ fontSize: 16 }}>With</Text>
							<Text style={{ fontSize: 16 }}>Us</Text>
						</View>
					</TouchableHighlight>
				</View>

				{OrderView && (
					<>
						<Text style={styles.head}>Order Related Queries</Text>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-around',
								marginVertical: 24,
								flexWrap: 'wrap',
								rowGap: 22,
							}}
						>
							<View
								style={{
									backgroundColor: '#FFC587',
									height: 100,
									width: 178,
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									gap: 5,
									padding: 3,
									shadowColor: 'black',
									shadowOffset: { width: 10, height: 10 },
									elevation: 10,
								}}
							>
								<SimpleLineIcons name="handbag" size={18} />
								<Text style={{ fontSize: 16, fontWeight: '500' }}>
									Products
								</Text>
								<Text style={{ fontSize: 12 }}>View Products Information</Text>
							</View>

							<View
								style={{
									backgroundColor: '#FFC587',
									height: 100,
									width: 178,
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									gap: 5,
									padding: 3,
									shadowColor: 'black',
									shadowOffset: { width: 10, height: 10 },
									elevation: 10,
								}}
							>
								<Feather name="truck" size={18} />
								<Text style={{ fontSize: 16, fontWeight: '500' }}>
									Shipping & Delivery
								</Text>
								<Text style={{ fontSize: 12 }}>
									Delivery and Return Information
								</Text>
							</View>
							<View
								style={{
									backgroundColor: '#FFC587',
									height: 100,
									width: 178,
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									alignSelf: 'center',
									gap: 5,
									padding: 3,
									shadowColor: 'black',
									shadowOffset: { width: 10, height: 10 },
									elevation: 10,
								}}
							>
								<Ionicons
									name="return-down-back"
									size={18}
									color="black"
									style={{ borderWidth: 1, paddingHorizontal: 2 }}
								/>
								<Text style={{ fontSize: 16, fontWeight: '500' }}>
									Return & Refund
								</Text>
								<Text style={{ fontSize: 12 }}>
									View Return and Refund Policy
								</Text>
							</View>
						</View>
					</>
				)}
				{VendorView && (
					<>
						<Text style={styles.head}>Vendor Related Queries</Text>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-around',
								marginVertical: 24,
								flexWrap: 'wrap',
								rowGap: 22,
							}}
						>
							<View
								style={{
									backgroundColor: '#FFC587',
									height: 100,
									width: 178,
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									gap: 5,
									padding: 3,
									shadowColor: 'black',
									shadowOffset: { width: 10, height: 10 },
									elevation: 10,
								}}
							>
								<SimpleLineIcons name="handbag" size={18} />
								<Text style={{ fontSize: 16, fontWeight: '500' }}>
									Products
								</Text>
								<Text style={{ fontSize: 12 }}>View Products Information</Text>
							</View>
							<View
								style={{
									backgroundColor: '#FFC587',
									height: 100,
									width: 178,
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									gap: 5,
									padding: 3,
									shadowColor: 'black',
									shadowOffset: { width: 10, height: 10 },
									elevation: 10,
								}}
							>
								<Feather name="truck" size={18} />
								<Text style={{ fontSize: 16, fontWeight: '500' }}>
									Shipping & Delivery
								</Text>
								<Text style={{ fontSize: 12 }}>
									Delivery and Return Information
								</Text>
							</View>
							<View
								style={{
									backgroundColor: '#FFC587',
									height: 100,
									width: 178,
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									alignSelf: 'center',
									gap: 5,
									padding: 3,
									shadowColor: 'black',
									shadowOffset: { width: 10, height: 10 },
									elevation: 10,
								}}
							>
								<Ionicons
									name="return-down-back"
									size={18}
									color="black"
									style={{ borderWidth: 1, paddingHorizontal: 2 }}
								/>
								<Text style={{ fontSize: 16, fontWeight: '500' }}>
									Return & Refund
								</Text>
								<Text style={{ fontSize: 12 }}>
									View Return and Refund Policy
								</Text>
							</View>
						</View>
					</>
				)}

				<Text style={styles.head}>FAQs</Text>
				<View
					style={{
						marginVertical: 10,
						backgroundColor: '#FFEDDA',
						padding: 10,
						height: 'auto',
						flexDirection: 'column',
						gap: 9,
						justifyContent: 'center',
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							alignItems: 'center',
						}}
					>
						<TouchableHighlight
							activeOpacity={0.3}
							underlayColor="#FFEDDA"
							onPress={() => console.log('')}
						>
							<Text style={styles.faqrowtext}>Orders</Text>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.3}
							underlayColor="#FFEDDA"
							onPress={() => console.log('')}
						>
							<Text style={styles.faqrowtext}>Returns & Exchange</Text>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.3}
							underlayColor="#FFEDDA"
							onPress={() => console.log('')}
						>
							<Text style={styles.faqrowtext}>Shipping Options</Text>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.3}
							underlayColor="#FFEDDA"
							onPress={() => console.log('')}
						>
							<Text style={styles.faqrowtext}>My Account</Text>
						</TouchableHighlight>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							alignItems: 'center',
						}}
					>
						<TouchableHighlight
							activeOpacity={0.3}
							underlayColor="#FFEDDA"
							onPress={() => console.log('')}
						>
							<Text style={styles.faqrowtext}>Corporate Info</Text>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.3}
							underlayColor="#FFEDDA"
							onPress={() => console.log('')}
						>
							<Text style={styles.faqrowtext}>FAQs</Text>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.3}
							underlayColor="#FFEDDA"
							onPress={() => console.log('')}
						>
							<View
								style={{
									backgroundColor: '#E6A0A0BF',
									paddingVertical: 2,
									paddingHorizontal: 3,
									borderRadius: 5,
									flexDirection: 'row',
									alignItems: 'center',
									gap: 2,
								}}
							>
								<FontAwesome name="gift" size={16} color="red" />
								<Text style={styles.faqrowtext}>Made For You</Text>
							</View>
						</TouchableHighlight>
					</View>
				</View>

				<View
					style={{
						width: '95%',
						marginVertical: 12,
						backgroundColor: '#FFEDDA',
						height: 'auto',
						flexDirection: 'column',
						alignItems: 'center',
						alignSelf: 'center',
						padding: 6,
						borderWidth: 1,
					}}
				>
					<Text style={{ fontSize: 22, fontWeight: '500', paddingBottom: 0 }}>
						General Topics
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							backgroundColor: '#E6BEA0',
							borderRadius: 10,
							alignSelf: 'center',
							marginVertical: 8,
							paddingHorizontal: 8,
							width: '70%',
							// gap: 5,
						}}
					>
						<TextInput
							style={{ maxWidth: '90%' }}
							placeholder="Type Your Question Here"
						></TextInput>
						<Ionicons name="search" size={18} color="#636768" />
					</View>
					<Text>
						Contacting a seller through Messages is the best way to get
						information about an item or resolve any issues you have with your
						order. Each seller on Etsy manages their own orders, and makes
						decisions about cancellations, refunds, and returns. Learn more
						about getting help with your order.{'\n'}
						How to contact a shop before buying.{'\n'}
						To contact the seller:{'\n'}1. On a listing page, select Message
						Seller under the listing title.{'\n'}2. Sign in to your Etsy account
						if you aren't already, or create an account.
						{'\n'}3. Type your question into the textbox.{'\n'}4. After you Send
						your message, the seller will be notified and can respond.{'\n'}To
						ask a question about an item in the Etsy app:{'\n'}1. Tap Contact on
						a shop homepage.
						{'\n'}2. Sign in to your Etsy account if you aren't already, or
						create an account.{'\n'}3. Type your question into the textbox.
						{'\n'}4. After you Send your message, the seller will be notified
						and can respond.
					</Text>
				</View>

				<GlobalFooter />
			</ScrollView>
		</SafeAreaView>
	);
};

export default FaqScreen;

const styles = StyleSheet.create({
	search: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 3,
		backgroundColor: '#E6BEA0',
		borderRadius: 10,
		width: '50%',
		alignSelf: 'center',
		marginVertical: 5,
	},
	head: {
		textAlign: 'center',
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		maxWidth: '90%',
		marginVertical: 4,
		alignSelf: 'center',
		fontSize: 23,
		fontWeight: '500',
		// fontFamily: 'Sans Serif',
	},
	faqrowtext: {
		fontSize: 12,
		fontWeight: '700',
	},
});
