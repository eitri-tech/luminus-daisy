import React, {Component, ReactElement} from "react";
import { SelectProps, SelectItemProps } from "./SelectInterface";
import { EventUtils } from "../../../utilities/EventUtils";

class SelectItem extends Component<SelectItemProps> {
    render() {
        const {
            id,
            className = "",
            ...rest
        } = this.props;

        return (
            <option
                id={id}
                data-e="SelectItem"
                className={`${className}`}
                {...rest}
            >
                {this.props.children}
            </option>
        );
    }
}

class Select extends Component<SelectProps> {

    private readonly inputRef: { current: HTMLInputElement | null };

    private selectValue: string | undefined;

    constructor(props: SelectProps) {
        super(props);
        this.inputRef = React.createRef();
    }

    static readonly Item = SelectItem;

    render() {
        const {
            id,
            className = "",
            placeholder,
            children,
            useNativeControls,
            menuClassName,
            onChange,
            value,
            ...rest
        } = this.props;

        if(useNativeControls) {

            const firstItem = <SelectItem disabled selected>{placeholder}</SelectItem>

            const composeChildren = () => {
                if (Array.isArray(children)) {
                    return [firstItem, ...children];
                }
                return [firstItem, children];
            }

            return (
                <select
                    id={id}
                    data-e="Select"
                    onChange={onChange}
                    value={value}
                    className={`select select-ghost w-full max-w-xs ${className}`}
                    {...rest}
                >
                    {composeChildren()}
                </select>
            );
        }

        const optionSelected = (element: ReactElement) => {
            if(onChange){

                const optionForEvent: HTMLSelectElement = window.document.createElement("select");
                optionForEvent.value = element.props.value;
                const syntheticEvent = EventUtils.createOnChangeEvent(optionForEvent, element.props.value )
                this.selectValue = element.props.children
                onChange(syntheticEvent as React.ChangeEvent<HTMLSelectElement>);
            }
            if(this.inputRef.current){
                this.inputRef.current?.focus()
                this.inputRef.current?.blur()
            }
        }

        const composeChildren = () => {
            if (Array.isArray(children)) {
                return children.map((child, index) => {
                    return (
                        <li key={`${id}-${index}`}>
                            <a
                                onClick={()=>{ optionSelected(child)  }}>
                                {child.props.children}
                            </a>
                        </li>
                    )
                })
            }
            return children
        }

        if(rest.disabled){
            return (
                <input
                    ref={this.inputRef}
                    type="text"
                    readOnly
                    disabled
                    tabIndex={0}
                    value={this.selectValue || placeholder || ""} 
                    className={`select select-bordered bg-base-100 cursor-pointer ${className}`}
                />
            )
        }

        return (
            <div
                id={id}
                data-e="Select"
                className="dropdown w-full"
            >
                <input
                    ref={this.inputRef}
                    type="text"
                    readOnly
                    tabIndex={0}
                    value={this.selectValue || placeholder || ""} 
                    className={`select select-bordered bg-base-100 cursor-pointer ${className}`}
                />
                <ul 
                    tabIndex={0} 
                    className={`block menu dropdown-content bg-base-100 rounded-box z-[1] w-full shadow ${menuClassName}`}
                >
                    {composeChildren()}
                </ul>
            </div>
        )
        
    }
}

export default Select;
