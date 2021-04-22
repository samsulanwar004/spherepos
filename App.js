import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Store from './src/context/Store';
import SQLite from 'react-native-sqlite-storage';

// global.db = SQLite.openDatabase(
//   {name:'testDB.db', createFromLocation:1},
//   () => { 
//   	console.log('INFO: Connection successfully')
//   },
//   error => {
//     console.log("ERROR: " + error);
//   }
// );

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Store>
          <Route/>
        </Store>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}