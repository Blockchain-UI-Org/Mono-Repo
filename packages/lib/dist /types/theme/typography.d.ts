type IFontInterface = {
    fontWeight?: number | string;
    fontSize?: string | number;
    lineHeight?: number | string;
    fontFamily?: string;
};
export type ITypographyTheme = {
    common: IFontInterface;
    h1: IFontInterface;
    h2: IFontInterface;
    h3: IFontInterface;
    h4: IFontInterface;
    h5: IFontInterface;
    h6: IFontInterface;
    display1: IFontInterface;
    display2: IFontInterface;
    body1: IFontInterface;
    body2: IFontInterface;
};
export declare const createTypography: () => ITypographyTheme;
export {};
