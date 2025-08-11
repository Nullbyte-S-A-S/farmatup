import { View, Text } from "react-native";
import { Inter_500Medium, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";

type IconElement = React.ReactElement | null;

interface ItemProps {
    title: string;
    content: string | number;
    icon: IconElement;
    isBackgroundIcon: boolean;
    backgroundIcon?: string;
    width?: number;
    height?: number;
}

export const ItemCard = ({
    title,
    content,
    icon,
    isBackgroundIcon,
    backgroundIcon,
    width = 184,
    height = 116,
}: ItemProps) => {
    const [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_500Medium,
    });

    if (!fontsLoaded) return null;

    return (
        <View
            style={{
                width,
                height,
                backgroundColor: "white",
                borderRadius: 12,
            }}
        >
            <View className="mt-4 mb-2 mx-4">
                {isBackgroundIcon ? (
                    <View
                        style={{
                            backgroundColor: backgroundIcon,
                            padding: 8,
                            borderRadius: 9,
                            alignSelf: "flex-start",
                        }}
                    >
                        {icon}
                    </View>
                ) : (
                    icon
                )}
            </View>

            <Text
                style={{ fontFamily: "Inter_500Medium", fontSize: 12 }}
                className={`text-[#6C757D] mx-4 ${isBackgroundIcon ? "" : "mt-2"
                    }`}
            >
                {title}
            </Text>

            <Text
                style={{ fontFamily: "Inter_700Bold", fontSize: 14 }}
                className="text-[#343A40] mx-4 mt-2"
            >
                {content}
            </Text>
        </View>
    );
};
