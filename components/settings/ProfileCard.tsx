import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type ProfileCardProps = {
  image?: string;
  name: string;
  role: string;
  branch?: string;
  onEdit: () => void;
  className?: string;
};

const DEFAULT_IMAGE = 'https://i.ibb.co/7JM1P2r/default-avatar.png';

const ProfileCard: React.FC<ProfileCardProps> = ({
  image,
  name,
  role,
  branch,
  onEdit,
  className,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <View
      className={`w-full flex-row items-center justify-between rounded-[10px] bg-white p-4 shadow-sm ${className || ''}`}>
      <View className="flex-row items-center">
        <Image
          source={{ uri: !imgError && image ? image : DEFAULT_IMAGE }}
          onError={() => setImgError(true)}
          className="h-16 w-16 rounded-full"
        />
        <View className="ml-4">
          <Text className="text-xl font-bold text-black">{name}</Text>
          <Text className="text-base text-gray-500">{role}</Text>
          {branch && <Text className="text-base text-gray-400">{branch}</Text>}
        </View>
      </View>

      <TouchableOpacity
        onPress={onEdit}
        className="h-10 w-10 items-center justify-center rounded-full bg-[#EFF6FF]"
        activeOpacity={0.7}>
        <Ionicons name="create-outline" size={20} color="#007BFF" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCard;
