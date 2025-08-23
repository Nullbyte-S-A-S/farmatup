import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

type IconElement = React.ReactElement | null;

type FieldType = 'text' | 'password' | 'select' | 'select+input';

export interface FormInputProps extends Omit<TextInputProps, 'placeholderTextColor' | 'style'> {
  label: string;
  hintText?: string;
  selectHintText?: string;
  type?: FieldType;
  options?: string[];
  isPassword?: boolean;
  iconPrefix?: IconElement;
  iconColorPrefix?: string;
  iconSuffix?: IconElement;
  iconColorSuffix?: string;
  colorHintText?: string;
  height?: number;
  maxWidth?: number;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  value?: string;
  onSelectOption?: (option: string) => void;
  onChangeText?: (text: string) => void;
  errorMessage?: string;
  hasError?: boolean;
  errorTextStyle?: StyleProp<TextStyle>;
}

export default function FormInput({
  label,
  hintText,
  selectHintText,
  type = 'text',
  options = [],
  isPassword = false,
  iconPrefix = null,
  iconColorPrefix = '#007BFF',
  iconSuffix = null,
  iconColorSuffix = '#007BFF',
  colorHintText = '#9CA3AF',
  height,
  maxWidth,
  containerStyle,
  inputStyle,
  value: controlledValue,
  onChangeText,
  onSelectOption,
  errorMessage,
  hasError = false,
  errorTextStyle,
  ...rest
}: FormInputProps) {
  const [secure, setSecure] = useState<boolean>(!!isPassword);
  const [internalValue, setInternalValue] = useState<string>('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const isControlled = controlledValue !== undefined;
  const inputValue = isControlled ? (controlledValue as string) : internalValue;

  const baseContainerStyle: ViewStyle = {
    borderRadius: 10,
    borderColor: hasError ? 'red' : '#E6E6F4',
    borderWidth: 1,
    ...(typeof maxWidth === 'number' ? { width: maxWidth } : {}),
  };

  const renderIcon = (icon?: IconElement, color?: string) => {
    if (!icon) return null;
    if (React.isValidElement(icon)) {
      const extra: any = {};
      if (color) {
        extra.color = color;
        extra.fill = color;
        extra.stroke = color;
      }
      return React.cloneElement(icon as React.ReactElement, extra as any);
    }
    return icon;
  };

  const handleChange = (t: string) => {
    if (!isControlled) setInternalValue(t);
    if (onChangeText) onChangeText(t);
  };

  const prefixBlock = <View className="mr-2">{renderIcon(iconPrefix, iconColorPrefix)}</View>;

  const EyeOpenSvg = ({ width = 14, height = 11 }) => (
    <Svg width={width} height={height} viewBox="0 0 14 11" fill="none">
      <Path
        d="M7.00015 0.65332C9.93018 0.653382 12.4793 2.28146 13.7902 4.67871C14.07 5.19064 14.07 5.80936 13.7902 6.32129C12.4793 8.7185 9.93015 10.3466 7.00015 10.3467C4.07005 10.3467 1.521 8.71859 0.210107 6.32129C-0.0698395 5.8092 -0.069906 5.1898 0.210107 4.67773C1.52108 2.28072 4.07026 0.653332 7.00015 0.65332ZM7.00112 2.5957C5.39737 2.5957 4.09693 3.89629 4.09683 5.5C4.09696 7.10368 5.39739 8.40332 7.00112 8.40332C8.60443 8.40282 9.90431 7.10337 9.90444 5.5C9.90434 3.8966 8.60445 2.5962 7.00112 2.5957Z"
        fill="#9CA3AF"
      />
    </Svg>
  );

  const EyeClosedSvg = ({ width = 14, height = 13 }) => (
    <Svg width={width} height={height} viewBox="0 0 14 13" fill="none">
      <Path
        d="M12.0812 3.61932C12.7689 4.21845 13.3497 4.93687 13.7902 5.74237C14.0701 6.25438 14.0691 6.87393 13.7892 7.38593C12.4783 9.78258 9.92976 11.4101 7.00012 11.4103C6.18172 11.4103 5.39276 11.2833 4.65247 11.048L6.3175 9.383C6.53642 9.43579 6.76403 9.46792 6.99915 9.46796C8.60289 9.46795 9.90344 8.1674 9.90344 6.56366C9.90341 6.32854 9.87128 6.10094 9.81848 5.88202L12.0812 3.61932ZM7.00012 1.71796C8.3986 1.71808 9.71017 2.08921 10.8419 2.73749L9.06067 4.51874C8.53445 3.98859 7.80506 3.66034 6.99915 3.66034C5.39575 3.66058 4.09607 4.96027 4.09583 6.56366C4.09583 7.36958 4.42407 8.09896 4.95422 8.62518L3.17786 10.4016C1.92979 9.69147 0.898896 8.64526 0.210083 7.38593C-0.0699595 6.87384 -0.0699677 6.25445 0.210083 5.74237C1.52105 3.34553 4.0702 1.71796 7.00012 1.71796ZM6.99915 5.16034C7.31884 5.16034 7.61266 5.26848 7.84875 5.44843L6.99915 6.56366L6.00989 7.55878C5.75434 7.30442 5.59583 6.95263 5.59583 6.56366C5.59607 5.78869 6.22418 5.16058 6.99915 5.16034Z"
        fill="#9CA3AF"
      />
      <Path
        d="M12.2047 0.999997L1.43542 11.7692"
        stroke="#9CA3AF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const renderPasswordToggle = () => {
    return (
      <TouchableOpacity
        onPress={() => setSecure((s) => !s)}
        style={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        accessibilityLabel={secure ? 'Mostrar contraseña' : 'Ocultar contraseña'}>
        {secure ? <EyeClosedSvg width={20} height={20} /> : <EyeOpenSvg width={20} height={20} />}
      </TouchableOpacity>
    );
  };

  const renderSelect = () => (
    <View className="flex-1">
      <Pressable
        onPress={() => setDropdownOpen((o) => !o)}
        className="h-full flex-row items-center justify-between">
        <Text className={`text-[14px] text-[#9CA3AF]`}>
          {selected || selectHintText || hintText}
        </Text>
        <Text className="text-gray-400">▼</Text>
      </Pressable>

      {dropdownOpen && (
        <View
          className="absolute left-0 right-0 top-[45px] z-10 rounded-lg border border-gray-200 bg-white shadow-lg"
          style={{ maxHeight: 240, elevation: 8 }}>
          <ScrollView
            nestedScrollEnabled
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            {options.map((item, i) => (
              <Pressable
                key={`${item}-${i}`}
                className="px-4 py-3"
                onPress={() => {
                  setSelected(item);
                  setDropdownOpen(false);
                  if (onSelectOption) onSelectOption(item);
                }}>
                <Text>{item}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );

  return (
    <View className="w-full">
      <View
        className={`mt-4 px-[14px] pb-[14px] pt-[7px] ${typeof maxWidth === 'number' ? '' : 'w-full'}`}
        style={[baseContainerStyle, containerStyle]}>
        <Text
          style={{ fontFamily: 'Inter_400Regular' }}
          className="mb-[2px] ml-2 text-[8px] text-[#6B7280]">
          {label}
        </Text>

        {/* 🔹 Switch por tipo */}
        {type === 'select' ? (
          <View className="ml-2 flex-row items-center" style={{ height: height || 20 }}>
            {iconPrefix ? prefixBlock : null}
            {renderSelect()}
          </View>
        ) : type === 'select+input' ? (
          <View className="flex-row items-center" style={{ height: height || 20 }}>
            {iconPrefix ? prefixBlock : null}
            <View className="ml-1 mt-2 h-[25px] w-[90px] rounded-lg bg-[#E9E9EE] px-2">
              {renderSelect()}
            </View>
            <TextInput
              {...rest}
              value={inputValue}
              onChangeText={handleChange}
              placeholder={hintText}
              placeholderTextColor={colorHintText}
              className="ml-2 mt-1 flex-1 text-[14px]"
              style={[{ padding: 0, height: '100%' }, inputStyle]}
            />
          </View>
        ) : (
          <View className="flex-row items-center" style={{ height: height || 20 }}>
            {iconPrefix ? prefixBlock : null}
            <TextInput
              {...rest}
              value={inputValue}
              onChangeText={handleChange}
              placeholder={hintText}
              placeholderTextColor={colorHintText}
              secureTextEntry={isPassword ? secure : false}
              className="ml-2 flex-1 text-[14px]"
              style={[{ padding: 0, height: '100%' }, inputStyle]}
            />

            {isPassword ? renderPasswordToggle() : renderIcon(iconSuffix, iconColorSuffix)}
          </View>
        )}
      </View>

      {errorMessage ? (
        <Text style={[{ color: 'red', fontSize: 10, paddingTop: 8 }, errorTextStyle]}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
}
