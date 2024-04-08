import React, { useMemo } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { View, Image } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import createStyles from "./CardItem.style";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useTheme } from "@react-navigation/native";
import type { ICardItem } from "@services/models";
import Text from "@shared-components/text-wrapper/TextWrapper";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ICardItemProps {
  style?: CustomStyleProp;
  data: ICardItem;
  onPress: () => void;
}

const CardItem: React.FC<ICardItemProps> = ({ style, data, onPress }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const { name, description, language, star, fork } = data;

  const renderHeader = () => (
    <>
      <Text h4 bold color={colors.text}>
        {name}
      </Text>
      <Text h5 color={colors.placeholder} style={styles.descriptionTextStyle}>
        {description}
      </Text>
    </>
  );

  const renderStar = () => (
    <View style={styles.starContainer}>
      <Icon name="heart-o" type={IconType.FontAwesome} color={colors.text} />
      <Text style={styles.valueTextStyle} h5> {star} Me gusta</Text>
    </View>
  );

  const renderFork = () => (
    <View style={styles.forkContainer}>
      <Icon name="comment-o" type={IconType.FontAwesome} color={colors.secondary} />
      <Text style={styles.valueTextStyle} h5> {fork} Comentarios </Text>
    </View>
  );


  return (
    <RNBounceable style={[styles.container, style]} onPress={onPress}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <View style={{ height: 42, flex:1, justifyContent: "center", alignItems: "center",  }}>
            <Text h3 bold color={colors.text} center>
              Liga de Futbol de San lorenzo
            </Text>
          </View>

          <Image
            resizeMode="cover"
            source={require("../../../../assets/images/escudo1.png")}
            style={styles.escudoStyle}
          />
        </View>
        <View
          style={{  justifyContent: "center", alignItems: "center" }}
        >
          <Text h2 bold color={colors.primary} center>
            VS
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
        <View style={{ height: 42, flex:1, justifyContent: "center", alignItems: "center",  }}>
            <Text h3 bold color={colors.text} center>
              Ocampeño
            </Text>
          </View>
          <Image
            resizeMode="cover"
            source={require("../../../../assets/images/escudo2.png")}
            style={styles.escudoStyle}
          />
        </View>
      </View>

      <View style={styles.contentContainer}>

        {renderStar()}
        {renderFork()}
       
      </View>
    </RNBounceable>
  );
};

export default CardItem;
