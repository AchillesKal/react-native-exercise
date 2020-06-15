import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jacket.png")}
      ></Image>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red Jacket</Text>
        <Text style={styles.price}>100$</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default ListingDetailsScreen;
