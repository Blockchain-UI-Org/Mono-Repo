import { Interpolation, ThemedStyledProps } from "styled-components";
import { ThemeInterface } from "./theme";
export declare const withTheme: <P extends object>(callback: (props: P & {
    theme: ThemeInterface;
}) => Interpolation<ThemedStyledProps<P, ThemeInterface>>) => (props: P & {
    theme: ThemeInterface;
}) => Interpolation<ThemedStyledProps<P, ThemeInterface>>;
