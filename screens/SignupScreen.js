import { StyleSheet } from 'react-native'
import React, { useState }from 'react'
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { createUser } from '../util/auth'

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({email, password}) {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />
  }

  return (
   <AuthContent onAuthenticate={signupHandler} />
  )
}

export default SignupScreen

const styles = StyleSheet.create({})