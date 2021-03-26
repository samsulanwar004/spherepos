import React, {useEffect, useContext, useState} from "react";
import { 
	View, 
	ActivityIndicator,
  	StyleSheet,
	Alert,
	TouchableOpacity 
} from 'react-native';
import { Button, ThemeProvider, Text, Input } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Context} from '../context/Store';

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
      width: '100%'
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
      marginBottom: 5
    },
    inputStyle: {
      height: 50
    }
  }
};

function LoginScreen({ navigation }) {

	const [state, dispatch] = useContext(Context);

	const [username, setUsername] = useState('');
  	const [password, setPassword] = useState('');
  	const [passwordHide, setPasswordHide] = useState(true);
  	const [loading, setLoading] = useState(false);
  	const [error, setError] = useState({username: [], password: []});

  	function logIn() {
  		Alert.alert(
	        'Title',
	        'Mantap'
	    );

	    dispatch({ type: 'LOG_IN', account: 'samsul'});
  	}

	return (
	  	<ThemeProvider theme={theme}>
			<View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Text h1 style={{color: '#1293ff'}}>Login</Text>
		        <View style={{width: '30%'}}>
			        <Input
			          label="Username"
			          placeholder=' Fill username here'
			          value={username}
			          onChangeText={setUsername}
			          autoCapitalize="none"
			          autoCorrect={false}
			          errorMessage={typeof error.username != 'undefined' ? error.username[0] : ''}
			        />
			        <Input
			          label="Password"
			          placeholder=' Fill password here'
			          value={password}
			          onChangeText={setPassword}
			          secureTextEntry={passwordHide}
			          rightIcon={
			            <TouchableOpacity onPress={() => setPasswordHide(!passwordHide)}>
			              <Ionicons name={passwordHide ? 'ios-eye-off' : 'ios-eye'} size={24} color="grey" />
			            </TouchableOpacity>
			          }
			          autoCapitalize="none"
			          autoCorrect={false}
			          errorMessage={typeof error.password != 'undefined' ? error.password[0] : ''}
			        />
			        <View style={{height: 30}}>
			          {loading && <ActivityIndicator
			            animating={true}
			            style= {{ opacity : 1}}
			            size="large" 
			            color="#1293ff"
			          />}
			        </View>
		        </View>
		        <View style={[styles.containerButton]}>
		          <Button title="LOGIN" onPress={() => logIn()} disabled={loading} />
		        </View>
		    </View>
	    </ThemeProvider>
	);
}

const styles = StyleSheet.create({
  containerButton: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '30%'
  }
});

export default LoginScreen;