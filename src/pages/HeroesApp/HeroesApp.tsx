import React from 'react'
import AppRouter from '../../routers/AppRouter';
import { AuthProvider } from '../../context/auth/AuthContext';

const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default HeroesApp;