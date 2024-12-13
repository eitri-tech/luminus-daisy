import React, {Component} from "react";
import CommonProps from "../../commonProps";

interface VideoProps extends CommonProps {
    source: string;
    width: string | number;
    height: string | number;
    controls: boolean;
    autoPlay: boolean;
    muted: boolean;
    thumbnail: string;
    type: string;
    youTubeId: string;
    loop: boolean;
}

class Video extends Component<VideoProps> {
    render() {
        const {
            id = "",
            className = "w-full h-auto",
            autoPlay = false,
            controls = false,
            muted = true,
            loop = false,
            source = "",
            thumbnail = "",
            type = "video/mp4",
            youTubeId = "",
            width = "100%",
            height = "100%",
        } = this.props

        if (youTubeId) {
            const urlEmbed: string = `https://www.youtube.com/embed/${youTubeId}`;

            return (
                <iframe
                    data-e="Video"
                    className={className}
                    id={id}
                    title="video"
                    src={urlEmbed}
                    frameBorder="0"
                    allow="accelerometer; autoplay; autoplay *; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{display: "inline-block"}}
                    width={width}
                    height={height}
                >
                </iframe>
            );
        }

        return (
            <video
                data-e="Video"
                className={className}
                id={id}
                playsInline={false}
                style={{display: "inline-block"}}
                muted={muted}
                poster={thumbnail}
                autoPlay={autoPlay}
                controls={controls}
                width={width}
                height={height}
                loop={loop}
            >
                <source
                    src={source}
                    type={type}
                />
                Seu navegador não suporta o elemento de vídeo.
            </video>
        );
    }
}

export default Video;

