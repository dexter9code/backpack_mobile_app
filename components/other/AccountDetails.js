import { Image, View, StyleSheet, FlatList, Text } from "react-native";
import Sperator from "./Sperator";
import { MENU_ITEMS } from "./../../data/menu-item";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "./../../constants/colors";

const AccountDetails = function () {
  return (
    <View style={styles.rootContainer}>
      <FlatList
        ItemSeparatorComponent={Sperator}
        keyExtractor={(item) => item.id}
        data={MENU_ITEMS}
        renderItem={({ item }) => (
          <View style={styles.iconsRootContainer}>
            <View style={styles.iconsContainer}>
              <MaterialCommunityIcons
                name={item.icon.name}
                color={item.icon.backgroundColor}
                size={30}
              />
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <Feather name="chevron-right" color={colors.gray300} size={26} />
          </View>
        )}
      />
    </View>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 12,
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
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "uppercase",
    paddingHorizontal: 12,
    color: "#000",
  },
});
