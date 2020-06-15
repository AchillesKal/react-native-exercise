import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";

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
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/profile.png")}
            title="Achilles Kal"
            subTitle="5 Listings"
          ></ListItem>
        </View>
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
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
