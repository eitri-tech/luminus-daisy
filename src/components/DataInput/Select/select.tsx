import React, {Component} from "react";
import { SelectProps, SelectItemProps } from "./SelectInterface";

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

    // const [label, setLabel] = useState("");

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
                    className={`select select-ghost w-full max-w-xs ${className}`}
                    {...rest}
                >
                    {composeChildren()}
                </select>
            );
        }

        const composeChildren = () => {
            if (Array.isArray(children)) {
                return children.map((child, index) => {
                    return (
                        <li key={`${id}-${index}`}>
                            <a
                                onClick={()=>{ onChange && onChange({target: { value: child.props.value}})}}>
                                {child.props.children}
                            </a>
                        </li>
                    )
                })
            }
            return children
        }

        return (
            <div
                id={id}
                data-e="Select"
                className="dropdown w-full"
            >
                <input
                      type="text"
                      readOnly
                      tabIndex={0}
                      value={placeholder}
                      className={`select select-bordered bg-base-100 cursor-pointer ${className}`}
                    />
                <ul tabIndex={0} className={`block menu dropdown-content bg-base-100 rounded-box z-[1] w-full shadow ${menuClassName}`}>
                    {composeChildren()}
                </ul>
            </div>
        )
        
    }
}

export default Select;
