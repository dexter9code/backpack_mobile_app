import React from "react";
import { StyleSheet, Pressable, View, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllToursScreen from "./../screens/AllToursScreen";
import TourScreen from "./../screens/TourScreen";
import { colors } from "./../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const TourStack = function () {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: colors.greenGrad },
        headerTintColor: colors.white600,
        contentStyle: { backgroundColor: colors.white600 },
        headerBackVisible: true,
        headerRight: ({ tintColor }) => (
          <Pressable onPress={() => navigation.navigate("Account")}>
            <MaterialIcons
              name="account-circle"
              color={tintColor}
              size={26}
              style={styles.icon}
            />
          </Pressable>
        ),
      })}
    >
      <Stack.Screen
        name="Tours"
        component={AllToursScreen}
        options={{
          title: `Backpack `,
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
      <Stack.Screen name="tour" component={TourScreen} />
    </Stack.Navigator>
  );
};

export default TourStack;

const styles = StyleSheet.create({
  icon: {
    marginTop: 5,
  },
  imageContainer: {
    width: 26,
    height: 26,
    marginHorizontal: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
