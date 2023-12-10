import React from 'react';
import AppNavigator from './src/Navigations/AppNavigator';
import Authcontextsprovider from './src/context/Authcontexts';

export default function App() {
  return (
    <>
    <Authcontextsprovider>
      <AppNavigator />
    </Authcontextsprovider>
    </>
  );
}
