import { StyleSheet } from "react-native";
import React, { useState, Alert, useContext } from "react";
import AuthContent from "../components/Auth/AuthContent";
import AuthContext from "../store/auth-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token)
    } catch (error) {
      Alert.alert(
        "Signup Failed",
        "Could not create user. Please check your input or try again later"
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
};

export default SignupScreen;

const styles = StyleSheet.create({});
