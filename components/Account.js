import {
  Image,
  View,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  Pressable,
} from "react-native";
import AccountDetails from "./other/AccountDetails";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "./../constants/colors";

const Account = function (props) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.profileImageContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/monica.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>Mona Sax</Text>
        <Text>doomdexter07@hotmail.com</Text>
      </View>
      <AccountDetails />
      <Pressable
        style={({ pressed }) => [
          styles.buttonContainer,
          pressed && styles.preesed,
        ]}
      >
        <Text style={styles.iconText}>Logout</Text>
        <MaterialCommunityIcons
          name="logout"
          size={24}
          color={"blue"}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
  },
  profileImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  imageContainer: {
    width: 90,
    height: 90,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 45,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    padding: 8,
    marginHorizontal: 8,
    marginVertical: 14,
    backgroundColor: colors.greenGrad,
  },
  icon: {
    marginLeft: 10,
  },
  iconText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.white600,
  },
  preesed: {
    opacity: 0.8,
  },
});
