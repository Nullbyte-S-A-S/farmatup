import { Pressable, Text, View } from 'react-native';

type CardItem = {
  icon?: React.ReactElement;
  title: string;
  description: string;
};

type CardRadioGroupProps = {
  options: CardItem[];
  selectedValue: string;
  onValueChange: (value: string) => void;
};

const CardRadioGroup: React.FC<CardRadioGroupProps> = ({
  options,
  selectedValue,
  onValueChange,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      {options.map((option) => {
        const isSelected = selectedValue === option.title;

        return (
          <Pressable
            className="px-[16px] py-[20px]"
            key={option.title}
            onPress={() => onValueChange(option.title)}
            style={{
              borderWidth: isSelected ? 2 : 1,
              borderColor: isSelected ? '#007AFF' : '#ccc',
              borderRadius: 8,
              gap: 12,
              backgroundColor: isSelected ? '#e6f0ff' : '#fff',
              width: '48%',

              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <View className="flex flex-row gap-2">
                {option.icon && <View>{option.icon}</View>}
                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{option.title}</Text>
              </View>
              <Text style={{ color: '#6B7280', fontSize: 14 }}>{option.description}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default CardRadioGroup;
