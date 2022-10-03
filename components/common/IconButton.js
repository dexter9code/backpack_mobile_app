import { Pressable, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "./../../constants/colors";

const IconButton = function ({
  iconName,
  iconColor,
  children,
  onPress,
  style,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        style,
        styles.buttonContainer,
        pressed && styles.pressed,
      ]}
    >
      <Entypo name={iconName} color={iconColor} size={18} style={styles.icon} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    margin: 4,
    borderWidth: 1,
    backgroundColor: colors.pink700,
    borderRadius: 16,
    borderColor: "tansparent",
  },
  pressed: {
    opacity: 0.6,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: colors.white600,
    fontWeight: "bold",
  },
});
