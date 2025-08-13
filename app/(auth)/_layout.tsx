import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: () => "",
            }}
        />
    );
}