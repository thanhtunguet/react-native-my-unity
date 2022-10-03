import type { ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen';
import RangDongStoreScreen from '../RangDongStoreScreen';

export function RootNavigator(): ReactElement {
  const { Navigator, Screen } = React.useRef(createStackNavigator()).current;

  return (
    <Navigator initialRouteName={HomeScreen.displayName}>
      <Screen name={HomeScreen.displayName} component={HomeScreen} />
      <Screen
        name={RangDongStoreScreen.displayName}
        component={RangDongStoreScreen}
      />
    </Navigator>
  );
}

export interface RootNavigatorProps {
  //
}

RootNavigator.defaultProps = {
  //
};

RootNavigator.displayName = nameof(RootNavigator);

export default RootNavigator;
