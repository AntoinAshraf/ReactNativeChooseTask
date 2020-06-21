import { StyleSheet } from 'react-native';
export default StyleSheet.create({
	AppTitle:{
		padding:10,
		color:"black",
		fontSize:20,
		textAlign:"center"
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	textStyle:{
		fontSize:24, 
		textAlign:"center", 
		fontWeight:"bold"
	},
	viewInput:{
		marginLeft:20,
		marginRight:20,
		alignSelf:"stretch",
		marginBottom:8,
	},
	listSeparator:{
		borderBottomColor:"black",
		borderBottomWidth:1.5
	},
	textInputStyle:{
		marginTop:8,
		marginBottom:8,
		textAlign:"center",
		height:40,
		alignSelf: 'stretch',
		borderWidth:1,
		borderColor:"black",
		borderRadius:8
	},
	listStyle:{
		marginLeft:5,
		marginRight:5,
		borderTopWidth:1,
		alignSelf:"stretch",
		height:250,
		borderColor:"black",
	},
	listItem:{
		borderBottomColor:"gray",
		height:50,
		borderBottomWidth:1,
		padding:2,
		flexDirection:"row",
		justifyContent:"space-between"
	}
})