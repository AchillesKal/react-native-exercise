import React from "react";
import { View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDeatailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    // <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
    //   <Card
    //     title="Red Jacket for Sale"
    //     subTitle="100$"
    //     image={require("./app/assets/jacket.png")}
    //   ></Card>
    // </View>
    <ListingDeatailsScreen></ListingDeatailsScreen>
  );
}
