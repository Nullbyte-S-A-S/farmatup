import { Pressable, Text, View } from 'react-native';

type ProgressListItem = {
  label: string;
  value: number;
  color: string;
  maxValue: number;
};

type StatsBarListProps = {
  title: string;
  link: string;
  onPress: () => void;
  itemBarHeight?: number;
  items: ProgressListItem[];
  style?: object;
  isPorcentage?: boolean;
};

const StatsBarList = ({
  title,
  link,
  onPress,
  items,
  itemBarHeight,
  style,
  isPorcentage = false,
}: StatsBarListProps) => {
  return (
    <View className="rounded-[10px] bg-white p-[20px]" style={style}>
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-2xl font-bold">{title}</Text>
        <Pressable onPress={onPress}>
          <Text className="font text-base font-medium text-[#007BFF]">{link}</Text>
        </Pressable>
      </View>
      {items.map((item) => {
        const porcentage = (item.value / item.maxValue) * 100;
        const progressWidthPercent = Math.min(Math.max(porcentage, 0), 100);
        return (
          <View key={item.label} className="mb-4 flex-row items-center" style={{ columnGap: 6 }}>
            <Text
              style={{
                width: 120,
                textAlign: 'right',
                fontSize: 16,
                fontWeight: '500',
              }}>
              {item.label}
            </Text>
            <View
              className="flex-1 overflow-hidden rounded-full"
              style={{ height: itemBarHeight || 30 }}>
              <View
                className="rounded-full"
                style={{
                  width: `${progressWidthPercent}%`,
                  height: '100%',
                  backgroundColor: item.color,
                }}
              />
            </View>
            <Text style={{ marginLeft: 8, fontWeight: '500' }}>
              {item.value} {isPorcentage ? '%' : ''}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default StatsBarList;
