import React from "react";
import { FunctionComponent } from "react";
export interface ErrorAction {
    onClick: () => void;
    text: string;
}
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    block?: boolean;
    errorAction?: {
        onClick?: () => void;
        text: string;
    };
}
export declare const Input: FunctionComponent<InputProps>;
export declare const Container: import("styled-components").StyledComponent<"div", any, {
    block: boolean;
}, never>;
export declare const Label: import("styled-components").StyledComponent<"label", any, {}, never>;
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, React.InputHTMLAttributes<HTMLInputElement> & {
    hasError?: boolean | undefined;
}, never>;
export declare const ErrorWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ErrorMessage: import("styled-components").StyledComponent<"span", any, {}, never>;
