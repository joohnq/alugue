import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function New(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Image source={props.cover} style={styles.cover} />
      <View style={styles.content}>
        <Text style={styles.title}>{props.name}</Text>
        <View style={styles.dot}></View>
        <Text style={styles.badge}>Novo</Text>
      </View>
      <Text style={styles.description}>{props.description}</Text>
      <View style={styles.footer}>
        <View style={{ width: "80%" }}>
          <Text style={styles.price}>R$1.204,00</Text>
        </View>
        <View style={{ width: "20%" }}>
          <Ionicons name="ios-add-circle" size={24} color="#000" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#fff",
    height: 250,
    width: 200,
    elevation: 2,
    borderRadius: 10,
    padding: 15,
    marginRight: 30,
    marginLeft: 2,
    marginBottom: 5,
  },
  cover: {
    width: 170,
    height: 110,
    borderRadius: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  title: {
    fontFamily: "Montserrat_700Bold",
    color: "#4f4a4a",
    fontSize: 12,
  },

  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: "red",
    marginHorizontal: 4,
  },

  badge: {
    fontFamily: "Montserrat_700Bold",
    color: "red",
    fontSize: 9,
  },

  description: {
    fontFamily: "Montserrat_400Regular",
    color: "#4f4a4a",
    fontSize: 10,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    width: '100%'
  },

  price:{
    fontFamily: "Montserrat_700Bold",
    fontSize: 15
  }
});
