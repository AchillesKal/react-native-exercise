import React from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "D1",
    description: "T1",
    image: require("../assets/profile.png"),
  },
  {
    id: 2,
    title: "D2",
    description: "T2",
    image: require("../assets/profile.png"),
  },
];

function MessagesScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default MessagesScreen;
