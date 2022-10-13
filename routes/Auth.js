import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./../screens/WelcomeScreen";
import LoginScreen from "./../screens/LoginScreen";
import SignupScreen from "./../screens/SignupScreen";
import { colors } from "./../constants/colors";

const Stack = createNativeStackNavigator();

const AuthStack = function () {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#f7f7f7" },
      }}
    >
      <Stack.Screen
        name="welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
