import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native"

export type TButtonProps = {
    prefix?: ReactNode;
    postfix?: ReactNode;
    style?: ViewStyle | ViewStyle[];
    text?: string;
    textStyle?: TextStyle | TextStyle[];
    backgroundColor?: string;
    borderRadius?: number;
    loading?: boolean;
    children?: ReactNode;
}