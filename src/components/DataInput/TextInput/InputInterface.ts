import {InputHTMLAttributes} from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    iconInsideLeft?: string;
    iconInsideRight?: string;
    labelInsideLeft?: string;
    labelInsideRight?: string;
    mask?: string | string[];
    onClear?: () => void;
    variant?: InputVariant;
}

export enum InputVariant {
    text = "text",
    mask = "mask",
}
