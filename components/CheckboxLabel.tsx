import Checkbox from 'expo-checkbox';
import { StyleProp, Text, TextStyle, View } from 'react-native';

type CheckboxLabelProps = {
  checked: boolean;
  setChecked: (value: boolean) => void;
  label: string;
  style?: object;
  labelStyle?: StyleProp<TextStyle>
};

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({ checked, setChecked, label, style, labelStyle }) => {
  return (
    <View className="mb-4 flex-row items-center" style={style}>
      <Checkbox
        value={checked}
        onValueChange={setChecked}
        color={checked ? '#007BFF' : undefined}
        style={{
          borderWidth: 2,
          borderColor: checked ? '#007BFF' : '#6B7280',
          backgroundColor: checked ? '#007BFF' : undefined,
          marginRight: 8,
        }}
      />
      <Text style={labelStyle} className="text-center text-[#6B7280]">{label}</Text>
    </View>
  );
};

export default CheckboxLabel;
