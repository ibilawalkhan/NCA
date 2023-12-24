// useAuthContext.js
import { useContext } from 'react';
import { AuthContext } from './AuthContext'; // Adjust the path based on your project structure

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
