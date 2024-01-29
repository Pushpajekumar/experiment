import { StyleSheet, Text, View } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import React, { useCallback, useEffect, useState, useRef } from "react";
import * as SplashScreen from "expo-splash-screen";
import LottieView from "lottie-react-native";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const animation = useRef(null);

  useEffect(() => {
    async function prepare() {
      try {
        console.log("Pushpaje Kumar");
        animation.current?.play();
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        onLayout={onLayoutRootView}
      >
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 300,
            height: 300,
          }}
          source={require("./assets/animation.json")}
        />
      </View>
    );
  }

  // LocalAuthentication.authenticateAsync({
  //   promptMessage: "Authenticate to proceed",
  //   cancelLabel: "Cancel",
  // });

  return (
    <View>
      <Text>Pushpaje Kumar</Text>
    </View>
  );
}
