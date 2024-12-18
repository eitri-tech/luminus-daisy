import {InputHTMLAttributes} from "react";

/**
 * Props for the Select component.
 * 
 */
export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    placeholder?: string;
    useNativeControls?: boolean;
    menuClassName?: string;
}


/**
 * Props for the SelectItem component.
 */
export interface SelectItemProps extends InputHTMLAttributes<HTMLOptionElement> {
    onPress?: () => void;
}
