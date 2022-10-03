import React from 'react';
import type { PropsWithChildren, ReactElement } from 'react';
import nameof from 'ts-nameof.macro';
import WebView from 'react-native-webview';

export function RangDongStoreScreen(
  props: PropsWithChildren<RangDongStoreScreenProps>
): ReactElement {
  const { children } = props;

  return (
    <>
      {children}
      <WebView
        source={{
          uri: 'https://rangdongstore.vn',
        }}
      />
    </>
  );
}

export interface RangDongStoreScreenProps {
  //
}

RangDongStoreScreen.defaultProps = {
  //
};

RangDongStoreScreen.displayName = nameof(RangDongStoreScreen);

export default RangDongStoreScreen;
