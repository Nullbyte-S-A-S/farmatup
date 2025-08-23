import Svg, { Circle, G, Path, Rect, SvgProps } from 'react-native-svg';

export const UserSvg = ({ width = 24, height = 24, color = '#007BFF', ...props }: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <Path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z" fill={color} />
      <Path d="M4 20c0-2.5 3.8-4.5 8-4.5s8 2 8 4.5v2H4v-2Z" fill={color} />
    </Svg>
  );
};

export const PasswordSvg = ({ width = 24, height = 24, color = '#007BFF', ...props }: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 8 11"
    fill="none"
    {...props}>
    <Path
      d="M4.002.5a2.5 2.5 0 0 1 2.5 2.5v1h1a.5.5 0 0 1 .5.5V8a2.5 2.5 0 0 1-2.5 2.5H2.5A2.5 2.5 0 0 1 0 8V4.5A.5.5 0 0 1 .5 4h1.001V3a2.5 2.5 0 0 1 2.5-2.5Zm1.25 6.249a.5.5 0 0 0-.5.5v.004a.5.5 0 0 0 .5.5h.004c.275 0 .5-.224.5-.5v-.004c0-.276-.224-.5-.5-.5h-.004ZM4.002 1.5A1.5 1.5 0 0 0 2.501 3v1h3.001V3a1.5 1.5 0 0 0-1.5-1.5Z"
      fill={color}
    />
  </Svg>
);

export const EyeSvg = ({ width = 24, height = 24, color = '#9CA3AF', ...props }: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 14 12"
    fill="none"
    {...props}>
    <Path
      d="M7 .653c2.93 0 5.48 1.628 6.79 4.026.28.512.28 1.13 0 1.642A7.732 7.732 0 0 1 7 10.347 7.732 7.732 0 0 1 .21 6.32a1.713 1.713 0 0 1 0-1.643A7.732 7.732 0 0 1 7 .653Zm.001 1.943a2.905 2.905 0 1 0 0 5.81 2.905 2.905 0 0 0 0-5.81Zm0 1.5c.391 0 .745.161 1 .42a1.076 1.076 0 0 0 0 1.967 1.404 1.404 0 1 1-.999-2.388Z"
      fill={color}
    />
  </Svg>
);

