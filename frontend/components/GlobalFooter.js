import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableHighlight,
	Image,
	Pressable,
	Linking,
} from 'react-native';
import React from 'react';
import {
	Ionicons,
	FontAwesome,
	FontAwesome5,
	MaterialIcons,
	MaterialCommunityIcons,
} from '@expo/vector-icons';
import Divider from './Divider';

const GlobalFooter = () => {
	// const [email, onChangeEmail] = React.useState('');

	function handleSend() {
		//Send email and clear the value in the textinput for email
	}

	function handleLink(url) {
		Linking.openURL(url);
	}

	return (
		<>
			<View style={styles.part1}>
				<View style={styles.container1}>
					<View style={[styles.row1, { paddingTop: 2 }]}>
						<Ionicons name="mail" size={20}></Ionicons>
						<Text
							style={{
								fontSize: 10,
								marginTop: 4,
								marginLeft: 4,
								fontWeight: 'bold',
							}}
						>
							Get special discount on your inbox
						</Text>
					</View>
					<View style={[styles.row1, { paddingTop: 2 }]}>
						<TextInput
							inputMode="email"
							keyboardType="email-address"
							style={{
								height: 20,
								width: '90%',
								marginLeft: 4,
								borderBottomColor: '#000000',
								borderBottomWidth: 2,
								fontSize: 12,
								fontWeight: '500',
							}}
							// value={value}
							// onChangeText={onChangeText}
						></TextInput>
						<TouchableHighlight
							onPress={handleSend}
							underlayColor={'#D65944'}
							activeOpacity={0.3}
						>
							<FontAwesome
								name="send"
								size={20}
								color="black"
								style={{ paddingLeft: 4 }}
							/>
						</TouchableHighlight>
					</View>
				</View>

				<View style={styles.container1}>
					<View style={[styles.row1, {}]}>
						<Text style={{ fontSize: 12, fontWeight: 'bold' }}>
							Ultimate Experience Mobile App
						</Text>
					</View>
					<View style={styles.row1}>
						<Image
							source={require('../assets/img/playstore.png')}
							style={styles.image1}
							resizeMode="contain"
						></Image>
						<Image
							source={require('../assets/img/appstore.png')}
							style={styles.image1}
							resizeMode="contain"
						></Image>
					</View>
				</View>
			</View>

			<View style={styles.part2}>
				<View style={styles.container2}>
					<View style={styles.row2}>
						<MaterialIcons
							name="local-shipping"
							size={18}
							style={styles.icon2}
						/>
						<Text style={styles.text2}>Free Shipping</Text>
					</View>
					<View style={styles.row2}>
						<Text style={styles.stext2}>on wards and above @299</Text>
					</View>
				</View>
				<View style={styles.container2}>
					<View style={styles.row2}>
						<MaterialCommunityIcons
							name="cart-heart"
							size={18}
							style={styles.icon2}
						/>
						<Text style={styles.text2}>Easy Return</Text>
					</View>
					<View style={styles.row2}>
						<Text style={styles.stext2}>15 Day Return Policy</Text>
					</View>
				</View>
				<View style={styles.container2}>
					<View style={styles.row2}>
						<MaterialCommunityIcons
							name="check-decagram-outline"
							size={17}
							style={styles.icon2}
						/>
						<Text style={styles.text2}>100% Authentic</Text>
					</View>
					<View style={styles.row2}>
						<Text style={styles.stext2}>Product Sourced Directly</Text>
					</View>
				</View>
				<View style={styles.container2}>
					<View style={styles.row2}>
						<MaterialIcons name="fiber-new" size={17} style={styles.icon2} />
						<Text style={styles.text2}>1900+ Brands</Text>
					</View>
					<View style={styles.row2}>
						<Text style={styles.stext2}>1.2 Lakh Products</Text>
					</View>
				</View>
			</View>

			<View style={styles.part3}>
				<View style={styles.crow3}>
					<View style={styles.item3}>
						<Text style={styles.head3}>Contact Us</Text>
						<Divider width="70%" borderColor="black" />
						<TouchableHighlight
							underlayColor={'#A83825'}
							activeOpacity={0.3}
							onPress={() => {
								console.log('pressed whatsapp');
							}}
						>
							<View
								style={{
									maxHeight: 'auto',
									maxWidth: 'auto',
								}}
							>
								<View style={styles.itemRow3}>
									<FontAwesome5
										name="whatsapp-square"
										size={18}
										color="black"
									/>
									<Text style={styles.text3}>WhatsApp</Text>
								</View>
								<Text style={styles.text3}>+91-999999999</Text>
							</View>
						</TouchableHighlight>

						<TouchableHighlight
							underlayColor={'#A83825'}
							activeOpacity={0.3}
							onPress={() => {
								console.log('pressed call us');
							}}
						>
							<View
								style={{
									maxHeight: 'auto',
									maxWidth: 'auto',
								}}
							>
								<View style={styles.itemRow3}>
									<Ionicons name="call-sharp" size={18} color="black" />
									<Text style={styles.text3}>Call Us</Text>
								</View>
								<Text style={styles.text3}>+91-999999999</Text>
							</View>
						</TouchableHighlight>
					</View>
					<View style={styles.item3}>
						<Text style={styles.head3}>Socials</Text>
						<Divider width="70%" borderColor="black" />
						<TouchableHighlight
							onPress={() =>
								Linking.openURL('https://www.instagram.com/knothastags/')
							}
							underlayColor={'#A83825'}
							activeOpacity={0.3}
						>
							<View style={styles.itemRow3}>
								<FontAwesome5 name="instagram-square" size={14} color="black" />
								<Text style={styles.text3}>@knothastags</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={() =>
								Linking.openURL(
									'https://www.facebook.com/profile.php?id=100089421314167'
								)
							}
							underlayColor={'#A83825'}
							activeOpacity={0.3}
						>
							<View style={styles.itemRow3}>
								<FontAwesome name="facebook-official" size={14} color="black" />
								<Text style={styles.text3}>@knothastags</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={() =>
								Linking.openURL(
									'https://www.linkedin.com/company/knot-hastags/'
								)
							}
							underlayColor={'#A83825'}
							activeOpacity={0.3}
						>
							<View style={styles.itemRow3}>
								<FontAwesome5 name="linkedin" size={14} color="black" />
								<Text style={styles.text3}>@knothastags</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={() => Linking.openURL('https://twitter.com/KnotHastags')}
							underlayColor={'#A83825'}
							activeOpacity={0.3}
						>
							<View style={styles.itemRow3}>
								<FontAwesome5 name="twitter" size={14} color="black" />
								<Text style={styles.text3}>@knothastags</Text>
							</View>
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.crow3}>
					<View style={styles.item3}>
						<Text style={styles.head3}>Customer Services</Text>
						<Divider width="60%" borderColor="black" />
						<View style={{ alignItems: 'flex-start', maxWidth: '70%' }}>
							<Pressable>
								<Text style={styles.text3}>{'\u2022'} About Us</Text>
							</Pressable>
							{/* <Pressable>
								<Text style={styles.text3}>{'\u2022'} Terms & Conditions</Text>
							</Pressable> */}
							<Pressable>
								<Text style={styles.text3}>{'\u2022'} FAQ</Text>
							</Pressable>
							<Pressable>
								<Text style={styles.text3}>{'\u2022'} E-Waste Policy</Text>
							</Pressable>
						</View>
					</View>
					<View style={styles.item3}>
						<Text style={styles.head3}>Get Us on Map</Text>
						<Divider width="70%" borderColor="black" />
						<TouchableHighlight
							underlayColor={'#A83825'}
							activeOpacity={0.3}
							onPress={() => {
								Linking.openURL('https://maps.google.com');
							}}
						>
							<Image
								source={require('../assets/img/map.png')}
								resizeMode="cover"
								style={{ height: 100, borderRadius: 9 }}
							/>
						</TouchableHighlight>
					</View>
				</View>
			</View>

			<View style={styles.part4}>
				<View style={styles.row4}>
					<TouchableHighlight
						onPress={() => handleLink('https://www.google.com')}
						underlayColor={'#933121'}
						activeOpacity={0.3}
					>
						<Text style={styles.text4}>Terms & Conditions</Text>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => handleLink('https://www.yahoo.com')}
						underlayColor={'#933121'}
						activeOpacity={0.3}
					>
						<Text style={styles.text4}>Shipping Policy</Text>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => handleLink('https://www.bing.com')}
						underlayColor={'#933121'}
						activeOpacity={0.3}
					>
						<Text style={styles.text4}>Cancellation Policy</Text>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => handleLink('https://www.duckduckgo.com')}
						underlayColor={'#933121'}
						activeOpacity={0.3}
					>
						<Text style={styles.text4}>Privacy Policy</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.row4}>
					<Text style={[styles.text4, { fontWeight: 'normal' }]}>
						© 2023 All rights reserved. KnotHastags Ltd.
					</Text>
				</View>
			</View>
		</>
	);
};

