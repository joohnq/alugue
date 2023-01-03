import {
  View,
  Text,
  StyleSheet,
  ViewComponent,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function Home() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#FFF" }}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            placeholder="O que está procurando?"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ paddingHorizontal: 15 }}
      ></ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    marginVertical: 15,
  },
  inputArea: {
    width: "98%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 2,
    paddingHorizontal: 25,
    height: 37,
    borderRadius: 10,
  },
  input: {
    fontSize: 13,
    fontFamily: "Montserrat_500Medium",
    paddingHorizontal: 10,
    width: "90%",
  },
  contentNew: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    paddingHorizontal: 15,
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#4f4a4a",
  },
});
