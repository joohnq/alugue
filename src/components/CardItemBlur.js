import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";

export default function CardItemBlur(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <ImageBackground
        source={props.cover}
        style={styles.container}
        blurRadius={5}
        borderRadius={5}
      >
        <Text style={[styles.textCardBlur, styles.shadow]}>{props.name}</Text>
        <Text style={[styles.textCardBlur, styles.shadow]}>
          {props.offer}% OFF
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    padding: 15,
    marginRight: 30,
    marginLeft: 2,
    marginBottom: 5,
    marginTop: 15,
    opacity: 1.9,
  },

  textCardBlur: {
    color: "#fff",
    fontFamily: "Montserrat_700Bold",
    fontSize: 14,
    elevetion: 2,
  },

  shadow: {
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
    textShadowColor: "#000",
  },
});