export default GlobalFooter;

const styles = StyleSheet.create({
	part1: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#D65944',
		height: 100,
	},
	container1: {
		flex: 1,
		flexDirection: 'column',
		padding: 20,
		paddingLeft: 5,
		width: '50%',
	},
	row1: {
		flex: 1,
		flexDirection: 'row',
	},
	image1: {
		borderRadius: 2,
		width: 80,
		marginTop: 4,
		marginLeft: 5,
	},
	part2: {
		backgroundColor: '#BD402A',
		height: 80,
		paddingTop: 18,
		paddingBottom: 5,
		paddingHorizontal: 5,
		flex: 1,

		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container2: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: -7,
	},
	row2: {
		flex: 1,
		flexDirection: 'row',
		margin: -1,
	},
	text2: {
		color: '#000000',
		fontSize: 12,
		height: 20,
		fontWeight: '700',
	},
	stext2: {
		marginTop: -3,
		fontSize: 11,
		fontWeight: '500',
		textAlign: 'center',
	},
	icon2: {
		color: 'black',
		height: 20,
	},
	part3: {
		backgroundColor: '#A83825',
		height: 330,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	crow3: {
		flex: 1,
		flexDirection: 'row',
	},
	item3: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 8,
		// borderWidth: 1,
	},
	itemRow3: {
		// flex: 1,
		flexDirection: 'row',
		gap: 5,
	},
	head3: {
		fontSize: 13,
		fontWeight: '700',
		marginBottom: -8,
	},
	text3: {
		fontSize: 12,
	},
	part4: {
		backgroundColor: '#933121',
		height: 85,
		paddingVertical: 5,
		paddingHorizontal: 2,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	row4: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
		maxHeight: 35,
	},
	text4: {
		fontSize: 12,
		fontWeight: '600',
	},
});
