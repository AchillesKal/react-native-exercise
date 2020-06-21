import React, { useState } from "react";
import { FlatList, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Shalom",
    description: "T1",
    image: require("../assets/profile.png"),
  },
  {
    id: 2,
    title: "Shalmo2",
    description: "T2",
    image: require("../assets/profile.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refrashing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("screen", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refrashing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "D2",
              description: "T2",
              image: require("../assets/profile.png"),
            },
          ])
        }
      ></FlatList>
    </Screen>
  );
}

export default MessagesScreen;
