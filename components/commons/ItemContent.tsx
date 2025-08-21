import { Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface HeaderButton {
  content: string | React.ReactNode;
  onPress?: () => void;
  color?: string;
}

interface ItemContentProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  children: React.ReactNode;
  headerTitle?: string;
  headerButtons?: HeaderButton[];
  border?: boolean;
}

export const ItemContent = ({
  width,
  height,
  children,
  borderRadius = 10,
  headerTitle,
  headerButtons = [],
  border = false,
}: ItemContentProps) => {
  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return (
    <View
      style={{
        width,
        height,
        borderRadius,
        borderColor: border ? '#E5E7EB' : 'transparent',
      }}
      className="border bg-white px-4 py-4">
      <View className="flex flex-row items-center justify-between">
        {headerTitle ? (
          <Text
            style={{ fontFamily: 'Inter_600SemiBold', fontSize: 18 }}
            className="text-[#3F3F3F]">
            {headerTitle}
          </Text>
        ) : (
          <View />
        )}

        <View className="flex flex-row items-center space-x-2">
          {headerButtons.map((btn, index) => (
            <Pressable
              key={index}
              onPress={btn.onPress}
              style={{ paddingHorizontal: 4, paddingVertical: 2 }}>
              {typeof btn.content === 'string' ? (
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Inter_600SemiBold',
                    color: btn.color || '#007BFF',
                  }}>
                  {btn.content}
                </Text>
              ) : (
                btn.content
              )}
            </Pressable>
          ))}
        </View>
      </View>
      <View className="w-full py-4">{children}</View>
    </View>
  );
};
