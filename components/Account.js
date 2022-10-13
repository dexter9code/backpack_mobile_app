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
import { changeUri } from "../helper/changeUri";

const Account = function ({ logoutHandler, userData }) {
  const { name, email, image } = userData;

  const updatedUri = changeUri(image);

  const onPressHandler = (e) => {
    logoutHandler();
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.profileImageContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: updatedUri }} style={styles.image} />
        </View>
        <Text style={styles.text}>{name}</Text>
        <Text>{email}</Text>
      </View>
      <AccountDetails />
      <Pressable
        style={({ pressed }) => [
          styles.buttonContainer,
          pressed && styles.preesed,
        ]}
        onPress={onPressHandler}
      >
        <Text style={styles.iconText}>Logout</Text>
        <MaterialCommunityIcons
          name="logout"
          size={24}
          color={colors.red500}
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
    marginTop: 15,
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
    borderRadius: 30,
    padding: 8,
    marginHorizontal: 8,
    marginVertical: 14,
    backgroundColor: colors.logoYellow,
    borderColor: colors.white500,
  },
  icon: {
    marginLeft: 10,
  },
  iconText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.cherryRed,
  },
  preesed: {
    opacity: 0.8,
  },
});
