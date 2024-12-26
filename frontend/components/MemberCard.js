import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const MemberCard = ({ data }) => {
	return (
		<View style={styles.card}>
			<View style={styles.imageCard}>
				<Image
					style={styles.image}
					source={require('../assets/img/default-user.jpg')}
				/>
			</View>
			<View style={styles.textCard}>
				<View style={styles.textArea}>
					<Text
						style={{
							backgroundColor: '#f9f9f9',
							textAlign: 'center',
							fontSize: 16,
							padding: 10,
						}}
					>
						{data.item.description}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default MemberCard;

const styles = StyleSheet.create({
	card: {
		width: '100%',
		backgroundColor: '#F6DE8D',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		padding: 20,
	},
	image: {
		resizeMode: 'cover',
		width: '100%',
		height: 200,
		borderRadius: 10,
	},
	imageCard: {
		marginVertical: 10,
		width: '90%',
		borderRadius: 20,
		overflow: 'hidden',
		backgroundColor: '#D46E2F',
		padding: 10,
	},
	textCard: {
		marginVertical: 10,
		width: '90%',
		borderRadius: 20,
		overflow: 'hidden',
		backgroundColor: '#f9f9f9',
		padding: 10,
	},
	textArea: {
		backgroundColor: '#F6DE8D',
		padding: 5,
	},
});
