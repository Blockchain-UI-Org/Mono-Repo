export type IIconSize = {
    xsmall?: string;
    small: string;
    medium: string;
    large: string;
    xlarge?: string;
};
export type IIconTheme = {
    sizes: {
        crypto: IIconSize;
        regular: IIconSize;
        account: IIconSize;
        filled: IIconSize;
        thin: IIconSize;
    };
};
export declare const createIconTheme: () => IIconTheme;
