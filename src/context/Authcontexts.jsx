
import React, { createContext, useContext, useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';



const Authcontexts = createContext()


export default function Authcontextsprovider({ children }) {


  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

   // Handle user state changes
   function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


  return (
    <Authcontexts.Provider value={{ user}}>
      {children}
    </Authcontexts.Provider>
  )
}

export const useAuthcontexts = () => useContext(Authcontexts)


