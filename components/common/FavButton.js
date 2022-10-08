import { Pressable, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "./../../constants/colors";

const FavButton = function ({ liked, iconColor, children, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Entypo
        name={liked ? "heart" : "heart-outlined"}
        color={iconColor}
        size={18}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default FavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    margin: 4,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: colors.pink700,
    borderRadius: 16,
  },
  pressed: {
    opacity: 0.6,
  },
  icon: {
    marginRight: 0,
  },
  text: {
    color: colors.white600,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
