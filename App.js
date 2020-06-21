import React,{ Component  } from 'react';
import { Platform, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Appe extends Component  {
	
	state = {
		names: [],
		selectedName:""
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'GET'
			//Request Type 
		})
		.then((response) => response.json())
		//If response is in json then in success
		.then((responseJson) => {
			this.setState({names:responseJson});

			this.state.names.forEach((item)=>{ item.bgColor = "#F5FCFF" })

		})
		//If response is not in json then in error
		.catch((error) => {
			//Error 
			this.setState({names:[]});
			alert(JSON.stringify(error));
		});
	}

	renderItem = ({item})=>{
		return (
			<View key={Number.toString(item.id)} 
			style={{...styles.listItem, backgroundColor:item.bgColor}}>
				<Text 
					onPress={()=>{
						this.state.names.forEach((itemUser)=>{ itemUser.bgColor = "#F5FCFF" })
						this.setState({
							selectedName:item.name
						})
						var namesList = this.state.names;
						namesList.forEach(
							(itemUser, index) => { 
								if(itemUser.id == item.id){
									namesList[index].bgColor = "yellow";
								} 
							}
						);
						this.setState({names:[...namesList]});
					}}
					style={{fontSize:20, alignSelf:"center"}}>{item.name}</Text>
			</View>
		)
	}

	render(){
		return (
			<View style={styles.container}>
				<View >
					<Text style={styles.AppTitle}>Choose</Text>
				</View>
				<View style={styles.container}>
					<Text style={styles.AppTitle}>You Have multible units in this account kindly choose one</Text>
					<View style={styles.viewInput}>
						<TextInput value={this.state.selectedName} placeholder="Name Unit"
							style={styles.textInputStyle} editable={false}/>
					</View>
					<View style={styles.listSeparator}></View>
					<View style={styles.listStyle}>
						<FlatList data={this.state.names}
							initialNumToRender={5}
							renderItem={this.renderItem}>
						</FlatList>
					</View>
				</View>
			</View>
		);
	}
}
