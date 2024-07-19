import {Component} from "react";
import CommonProps from "../../commonProps";

interface FileInputProps extends CommonProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    accept?: string;
    multiple?: boolean;
    value?: string;
    disabled?: boolean;
}

class FileInput extends Component<FileInputProps> {
    render() {
        const {
            id,
            className = "",
            accept,
            multiple,
            value,
            disabled,
            onChange
        } = this.props;

        return (
            <input
                data-e="FileInput"
                id={id}
                className={`file-input ${className}`}
                type="file"
                accept={accept}
                disabled={disabled}
                multiple={multiple}
                onChange={onChange}
                value={value}
            />
        );
    }
}

export default FileInput;