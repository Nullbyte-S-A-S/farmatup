import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

type AlertStockCardProps = {
  critialValue: number;
  warningValue: number;
  widthContainer?: number;
};

/* ====== ICONOS ====== */
const AlertIcon = ({ color = '#DC3545', ...props }) => (
  <Svg width={27} height={26} viewBox="0 0 27 26" fill="none" {...props}>
    <Path
      d="M12.3877 0.110637C13.1218 -0.0368932 13.8782 -0.036865 14.6123 0.110637C16.238 0.437387 17.638 1.46229 18.4404 2.91337L26.334 17.1907C26.7706 17.9805 27 18.8693 27 19.7718C26.9998 22.7169 24.6122 25.1047 21.667 25.1048H5.33301C2.3879 25.1046 0.00016197 22.7169 0 19.7718C4.02468e-05 18.8693 0.229359 17.9805 0.666016 17.1907L8.55859 2.91337C9.36099 1.46204 10.7618 0.437467 12.3877 0.110637ZM13.5 16.5579C13.0859 16.558 12.75 16.8938 12.75 17.3079V17.9485C12.75 18.3627 13.0858 18.6985 13.5 18.6985C13.9142 18.6985 14.25 18.3627 14.25 17.9485V17.3079C14.25 16.8937 13.9142 16.5579 13.5 16.5579ZM13.5 7.58915C13.0859 7.5892 12.7502 7.9251 12.75 8.33915V13.4642C12.75 13.8783 13.0858 14.2141 13.5 14.2142C13.9142 14.2142 14.25 13.8784 14.25 13.4642V8.33915C14.2498 7.92507 13.9141 7.58915 13.5 7.58915Z"
      fill={color}
    />
  </Svg>
);

const WarningIcon = ({ color = '#FFC107', ...props }) => (
  <Svg width={4} height={20} viewBox="0 0 4 20" fill="none" {...props}>
    <Rect
      x={2}
      y={17.245}
      width={0.01}
      height={0.01}
      stroke={color}
      strokeWidth={3.75}
      strokeLinejoin="round"
    />
    <Path
      d="M1.5227 2.24451L2 12.745L2.4773 2.24451C2.48966 1.9724 2.27239 1.74503 2 1.74503C1.72761 1.74503 1.51034 1.9724 1.5227 2.24451Z"
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const BoxIcon = ({ color = '#007BFF', ...props }) => (
  <Svg width={19} height={20} viewBox="0 0 19 20" fill="none" {...props}>
    <Path
      d="M17.5 4.625C18.1904 4.625 18.75 5.18464 18.75 5.875V15.875C18.75 17.6699 17.2949 19.125 15.5 19.125H3.5C1.70507 19.125 0.25 17.6699 0.25 15.875V5.875C0.25 5.18464 0.809644 4.625 1.5 4.625H17.5ZM5.5 8.625C4.80964 8.625 4.25 9.18464 4.25 9.875C4.25 10.5654 4.80964 11.125 5.5 11.125H9.5C10.1904 11.125 10.75 10.5654 10.75 9.875C10.75 9.18464 10.1904 8.625 9.5 8.625H5.5Z"
      fill={color}
    />
    <Path
      d="M5.5 1.875H13.5L17.5 5.875H1.5L5.5 1.875Z"
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

/* ====== COMPONENTE PRINCIPAL ====== */
const AlertStockCard: React.FC<AlertStockCardProps> = ({
  critialValue,
  warningValue,
  widthContainer,
}) => {
  const baseContainerStyle: ViewStyle = {
    ...(typeof widthContainer === 'number' ? { width: widthContainer } : {}),
  };
  return (
    <View
      style={[baseContainerStyle]}
      className={`${typeof widthContainer === 'number' ? '' : 'w-full'} flex-row justify-between rounded-xl bg-white p-5`}>
      <View className="items-center">
        <View className="h-[51px] w-[51px] items-center justify-center rounded-full bg-[#FEE2E2]">
          <AlertIcon />
        </View>
        <Text className="text-base font-medium text-[#6C757D]">Críticos</Text>
        <Text className="text-2xl font-bold text-[#DC3545]">{critialValue}</Text>
      </View>

      <View className="items-center">
        <View className="h-[51px] w-[51px] items-center justify-center rounded-full bg-[#FEF9C3]">
          <WarningIcon />
        </View>
        <Text className="text-base font-medium text-[#6C757D]">Advertencia</Text>
        <Text className="text-2xl font-bold text-[#FFC107]">{warningValue}</Text>
      </View>

      <View className="items-center">
        <View className="h-[51px] w-[51px] items-center justify-center rounded-full bg-[#DBEAFE]">
          <BoxIcon />
        </View>
        <Text className="text-base font-medium text-[#6C757D]">Total</Text>
        <Text className="text-2xl font-bold text-[#007BFF]">{warningValue + critialValue}</Text>
      </View>
    </View>
  );
};

export default AlertStockCard;
