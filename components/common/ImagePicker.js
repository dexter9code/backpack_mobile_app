import { useState } from "react";
import {
  PermissionStatus,
  launchImageLibraryAsync,
  useMediaLibraryPermissions,
  MediaTypeOptions,
} from "expo-image-picker";
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Vibration,
} from "react-native";
import { colors } from "./../../constants/colors";

const ImagePicker = function () {
  const [pickedImage, setPickedImage] = useState();
  const [libraryPermissionInformation, requestPermission] =
    useMediaLibraryPermissions();

  async function verfiyPermisson() {
    if (libraryPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (libraryPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        `Insufficient Permission`,
        `You need grant Camera Permission to set up Profie Image`
      );

      return false;
    }
    return true;
  }

  async function ImageHandler() {
    const hasPermission = await verfiyPermisson();

    if (!hasPermission) return;

    const image = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    setPickedImage(image.uri);
  }

  let previewImage = (
    <Image
      source={require("../../assets/img/default.jpg")}
      style={styles.image}
    />
  );

  if (pickedImage) {
    previewImage = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>{previewImage}</View>
        <Pressable
          onPress={ImageHandler}
          style={({ pressed }) => pressed && styles.pressed}
        >
          <Text style={styles.btnTxt}>choose Image</Text>
        </Pressable>
      </View>

      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() => Vibration.vibrate()}
      >
        <Text style={styles.btnText}>Update</Text>
      </Pressable>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 10,
  },
  innerContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  imageContainer: {
    width: 80,
    height: 80,
    overflow: "hidden",
    borderRadius: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  btnText: {
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: 12,
    textAlign: "center",
    color: colors.cherryRed,
  },
  btnTxt: {
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: 12,
    textAlign: "center",
    color: colors.pink700,
  },
  pressed: {
    opacity: 0.6,
  },
});
