import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "./../screens/AccountScreen";
import SettingScreen from "./../screens/SettingScreen";
import { colors } from "./../constants/colors";
import { Image, View, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const AccountStack = function () {
  return (
    <Stack.Navigator
      initialRouteName="account-home"
      screenOptions={{
        contentStyle: { backgroundColor: colors.white500 },
        headerStyle: { backgroundColor: colors.green500 },
        title: "Account",
        headerTintColor: colors.white500,
      }}
    >
      <Stack.Screen
        name="account-home"
        component={AccountScreen}
        options={{
          headerLeft: () => (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("../assets/img/backpack-logo-trans.png")}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="setting"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;

const styles = StyleSheet.create({
  imageContainer: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
