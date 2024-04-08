import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
<<<<<<< HEAD
  RadioButton,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import colores from '../config/colores';
=======
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
>>>>>>> 8382c4f28316a924367f6ad2f05c1f1438b1d74b

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AuthContext} from '../components/context';
<<<<<<< HEAD
import Services from '../services/service';
=======
>>>>>>> 8382c4f28316a924367f6ad2f05c1f1438b1d74b

export function DrawerContent(props, {navigation}) {
  const paperTheme = useTheme();

  const {signOut, toggleTheme} = React.useContext(AuthContext);

  const rndInt = Math.floor(Math.random() * 9) + 1;
  const url =
    'https://api.hello-avatar.com/adorables/face/eyes' +
    rndInt +
    '/nose' +
    rndInt +
    '/mouth' +
    rndInt +
    '/026EB9/50';

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: url,
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
<<<<<<< HEAD
                <Title style={styles.title}>
                  {props.loginState.user.sap.U_NAME}
                </Title>
                <Caption style={styles.caption}>
                  {props.loginState.user.id} -{' '}
                  {props.loginState.user.usu_codigo}
=======
                <Title style={styles.title}>{props.loginState.name}</Title>
                <Caption style={styles.caption}>
                  {props.loginState.email}
>>>>>>> 8382c4f28316a924367f6ad2f05c1f1438b1d74b
                </Caption>
              </View>
            </View>

            {/*<View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>*/}
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
<<<<<<< HEAD
                <Icon name="car-key" color={color} size={size} />
              )}
              label="Nueva Recepción"
=======
                <Icon name="account-plus" color={color} size={size} />
              )}
              label="Nuevo Afiliado"
>>>>>>> 8382c4f28316a924367f6ad2f05c1f1438b1d74b
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-circle" color={color} size={size} />
              )}
              label="Perfil"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            {/*<DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate('BookmarkScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="cogs" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />*/}
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Soporte"
              onPress={() => {
                //props.navigation.navigate('SupportScreen');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Modo Oscuro</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
<<<<<<< HEAD
          <Drawer.Section title="Sucursales">
            <View>
              <Sucursales />
            </View>
          </Drawer.Section>
=======
>>>>>>> 8382c4f28316a924367f6ad2f05c1f1438b1d74b
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Cerrar Sesión"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

<<<<<<< HEAD
const Sucursales = () => {
  const [value, setValue] = React.useState('first');
  const [sucursales, setSucursales] = React.useState([]);
  const getSucursales = async () => {
    const respuesta = await Services.get('/me/sucursales');
    console.log('sucursales', respuesta.data);
    setTimeout(() => {
      setSucursales(respuesta.data);
    }, 1000);

    const token = await Services.getToken();
    //console.log('token', token);
    const sucursal = await Services.getSucursal();
    //console.log('sucursal', sucursal);

    if (!sucursal) {
      await Services.setItem(
        token.user.entidad + '_sucursal',
        Object.keys(respuesta.data)[0],
      );
      setValue(Object.keys(respuesta.data)[0]);
    } else {
      setValue(sucursal);
    }
    //console.log('sucursal', sucursal);
  };

  React.useEffect(() => {
    getSucursales();
  }, []);

  const setSucursal = async v => {
    setValue(v);
    const token = await Services.getToken();
    await Services.setItem(token.user.entidad + '_sucursal', v);
  };

  return (
    <RadioButton.Group onValueChange={v => setSucursal(v)} value={value}>
      {Object.keys(sucursales).map(key => {
        //console.log(value, key, value, key, value === key, 'acner');
        return (
          <RadioButton.Item
            key={key}
            color={colores.primary}
            label={sucursales[key].sucursal}
            value={key}
            status={value == key ? 'checked' : 'unchecked'}
          />
        );
      })}
    </RadioButton.Group>
  );
};

=======
>>>>>>> 8382c4f28316a924367f6ad2f05c1f1438b1d74b
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
