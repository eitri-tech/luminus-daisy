import React, {Component, createRef} from "react";
import CommonProps from "../../commonProps";
import MathHelper from "./MathHelper";
import View from "../../View/view";
import FullScreen from "../../Others/Fullscreen/fullscreen";
import Video from "../../Others/Video/video";

interface StoriesProps extends CommonProps {

}

interface StoryProps extends CommonProps {
    image?: string;
    name?: string;
    counterColor?: string;
    dataContent?: string;
}

interface StoryState {
    isFullScreen: boolean;
}

enum StoryItemContentType {
    image = "image",
    video = "video",
}

interface StoryItemProps extends CommonProps {
    dataContent?: string;
    id?: string;
    content?: string;
    contentType?: StoryItemContentType;
    cta?: () => void;
}

class Story extends Component<StoryProps, StoryState> {
    svgRef = createRef<SVGSVGElement>();

    constructor(props: StoryProps) {
        super(props);
        this.state = {
            isFullScreen: false,
        };
    }

    generateSemiCircles(){
        const { counterColor = "red" } = this.props
        const svgElement:SVGElement | null = this.svgRef.current;
        if(svgElement){
            const segments = Number(svgElement.dataset.segments); 
            const radius = Number(svgElement.dataset.radius); 
            const strokeWidth = Number(svgElement.dataset.strokeWidth);
            svgElement.setAttribute("height", `${(radius + strokeWidth) * 2}`)
            svgElement.setAttribute("width", `${(radius + strokeWidth) * 2}`)
            MathHelper.getArcAngles(segments, Math.max(strokeWidth * 2, 16))
            .map(interval => {
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', MathHelper.generateSVGPath(interval[0], interval[1], radius, strokeWidth));
                path.setAttribute("stroke-width", `${strokeWidth}px`)
                path.setAttribute("stroke", counterColor)
                path.setAttribute("fill", "transparent")
                svgElement.appendChild(path);
            })
        }
    }

    componentDidMount(): void {
        this.generateSemiCircles()
    }

    
    render() {
        const {children, image, name} = this.props;
        const { isFullScreen } = this.state;
        let childrenCount = 1
        if(Array.isArray(children)){
            childrenCount = children.length
        }
        return (
            <div className="mr-2">
                <View onClick={this.toggleFullScreen}>
                <div style={{width: 86, height: 86}} className="relative flex flex-col justify-center items-center scrollbar-hide">
                    <svg ref={this.svgRef} style={{transform: "rotate(-72deg)"}} className="absolute z-0 top-0 bottom-0 left-0 right-0 story-circles  " data-segments={childrenCount} data-radius="40" data-stroke-width="3" />
                    <div style={{width: 70, height: 70, backgroundImage: `url(${image})`}} className="relative z-20 overflow-hidden rounded-full bg-center bg-no-repeat bg-cover">
                    </div>
                </div>
                </View>
                <span className="block text-center line-clamp-1 text-xs">{name}</span>
                {isFullScreen && children}
            </div>
        );
    }

    toggleFullScreen = () => {
        this.setState(prevState => ({ isFullScreen: !prevState.isFullScreen }));
    };
}

class StoryItem extends Component<StoryItemProps> {
    render() {
        const { id, contentType, content, cta } = this.props;
        return (
            <FullScreen enabled={true}>
                <div className="relative flex justify-center items-center w-full h-full">
                    {this.buildContent(contentType, content)}
                    <p className="absolute top-5 text-center text-yellow-300 text-2xl font-bold">
                        {contentType}-{id}
                    </p>
                    <button onClick={cta} className="absolute bottom-11 left-1 bg-black bg-opacity-100 text-yellow-300 px-4 py-2 rounded">
                        Action
                    </button>
                    <button className="absolute bottom-11 right-1 bg-black bg-opacity-100 text-yellow-300 px-4 py-2 rounded">
                        Next Story
                    </button>
                </div>
            </FullScreen>
        );
    }

    buildContent(contentType: StoryItemContentType, content: string) {
        switch (contentType) {
            case StoryItemContentType.image:
                return <img src={content} alt="content" id={this.props.id} className="w-full h-auto"/>
            case StoryItemContentType.video:
                return <Video
                    source={content}
                    className="w-auto h-auto object-fill min-h-full"
                    autoPlay
                    muted
                    type="video/mp4"
                    loop
                />
        }
    }
}

class Stories extends Component<StoriesProps> {

    static readonly Item = Story;
    static readonly Step = StoryItem;

    render() {
        const {children} = this.props;

        let childrenCount = 1
        if(Array.isArray(children)){
            childrenCount = children.length
        }

        return (
            <div className="overflow-x-auto overflow-y-hidden">
                <div className="flex my-4" style={{width: childrenCount * (86 + 10)}}>
                    {children}
                </div>
            </div>
        );
    }
}

export default Stories;
