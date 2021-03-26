import React, {useEffect, useContext, useLayoutEffect} from "react";
import { View, StyleSheet, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Button, ThemeProvider, Text, ListItem, Input } from 'react-native-elements';
import {Context} from '../context/Store';
import Ionicons from 'react-native-vector-icons/Ionicons';

const theme = {
  Button: {
    raised: true,
    titleStyle: {
      color: 'white',
      fontWeight: 'bold'
    },
    buttonStyle: {
      backgroundColor: '#1293ff',
      height: 50,
    }
  },
  Input: {
    inputContainerStyle: {
      paddingLeft: 10,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 5,
    },
    labelStyle: {
      color: 'black',
      fontWeight: 'normal',
    },
    inputStyle: {
      height: 50
    }
  }
};

const datas = [
	{id: 1, nama: 'Sabun Mandi'},
	{id: 2, nama: 'Sabun Tangan'},
	{id: 3, nama: 'Sabun Kaki'},
	{id: 4, nama: 'Sabun Muka'},
	{id: 5, nama: 'Sabun Daki'},
	{id: 6, nama: 'Sabun Baju'},
	{id: 7, nama: 'Sabun Telinga'},
];

function HomeScreen({ navigation }) {

	const [state, dispatch] = useContext(Context);

	useLayoutEffect(() => {
	    navigation.setOptions({
	      headerRight: () => (
	      	<View style={{flexDirection: 'row', alignItems: 'center'}}>
	      		<View style={{marginRight: 5}}>
	      			<Text style={{fontWeight: 'bold', color: '#ffffff'}}>{state.auth.account}</Text>
	      		</View>
		      	<TouchableOpacity onPress={logout} style={{marginRight: 5}}>
		      		<Ionicons name="ios-exit-outline" size={30} color="white" />
		      	</TouchableOpacity>
	      	</View>
	      ),
	    });
	}, [navigation]);

	logout = () => 
	    Alert.alert(
	      "Logout",
	      "Anda Yakin ?",
	      [

	        {
	          text: "Batal",
	          onPress: () => console.log("Cancel Pressed"),
	          style: "cancel"
	        },
	        { text: "Asiyap", onPress: () => dispatch({ type: 'LOG_OUT'}) }
	      ]
    );

	return (
	  	<ThemeProvider theme={theme}>
			<View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#ffffff'}}>
				<View style={{flex: 2, flexDirection: 'column' }}>
					<View style={{marginTop: 20}}>
						<Input
				          placeholder='Search'
				          autoCapitalize="none"
				          autoCorrect={false}
				        />
					</View>
					<View style={{flex: 1, flexWrap: 'wrap', padding: 10, flexDirection: 'row'}}>
						{datas.map((data, key) => {
							return (
								<View key={key} style={{width: 150, height: 200, borderWidth: 1, borderColor: '#000000', borderRadius: 10, marginRight: 5, marginBottom: 5}}>
									<View style={{flex: 2, flexDirection: 'column', alignItems: 'center'}}>
										<Image source={{uri: 'https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/beauty/Dettol_Sabun_Anti_Bakteri_Fresh/Dettol_Sabun_Anti_Bakteri_Fresh_L_1.jpg'}} resizeMode="contain" style={{width: 100, height: 100}}/>
										<Text>{data.nama}</Text>
									</View>
									<View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', paddingHorizontal: 10}}>
										<Button title="Tambah" buttonStyle={[{height: 40}]} onPress={() => alert('-->')} />
									</View>
								</View>
							)
						})}
					</View>
				</View>
				<View style={{flex: 1, flexDirection: 'column', backgroundColor: '#F7F6F6', height: '100%'}}>
					<Text h4 style={{color: 'black', textAlign: 'center' }}>Detail</Text>
					<ScrollView style={{flex: 1, flexDirection: 'column', backgroundColor: '#f9fafe'}}>
						<ListItem
						  	containerStyle={{backgroundColor: '#f9fafe'}}
						>
						    <ListItem.Content>
						      	<ListItem.Title style={{color: '#4F4F4F'}}>Sabun Muka x 1</ListItem.Title>
						    </ListItem.Content>
						    <ListItem.Title style={{color: '#4F4F4F'}}>Rp 10.000</ListItem.Title>
						</ListItem>
						<ListItem
						  	containerStyle={{backgroundColor: '#f9fafe'}}
						>
						    <ListItem.Content>
						      	<ListItem.Title style={{color: '#4F4F4F'}}>Sabun Muka x 1</ListItem.Title>
						    </ListItem.Content>
						    <ListItem.Title style={{color: '#4F4F4F'}}>Rp 10.000</ListItem.Title>
						</ListItem>
						<ListItem
						  	containerStyle={{backgroundColor: '#f9fafe'}}
						>
						    <ListItem.Content>
						      	<ListItem.Title style={{color: '#4F4F4F'}}>Sabun Muka x 1</ListItem.Title>
						    </ListItem.Content>
						    <ListItem.Title style={{color: '#4F4F4F'}}>Rp 10.000</ListItem.Title>
						</ListItem>
					</ScrollView>
					<View style={[styles.containerButton]}>
			          <Button title="Bayar" onPress={() => alert('-->')} />
			        </View>
				</View>
			</View>
	    </ThemeProvider>
	);
}

const styles = StyleSheet.create({
  containerButton: {
    width: '100%',
    position: 'absolute',
    bottom: 5 
  }
});


export default HomeScreen;