import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native"

export type TButtonProps = {
    prefix?: ReactNode;
    prefixContainerStyle?: ViewStyle | ViewStyle[];
    postfix?: ReactNode;
    postfixContainerStyle?: ViewStyle | ViewStyle[];
    containerStyle?: ViewStyle | ViewStyle[];
    text?: string;
    textStyle?: TextStyle | TextStyle[];
    backgroundColor?: string;
    borderRadius?: number;
    loading?: boolean;
    loadingColor?: string;
    children?: ReactNode;
}