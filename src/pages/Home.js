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
import { useNavigation } from "@react-navigation/native";
import CardItemBlock from "../components/CardItemBlock";
import CardItemLine from "../components/CardItemLine";
import CardItemBlur from "../components/CardItemBlur";

export default function Home() {
  const navigation = useNavigation();
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
        style={{ paddingHorizontal: 15, marginBottom: 20 }}
      >
        <CardItemBlock
          cover={require("../assets/house1.jpg")}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={() => navigation.navigate("Detail")}
        />
        <CardItemBlock
          cover={require("../assets/house2.jpg")}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={() => {}}
        />
        <CardItemBlock
          cover={require("../assets/house3.jpg")}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={() => {}}
        />
        <CardItemBlock
          cover={require("../assets/house4.jpg")}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={() => {}}
        />
        <CardItemBlock
          cover={require("../assets/house5.jpg")}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={() => {}}
        />
        <CardItemBlock
          cover={require("../assets/house6.jpg")}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={() => {}}
        />
      </ScrollView>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Próximo de você</Text>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ paddingHorizontal: 15, marginBottom: 20 }}
      >
        <CardItemLine
          cover={require("../assets/house1.jpg")}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          price={'1200,00'}
          onPress={() => {}}
        />
        <CardItemLine
          cover={require("../assets/house2.jpg")}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          price={'1200,00'}
          onPress={() => {}}
        />
        <CardItemLine
          cover={require("../assets/house3.jpg")}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          price={'1200,00'}
          onPress={() => {}}
        />
        <CardItemLine
          cover={require("../assets/house4.jpg")}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          price={'1200,00'}
          onPress={() => {}}
        />
        <CardItemLine
          cover={require("../assets/house5.jpg")}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          price={'1200,00'}
          onPress={() => {}}
        />
        <CardItemLine
          cover={require("../assets/house6.jpg")}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          price={'1200,00'}
          onPress={() => {}}
        />
      </ScrollView>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Dica do dia</Text>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ paddingHorizontal: 15, marginBottom: 20 }}
      >
        <CardItemBlur
          cover={require("../assets/house1.jpg")}
          name="Casa de Praia"
          offer={25}
          onPress={() => {}}
        />
        <CardItemBlur
          cover={require("../assets/house2.jpg")}
          name="Casa de Praia"
          offer={25}
          onPress={() => {}}
        />
        <CardItemBlur
          cover={require("../assets/house3.jpg")}
          name="Casa de Praia"
          offer={25}
          onPress={() => {}}
        />
        <CardItemBlur
          cover={require("../assets/house4.jpg")}
          name="Casa de Praia"
          offer={25}
          onPress={() => {}}
        />
        <CardItemBlur
          cover={require("../assets/house5.jpg")}
          name="Casa de Praia"
          offer={25}
          onPress={() => {}}
        />
        <CardItemBlur
          cover={require("../assets/house6.jpg")}
          name="Casa de Praia"
          offer={25}
          onPress={() => {}}
        />
      </ScrollView>
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
