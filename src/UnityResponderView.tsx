// @ts-ignore
import * as React from 'react';
// @ts-ignore
import { NativeModules, requireNativeComponent, ViewProps } from 'react-native';

const { RNUnity } = NativeModules;

interface UnityResponderViewProps {
  fullScreen: boolean;

  style?: ViewProps['style'];
}

export default class UnityResponderView extends React.Component<UnityResponderViewProps> {
  constructor(props: UnityResponderViewProps) {
    super(props);
  }

  static postMessage(gameObject = '', functionName = '', message = '') {
    if (gameObject !== '' && functionName !== '' && message !== '') {
      RNUnity.postMessage(gameObject, functionName, message);
    }
  }

  public componentDidMount() {
    RNUnity.initialize();
  }

  public componentWillUnmount() {
    RNUnity.unloadUnity();
  }

  public render() {
    // @ts-ignore
    const { ...props } = this.props;

    return <ResponderView {...props} />;
  }
}

const ResponderView = requireNativeComponent(
  'UnityResponderView',
  // @ts-ignore
  UnityResponderView
);
