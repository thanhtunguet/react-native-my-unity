import {
  Platform,
  requireNativeComponent,
  UIManager,
  ViewStyle,
} from 'react-native';
import type { FC } from 'react';
import UnityView from './UnityView';
import { UnityModule, UnityViewMessage } from './UnityModule';
import MessageHandler from './MessageHandler';
import UnityResponderView from './UnityResponderView';

const LINKING_ERROR =
  `The package 'react-native-my-unity' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type MyUnityProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'MyUnityView';

const componentNameIsValid =
  UIManager.getViewManagerConfig(ComponentName) != null;

if (!componentNameIsValid) {
  throw new Error(LINKING_ERROR);
}

export const MyUnityView: FC<MyUnityProps> =
  requireNativeComponent<MyUnityProps>(
    ComponentName
  ) as unknown as FC<MyUnityProps>;

export default UnityView;

export { UnityModule, MessageHandler, UnityViewMessage, UnityResponderView };
