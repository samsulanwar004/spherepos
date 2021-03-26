import React, { useContext, useEffect, Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Context} from './context/Store';

//screens
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

function Route({ navigation }) {

  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // let accessToken;
      // let fotoId;

      // try {
      //   accessToken = await storageGet('access_token');

      // }

      setTimeout(() => {
        dispatch({ type: 'RESTORE_LOGIN', account: 'samsul'});
      }, 1000);
    };

    bootstrapAsync();
  }, []);

  if (state.auth.isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator initialRouteName="Login">
    {state.auth.isLogin === false ? (
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      ) : (
        <Fragment>
          <Stack.Screen name="Home" component={HomeScreen} options={{
            title: 'Sphere POS', 
            headerStyle: {
              backgroundColor: '#1293ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
        </Fragment>
      )
    }
    </Stack.Navigator>
  );
}

export default Route;