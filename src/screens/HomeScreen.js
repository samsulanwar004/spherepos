import React, {useEffect, useContext, useLayoutEffect, useState, useRef} from "react";
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
      height: 50,
      fontSize: 30
    }
  }
};

const datas = [
	{id: 1, nama: 'Sabun Mandi', price: 2000},
	{id: 2, nama: 'Sabun Tangan', price: 3000},
	{id: 3, nama: 'Sabun Kaki', price: 2500},
	{id: 4, nama: 'Sabun Muka', price: 2000},
	{id: 5, nama: 'Sabun Daki', price: 2000},
	{id: 6, nama: 'Sabun Baju', price: 2000},
	{id: 7, nama: 'Sabun Telinga', price: 2000},
	{id: 8, nama: 'Sabun Telinga', price: 2000},
	{id: 9, nama: 'Sabun Telinga', price: 2000},
	{id: 10, nama: 'Sabun Telinga', price: 2000},
	{id: 11, nama: 'Sabun Telinga', price: 2000},
	{id: 12, nama: 'Sabun Telinga', price: 2000},
	{id: 13, nama: 'Sabun Telinga', price: 2000},
	{id: 14, nama: 'Sabun Telinga', price: 2000},
	{id: 15, nama: 'Sabun Telinga', price: 2000},
	{id: 16, nama: 'Sabun Telinga', price: 2000},
	{id: 17, nama: 'Sabun Telinga', price: 2000},
	{id: 18, nama: 'Sabun Telinga', price: 2000},
];

function HomeScreen({ navigation }) {

	const [state, dispatch] = useContext(Context);

	const [barcode, setBarcode] = useState('');

	const barcodeRef = useRef(null);

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

    function handleBarcode(e) {
    	let barcode = e.nativeEvent.text;
    	let findProduct = datas.find(data => data.id == barcode)

    	if (typeof findProduct != 'undefined') {
    		handleAdd(findProduct)

    		setBarcode('')
    	}

    	setTimeout(() => {
    		barcodeRef.current.focus()
    	}, 100)
    }

    function handleAdd(bag) {
    	dispatch({ type: 'INCREASE_CART', bag: bag})
    }

    const subtotal = () => {
    	let total = 0;
    	for (var i = 0; i < state.cart.bags.length; i++) {
    		total += state.cart.bags[i].price * state.cart.bags[i].qty
    	}

    	return total;
    }

    const total = () => {
    	let total = 0;
    	for (var i = 0; i < state.cart.bags.length; i++) {
    		total += state.cart.bags[i].price * state.cart.bags[i].qty
    	}

    	return total;
    }

	return (
	  	<ThemeProvider theme={theme}>
			<View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#ffffff'}}>
				<View style={{flex: 2, flexDirection: 'column' }}>
					<View style={{marginTop: 20, backgroundColor: '#ffffff'}}>
						<Input
				          autoCapitalize="none"
				          autoCorrect={false}
				          leftIcon={
						    <Ionicons name="ios-search" size={30} color="#1293ff" />
						  }
				        />
					</View>
					<View style={{flex: 1, flexWrap: 'wrap', padding: 10, flexDirection: 'row'}}>
						{datas.map((data, key) => {
							return (
								<View 
									key={key} 
									style={{
										width: 150, 
										height: 200, 
										borderWidth: 1, 
										borderColor: '#000000', 
										borderRadius: 10, 
										marginRight: 5, 
										marginBottom: 5, 
										backgroundColor: '#fffff'
									}}
								>
									<View style={{flex: 2, flexDirection: 'column', alignItems: 'center'}}>
										<Image source={{uri: 'https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/beauty/Dettol_Sabun_Anti_Bakteri_Fresh/Dettol_Sabun_Anti_Bakteri_Fresh_L_1.jpg'}} resizeMode="contain" style={{width: 100, height: 100}}/>
										<Text>{data.nama}</Text>
									</View>
									<View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', paddingHorizontal: 10}}>
										<Button title="Tambah" buttonStyle={[{height: 40}]} onPress={() => handleAdd(data)} />
									</View>
								</View>
							)
						})}
					</View>
					<View style={{marginTop: 20, flexDirection: 'row', backgroundColor: '#ffffff'}}>
						<View style={{flex: 2}}>
							<Input
								ref={barcodeRef}
					          	autoCapitalize="none"
					          	autoCorrect={false}
						        leftIcon={
								    <Ionicons name="ios-barcode" size={30} color="#1293ff" />
								}
							  	autoFocus={true}
							  	onSubmitEditing={(e) => handleBarcode(e)}
							  	value={barcode}
							  	onChangeText={(e) => setBarcode(e)}
					        />
						</View>
						<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
							<View style={{width: '45%'}}>
								<Button 
									icon={
									    <Ionicons name="ios-arrow-back" size={30} color="#ffffff" />
									}
								 	onPress={() => alert('-->')} 
								/>
							</View>
							<View style={{width: '45%'}}>
								<Button 
									icon={
									    <Ionicons name="ios-arrow-forward" size={30} color="#ffffff" />
									}
									onPress={() => alert('-->')} 
								/>
							</View>
						</View>
					</View>
				</View>
				<View style={{flex: 1, flexDirection: 'column', backgroundColor: '#F7F6F6', height: '100%'}}>
					<Text h4 style={{color: 'black', textAlign: 'center' }}>Detail</Text>
					<ScrollView style={{flex: 1, flexDirection: 'column', backgroundColor: '#f9fafe', marginBottom: '40%'}}>
						{state.cart.bags.map((data, key) => {
							return (
								<ListItem
									key={key}
								  	containerStyle={{backgroundColor: '#f9fafe'}}
								>
								    <ListItem.Content>
								      	<ListItem.Title style={{color: '#4F4F4F'}}>{`${data.nama+' x '+data.qty}`}</ListItem.Title>
								      	<ListItem.Subtitle style={{color: '#4F4F4F'}}>{data.price}</ListItem.Subtitle>
								    </ListItem.Content>
								    <ListItem.Title style={{color: '#4F4F4F'}}>{data.price*data.qty}</ListItem.Title>
								</ListItem>
							)
						})}
					</ScrollView>
					<View style={[styles.containerButton]}>
						<ListItem
							bottomDivider
						  	containerStyle={{backgroundColor: '#f9fafe'}}
						>
						    <ListItem.Content>
						      	<ListItem.Title style={{color: '#4F4F4F', fontWeight: 'bold'}}>Subtotal</ListItem.Title>
						    </ListItem.Content>
						    <ListItem.Title style={{color: '#4F4F4F'}}>{subtotal()}</ListItem.Title>
						</ListItem>
						<ListItem
							bottomDivider
						  	containerStyle={{backgroundColor: '#f9fafe'}}
						>
						    <ListItem.Content>
						      	<ListItem.Title style={{color: '#4F4F4F', fontWeight: 'bold'}}>Diskon</ListItem.Title>
						    </ListItem.Content>
						    <ListItem.Title style={{color: '#4F4F4F'}}>{'0'}</ListItem.Title>
						</ListItem>
						<ListItem
						  	containerStyle={{backgroundColor: '#f9fafe'}}
						>
						    <ListItem.Content>
						      	<ListItem.Title style={{color: '#4F4F4F', fontWeight: 'bold'}}>Total</ListItem.Title>
						    </ListItem.Content>
						    <ListItem.Title style={{color: '#4F4F4F'}}>{total()}</ListItem.Title>
						</ListItem>
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