import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native"

export type TToolbarProps = {
    prefix?: ReactNode;
    prefixContainerStyle?: ViewStyle | ViewStyle[];
    postfix?: ReactNode;
    postfixContainerStyle?: ViewStyle | ViewStyle[];
    containerStyle?: ViewStyle | ViewStyle[];
    text?: string;
    textStyle?: TextStyle | TextStyle[];
    backgroundColor?: string;
    children?: ReactNode;
}