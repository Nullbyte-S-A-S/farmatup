import { Text, View } from 'react-native';
import FlexibleButton from './FlexibleButton';

type AlertCardItemProps = {
  title: string;
  onPress: Function;
  minimalStock: number;
  currentStock: number;
};

const AlertCardItem = ({ title, onPress, minimalStock, currentStock }: AlertCardItemProps) => {
  const porcentage = (currentStock / minimalStock) * 100;
  const progressWidthPercent = Math.min(Math.max(porcentage, 0), 100);

  let alertStatus = '';
  let badgeBgColor = '';
  let badgeTextColor = '';
  let progressBarColor = '';

  if (progressWidthPercent <= 25) {
    alertStatus = 'Crítico';
    badgeBgColor = '#FEE2E2';
    badgeTextColor = '#DC3545';
    progressBarColor = '#DC3545';
  } else if (progressWidthPercent <= 50) {
    alertStatus = 'Advertencia';
    badgeBgColor = '#FFF3CD';
    badgeTextColor = '#856404';
    progressBarColor = '#FFC107';
  } else {
    alertStatus = 'Normal';
    badgeBgColor = '#CCE5FF';
    badgeTextColor = '#007BFF';
    progressBarColor = '#007BFF';
  }

  return (
    <View className="mt-4 w-full rounded-[10px] border border-[#DDE2ED] p-[0px]">
      <View
        className="w-full rounded-[10px] p-[20px]"
        style={{
          borderLeftWidth: 5,
          borderLeftColor: progressBarColor,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <View className="flex-row items-center justify-between">
          <Text className="text-[20px] font-bold">{title}</Text>
          <View className="rounded-full px-5 py-2" style={{ backgroundColor: badgeBgColor }}>
            <Text className="font-semibold" style={{ color: badgeTextColor }}>
              {alertStatus}
            </Text>
          </View>
        </View>
        <View className="mt-[20px] gap-[10px]">
          <View className="flex-row justify-between">
            <Text className="text-[#6C757D]">Stock actual</Text>
            <Text className="font-bold" style={{ color: badgeTextColor }}>
              {currentStock} Cajas
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-[#6C757D]">Stock mínimo</Text>
            <Text className="font-bold text-[#3F3F3F]">{minimalStock} Cajas</Text>
          </View>
          <View className="h-3 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
            <View
              style={{ width: `${progressWidthPercent}%`, backgroundColor: progressBarColor }}
              className="h-3 rounded-full"
            />
          </View>
        </View>
        <FlexibleButton
          style={{ marginTop: 20 }}
          title={'Ver detalles'}
          onPress={() => onPress()}
        />
      </View>
    </View>
  );
};

export default AlertCardItem;
