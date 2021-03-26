import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Store from './src/context/Store';

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