import { View, Text } from 'react-native';
import React from 'react';

const Divider = ({ borderColor, width }) => {
	const DividerStyle = {
		borderColor: borderColor || '#9F9292',
		width: width || '30%',
	};
	return (
		<View
			style={[
				DividerStyle,
				{
					borderBottomWidth: 1,
					padding: 2,
					marginHorizontal: 5,
					height: 0,
					alignSelf: 'center',
				},
			]}
		/>
	);
};

export default Divider;
