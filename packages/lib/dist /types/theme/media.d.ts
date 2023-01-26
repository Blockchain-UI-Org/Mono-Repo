export type Device = "xsmall" | "mobile" | "tablet" | "desktop";
export type DeviceSizes = "xSmall" | "small" | "medium" | "large";
export type BreakPointDirection = "up" | "down";
export declare const MEDIA_WIDTHS: Record<DeviceSizes, number>;
declare const media: {
    MEDIA_WIDTHS: Record<DeviceSizes, number>;
    breakpoints: Record<BreakPointDirection, Record<Device, string>>;
};
export default media;
