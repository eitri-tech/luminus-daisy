import React, {Component} from "react";
import CommonProps from "../../commonProps";
import {Player} from "@lottiefiles/react-lottie-player"

interface AnimatorProps extends CommonProps {
    src: string;
    autoPlay?: boolean;
    loop?: boolean;
    speed?: number;
    height?: string | number;
    width?: string | number;
    style?: object;
    onClick?: () => void;
}

class Animator extends Component<AnimatorProps> {
    render() {
        const {
            id,
            className = "",
            src,
            autoPlay = true,
            loop = true,
            speed = 1,
            height = "auto",
            width = 200,
        } = this.props;

        return (
            <Player
                id={id}
                data-e="Animator"
                className={className}
                src={src}
                autoplay={autoPlay}
                loop={loop}
                speed={speed}
                style={{height, width}}
            />
        );
    }
}

export default Animator;
