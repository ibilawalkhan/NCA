import { createContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const getUserFromStorage = async () => {
      try {
        const userJson = await AsyncStorage.getItem('user');
        const user = JSON.parse(userJson);
        if (user) {
          dispatch({ type: 'LOGIN', payload: user });
        }
      } catch (error) {
        console.error('Error getting user from AsyncStorage:', error);
      }
    };

    getUserFromStorage();
  }, []);

  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
