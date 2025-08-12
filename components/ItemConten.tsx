import { View, Text, Pressable } from "react-native";
import React from "react";
import { Inter_600SemiBold, useFonts } from "@expo-google-fonts/inter";

interface HeaderButton {
    content: string | React.ReactNode;
    onPress?: () => void;
    color?: string;
}

interface ItemContenProps {
    width?: number;
    height?: number;
    borderRadius?: number;
    children: React.ReactNode;
    headerTitle?: string;
    headerButtons?: HeaderButton[];
}

export const ItemConten = ({
    width,
    height,
    children,
    borderRadius = 10,
    headerTitle,
    headerButtons = []
}: ItemContenProps) => {

    const [fontsLoaded] = useFonts({
        Inter_600SemiBold,
    });

    if (!fontsLoaded) return null;

    return (
        <View
            style={{
                width,
                height,
                borderRadius
            }}
            className="bg-white py-4"
        >
            <View className="flex flex-row px-4 justify-between items-center">
                {headerTitle ? (
                    <Text
                        style={{ fontFamily: "Inter_600SemiBold", fontSize: 18 }}
                        className="text-[#3F3F3F]"
                    >
                        {headerTitle}
                    </Text>
                ) : <View />}

                <View className="flex flex-row px-4 items-center space-x-2">
                    {headerButtons.map((btn, index) => (
                        <Pressable
                            key={index}
                            onPress={btn.onPress}
                            style={{ paddingHorizontal: 4, paddingVertical: 2 }}
                        >
                            {typeof btn.content === "string" ? (
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontFamily: "Inter_600SemiBold",
                                        color: btn.color || "#007BFF"
                                    }}
                                >
                                    {btn.content}
                                </Text>
                            ) : (
                                btn.content
                            )}
                        </Pressable>
                    ))}
                </View>
            </View>
            <View className="w-full py-4">
                {children}
            </View>
        </View>
    );
};
