import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform, Pressable, Switch, Text, View } from 'react-native';

type HeaderProps = {
  title: string;
  icon?: string;
};

type RightComponentType =
  | { type: 'default' }
  | { type: 'switch'; value: boolean; onChange: (val: boolean) => void }
  | { type: 'dot'; color: string }
  | { type: 'dot+chevron'; color: string };

type ItemProps = {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  rightComponent?: RightComponentType;
  onPress?: () => void;
};

type CardProps = {
  header: HeaderProps;
  items: ItemProps[];
};

const BusinessManagementCard: React.FC<CardProps> = ({ header, items }) => {
  return (
    <View className="w-full rounded-[12px] border border-gray-200 bg-white">
      <View className="w-full flex-row items-center rounded-t-[12px] bg-[#DBEBFF] px-4 py-3">
        {header.icon && <Ionicons name={header.icon as any} size={20} color="#007BFF" />}
        <Text className="ml-2 text-lg font-semibold text-[#007BFF]">{header.title}</Text>
      </View>

      {items.map((item, index) => {
        const isSwitch = item.rightComponent?.type === 'switch';

        return (
          <Pressable
            key={index}
            disabled={isSwitch}
            onPress={item.onPress}
            android_ripple={{ color: '#E5E7EB' }}
            className="flex-row items-center justify-between px-4 py-3"
            style={({ pressed }) => [pressed && !isSwitch ? { backgroundColor: '#F3F4F6' } : {}]}>
            <View className={`mr-3 rounded-full p-3`} style={{ backgroundColor: item.iconBg }}>
              <Ionicons name={item.icon as any} size={20} color={item.iconColor} />
            </View>

            <View className="flex-1">
              <Text className="text-[15px] font-semibold text-[#333333]">{item.title}</Text>
              <Text
                className="mt-0.5 text-sm text-[#666666]"
                numberOfLines={2}
                ellipsizeMode="tail">
                {item.description}
              </Text>
            </View>

            <View className="ml-2">{renderRightComponent(item.rightComponent)}</View>
          </Pressable>
        );
      })}
    </View>
  );
};

const renderRightComponent = (rightComponent?: RightComponentType) => {
  if (!rightComponent) {
    return <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />;
  }

  switch (rightComponent.type) {
    case 'default':
      return <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />;
    case 'switch':
      return (
        <Switch
          thumbColor={Platform.OS === 'android' ? '#FFFFFF' : undefined}
          ios_backgroundColor="#E5E7EB"
          value={rightComponent.value}
          onValueChange={rightComponent.onChange}
          trackColor={{
            false: '#E5E7EB',
            true: '#3B82F6',
          }}
        />
      );
    case 'dot':
      return (
        <View className="h-3 w-3 rounded-full" style={{ backgroundColor: rightComponent.color }} />
      );
    case 'dot+chevron':
      return (
        <View className="flex-row items-center gap-2">
          <View
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: rightComponent.color }}
          />
          <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
        </View>
      );
    default:
      return <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />;
  }
};

export default BusinessManagementCard;
