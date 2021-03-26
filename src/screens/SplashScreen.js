import React, {useEffect, useContext} from "react";
import { View, Dimensions, StatusBar, Image, Alert } from 'react-native';
import { Button, ThemeProvider, Text } from 'react-native-elements';

function SplashScreen({ navigation }) {

  return (
  	<ThemeProvider>
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1293ff'}}>
		  <Text h1 style={{color: 'white'}}>Sphere POS</Text>
		</View>
    </ThemeProvider>
  );
}

export default SplashScreen;