import React from "react";
import { LogBox, StatusBar, useColorScheme } from "react-native";
import "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";

/**
 * ? Local Imports
 */
import Navigation from "./src/navigation";
import { isAndroid } from "@freakycoder/react-native-helpers";
import { DefaultTheme } from "@react-navigation/native";

LogBox.ignoreAllLogs(true);

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "tomato",
      secondary: "yellow",
    },
  };

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(false);
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, [scheme, isDarkMode]);

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Navigation />
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
