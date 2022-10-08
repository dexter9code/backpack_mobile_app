import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TourStack from "./TourStack";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import AccountScreen from "./../screens/AccountScreen";
import { colors } from "./../constants/colors";

const Tab = createBottomTabNavigator();

const RootStack = function () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={TourStack}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Fontisto name="world-o" size={size} color={color} />;
          },
          title: `Tours`,
          tabBarActiveBackgroundColor: colors.greenGrad,
          tabBarActiveTintColor: colors.white600,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarActiveBackgroundColor: colors.greenGrad,
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            );
          },
          tabBarBadgeStyle: { backgroundColor: colors.greenGrad },
          tabBarActiveTintColor: colors.white600,
        }}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
