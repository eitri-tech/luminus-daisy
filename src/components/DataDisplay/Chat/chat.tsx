import {Component} from "react";
import CommonProps from "../../commonProps";

interface ChatImageProps extends CommonProps {
    alt: string;
    src: string;
}


class ChatStart extends Component<CommonProps> {
    render() {

        const {
            children,
            className = "",
            id
        } = this.props;

        return (
            <div
                id={id}
                className={`chat chat-start ${className}`}
            >
                {children}
            </div>
        );
    }
}

class ChatEnd extends Component<CommonProps> {
    render() {

        const {
            children,
            className = "",
            id
        } = this.props;

        return (
            <div
                id={id}
                className={`chat chat-end ${className}`}
            >
                {children}
            </div>
        );
    }
}

class ChatBubble extends Component<CommonProps> {
    render() {

        const {
            children,
            className = "",
            id
        } = this.props;

        return (
            <div
                id={id}
                className={`chat-bubble ${className}`}
            >
                {children}
            </div>
        );
    }
}

class ChatImage extends Component<ChatImageProps> {
    render() {

        const {
            className = "",
            id,
            alt = "avatar",
            src = "https://via.placeholder.com/150"
        } = this.props;

        return (
            <div
                id={id}
                className={`chat-image avatar ${className}`}
            >
                <div
                    className="w-10 rounded-full"
                >
                    <img
                        src={src}
                        alt={alt}
                    />
                </div>
            </div>
        );
    }
}


class ChatHeader extends Component<CommonProps> {
    render() {

        const {
            children,
            className = "",
            id
        } = this.props;

        return (
            <div
                id={id}
                className={`chat-header ${className}`}
            >
                {children}
            </div>
        );
    }
}

class ChatFooter extends Component<CommonProps> {
    render() {

        const {
            children,
            className = "",
            id
        } = this.props;

        return (
            <div
                id={id}
                className={`chat-footer ${className}`}
            >
                {children}
            </div>
        );
    }
}


class Chat extends Component<CommonProps> {

    static Start = ChatStart;
    static End = ChatEnd;
    static Bubble = ChatBubble;
    static Image = ChatImage;
    static Header = ChatHeader;
    static Footer = ChatFooter;

    render() {

        const {
            children,
            className = "",
            id
        } = this.props;

        return (
            <div
                id={id}
                data-e="ChatBubble"
                className={className}
            >
                {children}
            </div>
        );
    }
}

export default Chat;