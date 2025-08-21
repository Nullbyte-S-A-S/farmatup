import { Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

interface DataBarProps {
    labels: string[];
    data: number[];
    colors: string[];
}

interface InventoryBarProps {
    label: string;
    percentage: number;
    color: string;
    index: number;
}
export const DataBar: React.FC<DataBarProps> = ({ labels, data, colors }) => {
    const [fontsLoaded] = useFonts({
        Inter_600SemiBold,
    });

    if (!fontsLoaded) return null;

    const maxWidth = screenWidth - 280;

    const InventoryBar: React.FC<InventoryBarProps> = ({ label, percentage, color, index }) => {
        return (
            <View className="w-screen flex-row px-4 items-center">
                <View style={{ width: 100 }} className="items-end mr-3">
                    <Text
                        style={{ fontFamily: "Inter_600SemiBold", fontSize: 12 }}
                        className="text-[#4D4D4D] font-normal"
                    >
                        {label}
                    </Text>
                </View>
                <View
                    className="w-auto overflow-hidden rounded-full mr-2 my-2"
                >
                    <View
                        style={{
                            width: (percentage / 120) * maxWidth * 2,
                            height: 40,
                            backgroundColor: color,
                        }}
                    />
                </View>
                <Text
                    style={{ fontFamily: "Inter_600SemiBold", fontSize: 10 }}
                    className="text-[#4D4D4D]"
                >
                    {percentage}%
                </Text>
            </View>
        );
    };

    return (
        <View className="py-4 px-1">
            {labels.map((label, index) => (
                <InventoryBar
                    key={index}
                    label={label}
                    percentage={data[index]}
                    color={colors[index]}
                    index={index}
                />
            ))}
        </View>
    );
};