import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import SearchComplain from './Screens/SearchComplain';
import AddComplain from './Screens/AddComplain';
import ComplainDetails from './Screens/ComplainDetails';
import ComplainSearchResult from './Screens/ComplainSearchResult'
import { WorkoutsContextProvider } from './context/WorkoutContext'
import { AuthContextProvider } from './context/AuthContext'


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <NavigationContainer>
          <PaperProvider>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              <Stack.Screen name="SearchComplain" component={SearchComplain} options={{ headerShown: false }} />
              <Stack.Screen name="AddComplain" component={AddComplain} options={{ headerShown: false }} />
              <Stack.Screen name="ComplainDetails" component={ComplainDetails} options={{ headerShown: false }} />
              <Stack.Screen name="ComplainSearchResult" component={ComplainSearchResult} options={{ headerShown: false }} />
            </Stack.Navigator>
          </PaperProvider>
        </NavigationContainer>
      </WorkoutsContextProvider>
    </AuthContextProvider>
  );
}


