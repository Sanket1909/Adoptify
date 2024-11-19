import { Stack } from "expo-router";
import { useFonts } from "expo-font";


export default function RootLayout() {
  useFonts({
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-regular':require('./../assets/fonts/Outfit-Regular.ttf')
  })
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/index"
        options={{
        headerShown:false
        }}
      />
    </Stack>);
}
