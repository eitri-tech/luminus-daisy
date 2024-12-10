import {InputHTMLAttributes} from "react";

/**
 * Props for the TextInput component.
 * 
 */
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    iconInsideLeft?: string;
    iconInsideRight?: string;
    labelInsideLeft?: string;
    labelInsideRight?: string;

    /**
     * The mask to use for the input.
     */
    mask?: string | string[];
    onClear?: () => void;
    variant?: InputVariant;
}

export enum InputVariant {
    text = "text",
    mask = "mask",
}
