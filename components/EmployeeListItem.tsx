import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import Svg, { Path, Rect } from 'react-native-svg';

const DefaultAvatar = () => (
  <Svg width="60" height="60" viewBox="0 0 40 40" fill="none">
    <Rect width="40" height="40" rx="20" fill="#EEEEEE" />
    <Path
      d="M20 20C20.9093 20 21.7814 19.6313 22.4244 18.9749C23.0673 18.3185 23.4286 17.4283 23.4286 16.5C23.4286 15.5717 23.0673 14.6815 22.4244 14.0251C21.7814 13.3687 20.9093 13 20 13C19.0907 13 18.2186 13.3687 17.5756 14.0251C16.9327 14.6815 16.5714 15.5717 16.5714 16.5C16.5714 17.4283 16.9327 18.3185 17.5756 18.9749C18.2186 19.6313 19.0907 20 20 20ZM18.7759 21.3125C16.1375 21.3125 14 23.4945 14 26.1879C14 26.6363 14.3563 27 14.7955 27H25.2045C25.6438 27 26 26.6363 26 26.1879C26 23.4945 23.8625 21.3125 21.2241 21.3125H18.7759Z"
      fill="#4B5563"
    />
  </Svg>
);

const OptionsIcon = () => (
  <Svg width="8" height="17" viewBox="0 0 3 12" fill="none">
    <Path
      d="M1.5 8.88889C1.10218 8.88889 0.720644 9.05278 0.43934 9.3445C0.158035 9.63622 0 10.0319 0 10.4444C0 10.857 0.158035 11.2527 0.43934 11.5444C0.720644 11.8361 1.10218 12 1.5 12C1.89782 12 2.27936 11.8361 2.56066 11.5444C2.84196 11.2527 3 10.857 3 10.4444C3 10.0319 2.84196 9.63622 2.56066 9.3445C2.27936 9.05278 1.89782 8.88889 1.5 8.88889ZM1.5 4.44444C1.10218 4.44444 0.720644 4.60833 0.43934 4.90006C0.158035 5.19178 0 5.58744 0 6C0 6.41256 0.158035 6.80822 0.43934 7.09994C0.720644 7.39167 1.10218 7.55556 1.5 7.55556C1.89782 7.55556 2.27936 7.39167 2.56066 7.09994C2.84196 6.80822 3 6.41256 3 6C3 5.58744 2.84196 5.19178 2.56066 4.90006C2.27936 4.60833 1.89782 4.44444 1.5 4.44444ZM3 1.55556C3 1.143 2.84196 0.747335 2.56066 0.455612C2.27936 0.163888 1.89782 0 1.5 0C1.10218 0 0.720644 0.163888 0.43934 0.455612C0.158035 0.747335 0 1.143 0 1.55556C0 1.96811 0.158035 2.36378 0.43934 2.6555C0.720644 2.94722 1.10218 3.11111 1.5 3.11111C1.89782 3.11111 2.27936 2.94722 2.56066 2.6555C2.84196 2.36378 3 1.96811 3 1.55556Z"
      fill="#BDBDBD"
    />
  </Svg>
);

type EmployeeListItemProps = {
  name: string;
  imageUrl?: string;
  position: string;
};

const EmployeeListItem = ({ name, imageUrl, position }: EmployeeListItemProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <View className="w-full flex-row items-center justify-between bg-white p-4">
      <View className="flex-row items-center gap-3">
        {imageUrl && !imageError ? (
          <Image
            source={{ uri: imageUrl }}
            className="h-[60px] w-[60px] rounded-full"
            onError={() => setImageError(true)}
          />
        ) : (
          <DefaultAvatar />
        )}
        <View className="gap-1">
          <Text className="text-base font-medium text-gray-900">{name}</Text>
          <Text className="text-sm text-gray-500">{position}</Text>
        </View>
      </View>

      <Menu>
        <MenuTrigger
          customStyles={{
            triggerWrapper: {
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}>
          <OptionsIcon />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => alert('Edit option clicked')}>
            <Text style={{ padding: 10 }}>Edit</Text>
          </MenuOption>
          <MenuOption onSelect={() => alert('Delete option clicked')}>
            <Text style={{ padding: 10, color: 'red' }}>Delete</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default EmployeeListItem;
