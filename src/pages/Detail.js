import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import SwiperSlider from "../components/SwiperSlider";
import Stars from "react-native-stars";

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperSlider />
      </View>
      <View style={styles.headerContent}>
        <View style={{ width: "65%" }}>
          <Text style={styles.itemTitle}>Casa de Praia</Text>
        </View>
        <View style={{ width: "35%" }}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Stars
              default={4}
              count={5}
              size={20}
              starSize={20}
              fullStar={
                <Ionicons name="md-star" size={22} style={styles.myStarStyle} />
              }
              emptyStar={
                <Ionicons
                  name="md-star-outline"
                  size={22}
                  style={styles.myStarStyle}
                />
              }
            />
          </View>
        </View>
      </View>
      <Text style={styles.price}>R$1200,00</Text>
      <Text style={styles.description}>
        Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15, marginTop: 20 }}
      >
        <View style={styles.slide}>
          <Image
            source={require("../assets/house2.jpg")}
            style={{ width: 90, height: 90, borderRadius: 2 }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/house2.jpg")}
            style={{ width: 90, height: 90, borderRadius: 2 }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/house2.jpg")}
            style={{ width: 90, height: 90, borderRadius: 2 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  swiperContent: {
    flexDirection: "row",
    width: "100%",
    height: 340,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
    marginTop: 20,
  },
  itemTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#4f4a4a",
  },

  rating: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 10,
    color: "#4f4a4a",
  },
  myStarStyle: {
    color: "#e7a74e",
    backgroundColor: "transparent",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  price: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
    paddingHorizontal: 20,
  },
  description: {
    fontFamily: "Montserrat_500Medium",
    paddingHorizontal: 20,
    fontSize: 14,
    color: "#4f4a4a",
    lineHeight: 20,
    marginTop: 20,
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    heigh: "100%",
    marginRight: 20,
  },
});
