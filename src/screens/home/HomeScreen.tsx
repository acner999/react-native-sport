import React, { useMemo } from "react";
import { Button, FlatList, Image, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./HomeScreen.style";
import CardItem from "./components/card-item/CardItem";
import MockData from "./mock/MockData";
import fonts from "@fonts";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { DrawerActions, useTheme } from "@react-navigation/native";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { Avatar } from "react-native-paper";

/* -------------------------------------------------------------------------- */
/*                                 Component                                 */
/* -------------------------------------------------------------------------- */
const HomeScreen: React.FC = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleItemPress = () => {
    NavigationService.navigate("Detail");
  };

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <RNBounceable onPress={handleMenuPress}>
        <Icon
          name="menu"
          type={IconType.Ionicons}
          color={colors.iconBlack}
          size={30}
        />
      </RNBounceable>
      <View>
        <Image
          resizeMode="cover"
          source={require("../../assets/images/logohtc.png")}
          style={styles.logoPicImageStyle}
        />
      </View>

      <View>
        <Avatar.Text size={30} label="AC" />
      </View>
    </View>
  );

  const renderList = () => (
    <View style={styles.listContainer}>
      <FlatList
        data={MockData}
        renderItem={({ item }) => (
          <CardItem data={item} onPress={handleItemPress} />
        )}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} /> */}
      {renderHeader()}
      <View style={styles.contentContainer}>
        <View>
          <Text h1 bold color={colors.text}>
            Futbol Suizero
          </Text>
          <Text
            h3
            fontFamily={fonts.montserrat.lightItalic}
            color={colors.placeholder}
          >
          Plataforma de desafios de fubol suizero 
          </Text>
        </View>
        {renderList()}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
