import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
	requireNativeComponent,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MemberCard from '../components/MemberCard';
import GlobalFooter from '../components/GlobalFooter';
import { Ionicons } from '@expo/vector-icons';
import MemberData from '../data/MemberData';
import { FlatList } from 'react-native-gesture-handler';
const AboutUsScreen = () => {
	const [dataFounder, setDataFounder] = useState(MemberData); // Your data source for the list
	const [dataMember, setDataMember] = useState(MemberData);
	const [arrowPositionFounder, setArrowPositionFounder] = useState(0); // Track the arrow position
	const [arrowPositionMember, setArrowPositionMember] = useState(0);
	const visibleItemsCount = 1; // Set the number of items visible on the screen

	// Use useCallback to memoize the filtering function
	const returnFilteredResultsFounder = useCallback(() => {
		// Filter the data based on the arrow position and the number of visible items
		return dataFounder.slice(
			arrowPositionFounder,
			arrowPositionFounder + visibleItemsCount
		);
	}, [dataFounder, arrowPositionFounder, visibleItemsCount]);

	const returnFilteredResultsMember = useCallback(() => {
		// Filter the data based on the arrow position and the number of visible items
		return dataMember.slice(
			arrowPositionMember,
			arrowPositionMember + visibleItemsCount
		);
	}, [dataMember, arrowPositionMember, visibleItemsCount]);

	return (
		<ScrollView>
			<Image
				source={require('../assets/img/knotHastagsStory.png')}
				style={{ width: 'auto', height: 200 }}
			/>
			<View style={styles.storyContainer}>
				<View style={styles.storyBorderView}>
					<Text style={styles.storyText}>
						Knothastags was born in 2023 out of a passion for helping our
						clients bring their dream surprise events to life ! Since our
						creation, we have committed ourselves to create impactful and
						creative experiences for our clients and their guests , no matter
						the size of the event . We always take into consideration the
						quality of the surprise event, and never fall below the bar our
						clients set.
					</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-around',
					marginTop: 20,
					alignItems: 'center',
				}}
			>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<LinearGradient
						colors={['rgba(214,92,4,1)', 'rgba(214,92,4,0)']}
						style={{
							padding: 10,
							width: 'auto',
							alignItems: 'center',
							borderRadius: 20,
						}}
					>
						<Text style={{ fontSize: 16 }}>Our Vision</Text>
					</LinearGradient>
				</View>

				<View style={[styles.storyBorderView, { width: '60%' }]}>
					<Text style={styles.storyText}>
						Empowering customers with a curated collection of artifacts,
						blending culture and craftsmanship to enrich lifestyles.
					</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-around',
					marginTop: 20,
					alignItems: 'center',
				}}
			>
				<View style={[styles.storyBorderView, { width: '60%' }]}>
					<Text style={styles.storyText}>
						"Enrich lives by offering exceptional artifacts, celebrating global
						heritage and creativity."
					</Text>
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<LinearGradient
						colors={['rgba(214,92,4,1)', 'rgba(214,92,4,0)']}
						style={{
							padding: 10,
							width: 'auto',
							alignItems: 'center',
							borderRadius: 20,
						}}
					>
						<Text style={{ fontSize: 16 }}>Our Goals</Text>
					</LinearGradient>
				</View>
			</View>
			<View style={{ alignItems: 'center', margin: 10 }}>
				<Text style={{ fontSize: 20, marginVertical: 10 }}>
					Meet the Founders
				</Text>
				<View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
					<Ionicons
						name="chevron-back"
						size={26}
						color={arrowPositionFounder <= 0 ? 'gray' : 'black'}
						onPress={() => {
							if (arrowPositionFounder <= 0) {
								setArrowPositionFounder(0);
							} else {
								setArrowPositionFounder(arrowPositionFounder - 1);
							}
						}}
					/>
					<FlatList
						data={returnFilteredResultsFounder()}
						renderItem={(data) => <MemberCard data={data} />}
						keyExtractor={(item, index) => index.toString()}
						horizontal
						contentContainerStyle={{ width: '100%' }}
					/>
					<Ionicons
						name="chevron-forward"
						size={26}
						color={
							arrowPositionFounder >= MemberData.length - 1 ? 'gray' : 'black'
						}
						onPress={() => {
							if (arrowPositionFounder >= MemberData.length - 1) {
								setArrowPositionFounder(MemberData.length - 1);
							} else {
								setArrowPositionFounder(arrowPositionFounder + 1);
							}
						}}
					/>
				</View>
			</View>
			<View style={{ alignItems: 'center', margin: 10 }}>
				<Text style={{ fontSize: 20, marginVertical: 10 }}>Meet the Team</Text>
				<View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
					<Ionicons
						name="chevron-back"
						size={26}
						color={arrowPositionMember <= 0 ? 'gray' : 'black'}
						onPress={() => {
							if (arrowPositionMember <= 0) {
								setArrowPositionMember(0);
							} else {
								setArrowPositionMember(arrowPositionMember - 1);
							}
						}}
					/>
					<FlatList
						data={returnFilteredResultsMember()}
						renderItem={(data) => <MemberCard data={data} />}
						keyExtractor={(item, index) => index.toString()}
						horizontal
						contentContainerStyle={{ width: '100%' }}
					/>
					<Ionicons
						name="chevron-forward"
						size={26}
						color={
							arrowPositionMember >= MemberData.length - 1 ? 'gray' : 'black'
						}
						onPress={() => {
							if (arrowPositionMember >= MemberData.length - 1) {
								setArrowPositionMember(MemberData.length - 1);
							} else {
								setArrowPositionMember(arrowPositionMember + 1);
							}
						}}
					/>
				</View>
			</View>
			<GlobalFooter />
		</ScrollView>
	);
};

export default AboutUsScreen;

const styles = StyleSheet.create({
	storyText: {
		textAlign: 'center',
		borderRadius: 15,
		backgroundColor: '#FDFAF3',
		opacity: 0.8,
		margin: 10,
		padding: 10,
	},
	storyBorderView: {
		width: '80%',
		backgroundColor: '#FFC670',
		margin: 10,
		borderRadius: 20,
		// shadowOffset:{width:50,height:50},
		shadowColor: 'black',
		elevation: 20,
	},
	storyContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FEA24D',
		padding: 10,
	},
});
