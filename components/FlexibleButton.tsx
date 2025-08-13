import { Text, TouchableOpacity, View } from 'react-native';

type FlexibleButtonProps = {
  title: string;
  iconPrefix?: React.ReactElement;
  iconSuffix?: React.ReactElement;
  onPress: () => void;
  disabled?: boolean;
  style?: object;
  gap?: number;
  height?: number;
  width?: number;
  backgroundColor?: string;
};
const FlexibleButton: React.FC<FlexibleButtonProps> = ({
  title,
  iconPrefix,
  iconSuffix,
  onPress,
  disabled,
  style,
  gap,
  height = 56,
  width = '100%',
  backgroundColor = '#007BFF',
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      className="flex-row items-center justify-center rounded-[10px]"
      style={[{ height, width, backgroundColor }, style]}>
      {iconPrefix && (
        <View className="text-center" style={{ marginRight: gap ?? 8 }}>
          {iconPrefix}
        </View>
      )}
      <Text
        style={{ fontFamily: 'Inter_500Medium', fontSize: 14 }}
        className="text-center text-white">
        {title}
      </Text>
      {iconSuffix && (
        <View className="text-center" style={{ marginLeft: gap ?? 8 }}>
          {iconSuffix}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default FlexibleButton;
