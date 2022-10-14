import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { colors } from "./../../constants/colors";

const PlainInput = function ({
  labelTitle,
  defaultTitle,
  isEditable,
  style,
  showButton,
  inputPlaceholder,
  onchangeHandler,
  updateHandler,
  secureType,
}) {
  return (
    <View style={[styles.inputContainer]}>
      <Text style={styles.labelText}>{labelTitle}</Text>
      <View style={styles.innerContianer}>
        <TextInput
          defaultValue={defaultTitle}
          style={styles.input}
          placeholder={inputPlaceholder}
          editable={isEditable}
          onChangeText={onchangeHandler}
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry={secureType}
        />
        {showButton && (
          <View style={styles.btnContainer}>
            <Pressable
              style={({ pressed }) => pressed && styles.pressed}
              onPress={updateHandler}
            >
              <Text style={styles.btnText}>update</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default PlainInput;

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 20,
    flexDirection: "column",
    marginVertical: 8,
  },
  innerContianer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
    backgroundColor: colors.white500,
    paddingVertical: 2,
  },
  input: {
    marginHorizontal: 5,
    fontWeight: "bold",
    width: "80%",
  },
  labelText: {
    textTransform: "capitalize",
    fontSize: 12,
    fontWeight: "500",
    color: colors.gray700,
  },
  btnContainer: {
    width: 60,
    height: 20,
    backgroundColor: "transparent",
    // backgroundColor: colors.cherryRed,
  },
  btnText: {
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: 12,
    textAlign: "center",
    color: colors.cherryRed,
  },
  pressed: {
    opacity: 0.6,
  },
});
