import type { ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import {
  Button,
  NativeModules,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RangDongStoreScreen from '../RangDongStoreScreen';

export function HomeScreen(): ReactElement {
  const handleOpenUnityDemo = React.useCallback(() => {
    if (Platform.OS === 'android') {
      NativeModules.UnityContainer.createEvent();
    } else {
      NativeModules.IOTContainer.createEvent('testName', 'testLocation');
    }
  }, []);

  const navigation = useNavigation<any>();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.header}>
            App demo tích hợp unity vào React native
          </Text>
        </View>
        <View style={styles.viewBTN}>
          <Button title="Show 3D" onPress={handleOpenUnityDemo} />
        </View>
        <View style={styles.viewBTN}>
          <Button
            title="Rạng Đông Store"
            onPress={() => {
              navigation.navigate(RangDongStoreScreen.displayName, {});
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bbf1fa',
    height: '20%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: '300',
    color: '#1a508b',
  },
  viewBTN: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export interface HomeScreenProps {
  //
}

HomeScreen.defaultProps = {
  //
};

HomeScreen.displayName = nameof(HomeScreen);

export default HomeScreen;
