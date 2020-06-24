import { Platform } from "react-native";

import colors from "./colors";

export default {
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.os === "android" ? "Roboto" : "",
  },
};
