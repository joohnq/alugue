import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

export default function CardItemBlock(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Image source={props.cover} style={styles.cover}/>
      <View style={styles.content}>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.price}>R${props.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    height: 80,
    padding: 10,
    backgroundColor: "#fff",
    marginTop: 15,
    marginRight: 10,
    marginBottom: 10,
    elevation: 2,
    borderRadius: 10,
  },
  cover: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },

  description: {
    width: "50%",
    fontFamily: "Montserrat_400Regular",
    fontSize: 10,
  },

  price: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 12,
    paddingTop: 2,
  },
});