export const ArrowRightSvg = ({
  width = 24,
  height = 24,
  color = '#FFFFFF',
  ...props
}: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 12 9"
    fill="none"
    {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 4.5h10m0 0L7.19 8M11 4.5 7.19 1"
    />
  </Svg>
);

interface IconProps extends SvgProps {
  color?: string;
  size?: number;
}

export const TabletSvg = ({ color = '#007BFF', size = 24, ...props }: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 16 16"
    {...props}>
    <Path
      fill={color}
      stroke={color}
      strokeWidth={0.3}
      d="M2.496 1.018a.39.39 0 0 0-.104.073c-.142.126-.142.129-.142 1.264v1.058l-.487.495C1.107 4.573.877 4.92.664 5.56.494 6.074.5 5.877.5 10.515c0 4.094.003 4.228.052 4.304a.575.575 0 0 0 .129.129c.076.049.251.052 6.218.052 5.395 0 6.161-.006 6.303-.041A1.782 1.782 0 0 0 14.46 13.7a2.325 2.325 0 0 0-.002-.87 1.733 1.733 0 0 0-1.332-1.26c-.159-.033-.38-.044-.946-.044h-.739l-.01-2.686c-.009-2.409-.014-2.707-.055-2.88-.134-.552-.329-.99-.613-1.386a8.274 8.274 0 0 0-.615-.692l-.46-.473V2.377c0-.963-.005-1.045-.054-1.152a.428.428 0 0 0-.143-.172c-.09-.055-.125-.055-3.522-.052-1.887 0-3.45.008-3.473.017Zm1.942 1.484v.684h-1.34V1.82h1.34v.683Zm2.188 0v.684h-1.34V1.82h1.34v.683Zm2.215 0v.684H7.473V1.82h1.368v.683Zm.702 2.002c.616.626.813.93.952 1.485l.063.246-3.577.014c-3.577.014-3.58.014-3.656.071a.713.713 0 0 0-.137.148l-.063.09v2.746c0 3.04-.01 2.865.175 2.997l.085.06 2.182.008c1.198.003 2.18.011 2.18.016 0 .006-.036.088-.08.184-.103.232-.139.413-.139.716 0 .274.047.495.15.727.039.08.069.151.069.156 0 .006-1.447.011-3.213.011H1.318l.01-3.918c.012-4.332-.002-4.042.19-4.554.158-.418.336-.67.853-1.2l.462-.473h6.243l.467.47Zm1.048 3.058v.464H7.878c-2.677 0-2.715 0-2.806.055-.188.115-.246.416-.115.602.134.188-.062.178 2.935.186l2.699.005v2.653H3.973v-4.43h6.618v.465Zm0 5.715v.902h-.635c-.716 0-.932-.024-1.124-.13a.886.886 0 0 1-.377-1.141 1.05 1.05 0 0 1 .41-.435c.153-.08.285-.093 1.01-.096l.716-.003v.903Zm2.549-.812c.202.098.412.328.473.514.065.191.046.514-.039.675a.907.907 0 0 1-.686.495c-.098.017-.465.03-.812.03h-.637v-1.807l.774.008.77.008.156.077Z"
    />
  </Svg>
);

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export const Userprofile = ({ size = 32, color = '#000', ...props }: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <Circle cx={12} cy={7} r={5} fill={color} stroke={color} strokeWidth={1.5} />

    <Path
      fill={color}
      stroke={color}
      strokeWidth={1.5}
      d="M4 20c0-1.5 1-3 2.5-3.5a18 18 0 0 1 11 0C19 17 20 18.5 20 20v2a1.5 1.5 0 0 1-1.7 1.5l-4.8-.7a15 15 0 0 0-4.9 0l-4.8.7A1.5 1.5 0 0 1 4 22v-2Z"
    />
  </Svg>
);

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export const ArrowBack = ({ size = 24, color = '#007BFF', ...props }: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 16"
    fill="none"
    {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M8.102.767a.913.913 0 0 0-1.291 0L.724 6.854a.913.913 0 0 0 0 1.292l6.087 6.087a.913.913 0 0 0 1.291-1.292L2.661 7.5l5.441-5.441a.913.913 0 0 0 0-1.292Z"
      clipRule="evenodd"
    />
    <G fill={color} opacity={0.5}>
      <Path d="M13.543 6.586c1.161 0 2.882.34 4.338 1.39 1.503 1.082 2.663 2.878 2.663 5.61a.913.913 0 0 1-1.827 0c0-2.137-.87-3.385-1.903-4.128-1.08-.778-2.402-1.046-3.27-1.046h-9.97L2.66 7.5l.913-.913h9.97ZM.489 7.26Z" />
    </G>
  </Svg>
);
interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export const Email = ({ size = 24, color = '#007BFF', ...props }: IconProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 12 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1 7.35712V1.64285L4.76733 4.22616C5.51378 4.738 6.48622 4.738 7.23267 4.22616L11 1.64285V7.35712C11 7.92855 10.4444 8.49997 9.88889 8.5H2.11111C1.55556 8.49997 1 7.92855 1 7.35712Z"
      fill={color}
    />
    <Path
      d="M1 1.64285C1 1.07143 1.55556 0.499973 2.11111 0.5L9.88889 0.500027C10.4444 0.5 11 1.07143 11 1.64285M1 1.64285V7.35712C1 7.92855 1.55556 8.49997 2.11111 8.5H9.88889C10.4444 8.49997 11 7.92855 11 7.35712V1.64285M1 1.64285L4.76733 4.22616C5.51378 4.738 6.48622 4.738 7.23267 4.22616L11 1.64285"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
interface IconProps extends SvgProps {
  size?: number;
  color?: string;
  checkColor?: string;
}

export const EmailVerify = ({
  size = 24,
  color = '#007BFF',
  checkColor = '#fff',
  ...props
}: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    {...props}>
    <Path
      fill={color}
      d="M1 7.982V2.268L4.767 4.85a2.171 2.171 0 0 0 2.466 0L11 2.268v5.714c0 .572-.556 1.143-1.111 1.143H2.11C1.556 9.125 1 8.554 1 7.982Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1 2.268c0-.572.556-1.143 1.111-1.143H9.89c.555 0 1.111.571 1.111 1.143m-10 0v5.714c0 .572.556 1.143 1.111 1.143H9.89c.555 0 1.111-.571 1.111-1.143V2.268m-10 0L4.767 4.85a2.171 2.171 0 0 0 2.466 0L11 2.268"
    />
    <Path
      stroke="#fff"
      strokeWidth={0.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1 2.268 6 5 11 2.268"
    />
    <Rect width={5.7} height={5.7} x={8.15} y={4.025} fill={color} rx={2.85} />
    <Rect
      width={5.7}
      height={5.7}
      x={8.15}
      y={4.025}
      stroke={checkColor}
      strokeWidth={0.3}
      rx={2.85}
    />
    <Path
      stroke={checkColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.6}
      d="m12 6.375-1.333 1-.667-.5"
    />
  </Svg>
);

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export const Phone = ({ size = 24, color = '#007BFF', ...props }: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    {...props}>
    <Path
      fill={color}
      d="M11.578 10.188a2.737 2.737 0 0 1-.709 1.272c-1.64 1.64-5.186.754-7.92-1.98C.217 6.746-.67 3.2.97 1.56c.348-.347.78-.58 1.272-.708l2.194 2.193-1.238 2.228A11.087 11.087 0 0 0 4.93 7.5a11.087 11.087 0 0 0 2.227 1.733l2.227-1.238 2.194 2.193Z"
    />
  </Svg>
);
