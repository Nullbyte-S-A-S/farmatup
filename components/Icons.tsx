import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const UserSvg = ({ width = 24, height = 24, color = "#007BFF", ...props }: SvgProps) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z"
                fill={color}
            />
            <Path
                d="M4 20c0-2.5 3.8-4.5 8-4.5s8 2 8 4.5v2H4v-2Z"
                fill={color}
            />
        </Svg>
    );
};

export const PasswordSvg = ({
    width = 24,
    height = 24,
    color = "#007BFF",
    ...props
}: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 8 11"
        fill="none"
        {...props}
    >
        <Path
            d="M4.002.5a2.5 2.5 0 0 1 2.5 2.5v1h1a.5.5 0 0 1 .5.5V8a2.5 2.5 0 0 1-2.5 2.5H2.5A2.5 2.5 0 0 1 0 8V4.5A.5.5 0 0 1 .5 4h1.001V3a2.5 2.5 0 0 1 2.5-2.5Zm1.25 6.249a.5.5 0 0 0-.5.5v.004a.5.5 0 0 0 .5.5h.004c.275 0 .5-.224.5-.5v-.004c0-.276-.224-.5-.5-.5h-.004ZM4.002 1.5A1.5 1.5 0 0 0 2.501 3v1h3.001V3a1.5 1.5 0 0 0-1.5-1.5Z"
            fill={color}
        />
    </Svg>
);

export const EyeSvg = ({
    width = 24,
    height = 24,
    color = "#9CA3AF",
    ...props
}: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 14 12"
        fill="none"
        {...props}
    >
        <Path
            d="M7 .653c2.93 0 5.48 1.628 6.79 4.026.28.512.28 1.13 0 1.642A7.732 7.732 0 0 1 7 10.347 7.732 7.732 0 0 1 .21 6.32a1.713 1.713 0 0 1 0-1.643A7.732 7.732 0 0 1 7 .653Zm.001 1.943a2.905 2.905 0 1 0 0 5.81 2.905 2.905 0 0 0 0-5.81Zm0 1.5c.391 0 .745.161 1 .42a1.076 1.076 0 0 0 0 1.967 1.404 1.404 0 1 1-.999-2.388Z"
            fill={color}
        />
    </Svg>
);

export const ArrowRightSvg = ({
    width = 24,
    height = 24,
    color = "#FFFFFF",
    ...props
}: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 12 9"
        fill="none"
        {...props}
    >
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 4.5h10m0 0L7.19 8M11 4.5 7.19 1"
        />
    </Svg>
);

