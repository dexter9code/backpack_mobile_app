import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";
import Sperator from "./Sperator";
import { MENU_ITEMS } from "./../../data/menu-item";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "./../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const AccountDetails = function () {
  const navigation = useNavigation();

  const onPressHandler = (target) => {
    navigation.navigate(target);
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        ItemSeparatorComponent={Sperator}
        keyExtractor={(item) => item.id}
        data={MENU_ITEMS}
        renderItem={({ item }) => (
          <View style={styles.iconsRootContainer}>
            <View style={styles.iconsContainer}>
              <Pressable
                style={({ pressed }) => [
                  styles.iconsContainer,
                  pressed && styles.pressed,
                ]}
                onPress={
                  item.tragetScreen
                    ? onPressHandler.bind(null, item?.tragetScreen)
                    : null
                }
              >
                <MaterialCommunityIcons
                  name={item.icon.name}
                  color={item.icon.backgroundColor}
                  size={30}
                />
                <Text style={styles.title}>{item.title}</Text>
              </Pressable>
            </View>

            <Pressable
              onPress={
                item.tragetScreen
                  ? onPressHandler.bind(null, item?.tragetScreen)
                  : null
              }
              style={({ pressed }) => pressed && styles.pressed}
            >
              <Feather name="chevron-right" color={colors.gray300} size={26} />
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 1,
  },
  iconsRootContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "uppercase",
    paddingHorizontal: 12,
    color: "#000",
  },
  pressed: {
    opacity: 0.5,
  },
});
