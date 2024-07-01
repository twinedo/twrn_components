import { ReactNode } from "react"
import { ViewStyle } from "react-native";

export type TCardProps = {
    children?: ReactNode;
    borderRadius?: number;
    backgroundColor?: string;
    containerStyle?: ViewStyle;
}