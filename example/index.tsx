import { AppRegistry } from 'react-native';
import App from './src/App';
import KeepAwake from 'react-native-keep-awake';

if (__DEV__) {
  KeepAwake.activate();
}

AppRegistry.registerComponent('main', () => App);
