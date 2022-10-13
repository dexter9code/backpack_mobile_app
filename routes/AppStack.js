import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import AuthStack from "./Auth";
import RootStack from "./RootStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setToken } from "../features/authSlice";
import { alreadyUser } from "../features/authentication-slice";
import AuthContext from "../context/AuthProvider";

const AppStack = function () {
  const auth = useSelector((state) => state.Authorization.authentication);
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

  const checkForToken = async () => {
    let token;
    try {
      token = await AsyncStorage.getItem("token");
    } catch (error) {
      console.log(error.message);
    }

    if (token) {
      // dispatch(alreadyUser());
      authCtx.authenticate(token);
    }
  };

  useEffect(() => {
    checkForToken();
  }, []);

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
