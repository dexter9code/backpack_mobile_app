import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "./../../constants/colors";

const NormalButton = function ({ children, onPress, style, textStyle }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </Pressable>
  );
};

export default NormalButton;

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
    borderRadius: 18,
  },
  pressed: {
    opacity: 0.6,
  },
  text: {
    color: colors.white600,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
});
