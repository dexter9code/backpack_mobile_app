import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import AuthStack from "./Auth";
import RootStack from "./RootStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setToken } from "../features/authSlice";
import { alreadyUser } from "../features/authentication-slice";
import AuthContext from "../context/AuthProvider";
import { getCurrentUserData } from "../helper/http-req";
import Offline from "../components/Offine";
import SplashLoading from "../components/other/SplashLoding";

const AppStack = function () {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useSelector((state) => state.Authorization.authentication);
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

  const checkForToken = async () => {
    setIsLoading(true);
    let token;
    try {
      token = await AsyncStorage.getItem("token");
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      return;
    }

    if (token) {
      // dispatch(alreadyUser());
      const user = await getCurrentUserData(token);
      authCtx.authenticate(token);
      authCtx.updatedUser({
        name: user?.data.currentUser.name,
        email: user?.data.currentUser.email,
        photo: user?.data.currentUser.photo,
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkForToken();
  }, []);

  if (isLoading) return <SplashLoading />;

  return (
    <NavigationContainer>
      {authCtx.isAuthenticated && <RootStack />}
      {!authCtx.isAuthenticated && <AuthStack />}
      {/* <AuthStack /> */}
      {/* <RootStack /> */}
    </NavigationContainer>
  );
};

export default AppStack;
