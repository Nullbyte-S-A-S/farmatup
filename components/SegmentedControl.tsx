import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type SegmentedControlProps = {
  values: string[];
  selectedIndex: number;
  onChange: (index: number) => void;
  pages: React.ReactNode[];
  icons?: ((props: { color: string }) => React.ReactElement)[];
  style?: object;
};

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  values,
  selectedIndex,
  onChange,
  pages,
  icons,
  style,
}) => {
  return (
    <View className="w-full">
      <View className="flex-row overflow-hidden rounded-lg bg-gray-200" style={style}>
        {values.map((value, index) => (
          <TouchableOpacity
            key={value}
            style={{
              backgroundColor: index === selectedIndex ? '#007BFF' : '#E5E7EB',
            }}
            className={[
              'my-3 flex-1 items-center justify-center rounded-lg bg-gray-200 py-4',

              index === 0 ? 'ml-3' : '',
              index === values.length - 1 ? 'mr-3' : '',
            ].join(' ')}
            onPress={() => onChange(index)}
            activeOpacity={0.7}>
            <View className="flex-row items-center gap-2">
              {icons && icons[index]
                ? React.createElement(icons[index], {
                    color: index === selectedIndex ? 'white' : '#6C757D',
                  })
                : null}
              <Text
                className={[
                  index === selectedIndex ? 'font-semibold text-white' : 'text-[#6C757D]',
                ].join(' ')}>
                {value}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View className="mt-4 rounded-lg bg-gray-200 p-5">{pages[selectedIndex]}</View>
    </View>
  );
};
export default SegmentedControl;
