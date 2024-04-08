import type { TextStyle, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import type { ExtendedTheme } from "@react-navigation/native";
import { palette } from "@theme/themes";

interface Style {
  container: ViewStyle;
  descriptionTextStyle: TextStyle;
  contentContainer: ViewStyle;
  languageContainer: ViewStyle;
  languageColorStyle: ViewStyle;
  starContainer: ViewStyle;
  valueTextStyle: TextStyle;
  forkContainer: ViewStyle;
  escudoStyle: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      paddingTop: 2,
      paddingHorizontal: 0,
      paddingBottom: 0,
      marginTop: 10,
      borderWidth: 1,
      borderRadius: 8,
      width: ScreenWidth * 0.9,
      borderColor: colors.borderColor,
      backgroundColor: colors.dynamicBackground,
    },
    descriptionTextStyle: {
      marginTop: 8,
    },
    contentContainer: {
      marginTop: 0,
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: palette.highlight,
      borderBottomEndRadius: 8,
      borderBottomStartRadius: 8,
      padding: 5,
      justifyContent: "center",
    },
    languageContainer: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    languageColorStyle: {
      width: 15,
      height: 15,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: colors.borderColor,
      backgroundColor: colors.calpyse,
    },
    starContainer: {
      marginLeft: 16,
      flexDirection: "row",
      alignItems: "center",
    },
    valueTextStyle: {
      marginLeft: 8,
      textAlign: "center",
      color: palette.calpyse,

    },
    forkContainer: {
      marginLeft: 16,
      flexDirection: "row",
      alignItems: "center",
    },
    escudoStyle: {
      height: 100,
      width: 100,
      borderRadius: 30,
    },
  });
};
