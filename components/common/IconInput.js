import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, View, StyleSheet } from "react-native";
import { colors } from "./../../constants/colors";
import { useSelector } from "react-redux";
const IconInput = function ({
  iconName,
  placeHolder,
  onChange,
  style,
  EntryType,
  inputValid,
}) {
  const error = useSelector((state) => state.Error.error);

  return (
    <View
      style={[
        styles.inputContainer,
        style,
        inputValid && inputValid.status === `error` && styles.errorContainer,
      ]}
    >
      <MaterialCommunityIcons
        name={iconName}
        color={colors.gray500}
        size={18}
        style={styles.icon}
      />
      <TextInput
        placeholder={placeHolder}
        onChangeText={onChange}
        style={styles.input}
        secureTextEntry={EntryType}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default IconInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 8,
    marginVertical: 5,
    backgroundColor: colors.cream500,
    borderColor: colors.gray500,
  },
  errorContainer: {
    backgroundColor: colors.red200,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    color: colors.black500,
  },
});
