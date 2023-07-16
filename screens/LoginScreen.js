import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { loginUser } from "../utils/auth";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const signinHandler = async ({ email, password }) => {
    try {
      setIsAuthenticating(true);
      await loginUser(email, password);
    } catch (err) {
      Alert.alert("Authentication failed!, please check your credentials");
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent isLogin onAuthenticate={signinHandler} />;
}

export default LoginScreen;
