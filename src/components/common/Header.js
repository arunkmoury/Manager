import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
	const  { textStyle, viewStyle, bodyStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};


const styles = {
	bodyStyle: {
		backgroundColor: '#000000'
	},
	viewStyle: {
		backgroundColor: '#bac3cc',
		justifyContent: 'center', 
		alignItems: 'center',
		height: 60,
		padding: 15,
		shadowColor: '#000',
		shadowOffset: {	width: 0, height: 2 },
		shadowOpacity: 0.2, elevation: 2,
		position: 'relative', 
	},
	textStyle: {
		fontSize: 30,
	}
};



export { Header };