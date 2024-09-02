import React, {Component} from "react";
import CommonProps from "../../commonProps";

interface HeroProps extends CommonProps {
    overlaySrc?: string;
    overlayClassName?: string;
}

class HeroContent extends Component<CommonProps> {
    render() {
        const {
            children,
            className = "",
            id,
        } = this.props

        return (
            <div
                id={id}
                data-e="HeroContent"
                className={`hero-content ${className}`}
            >
                {children}
            </div>
        );
    }
}

class Hero extends Component<HeroProps> {

    static Content = HeroContent;

    render() {
        const {
            children,
            className = "",
            id,
            overlaySrc = "",
            overlayClassName = "",
        } = this.props
        return (
            <div
                id={id}
                className={`hero ${className}`}
                style={{
                    backgroundImage: overlaySrc ? `url(${overlaySrc})` : undefined,
                }}
            >
                {overlaySrc && <div className={`hero-overlay bg-opacity-60 ${overlayClassName}`} />}
                {children}
            </div>
        );
    }
}

export default Hero;
