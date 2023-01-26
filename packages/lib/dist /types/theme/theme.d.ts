import media from "./media";
import { IIconTheme } from "./icons";
import { Subset } from "../typeutils";
import { ICreditCardTheme } from "./creditcard";
import { IChartTheme } from "./chart";
import { IProgressBarTheme } from "./progressbar";
import { IInputTheme } from "./input";
import { ITypographyTheme } from "./typography";
type IColorVariant = {
    bg: string;
    color: string;
};
export interface ThemeInterface {
    colors: {
        common: {
            black: string;
            white: string;
        };
        default: IColorVariant;
        secondary: IColorVariant;
        error: IColorVariant;
        warning: IColorVariant;
        info: IColorVariant & {
            midtone: string;
        };
        success: IColorVariant;
        grey: {
            100: string;
            200: string;
            300: string;
            500: string;
            700: string;
        };
    };
    media: typeof media;
    components: {
        CreditCard: ICreditCardTheme;
        Chart: IChartTheme;
        ProgressBar: IProgressBarTheme;
        Input: IInputTheme;
        Icons: IIconTheme;
    };
    typography: ITypographyTheme;
    shadows: {
        depth1: string;
        depth2: string;
    };
}
export declare const createTheme: (args?: Subset<ThemeInterface>) => ThemeInterface;
declare const DefaultTheme: ThemeInterface;
declare const DarkTheme: ThemeInterface;
export { DefaultTheme, DarkTheme };
