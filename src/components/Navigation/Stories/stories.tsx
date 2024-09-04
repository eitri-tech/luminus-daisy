import React, {Component, createRef} from "react";
import CommonProps from "../../commonProps";
import MathHelper from "./MathHelper";

interface StoriesProps extends CommonProps {

}

interface StoryProps extends CommonProps {
    image?: string;
    name?: string;
    counterColor?: string;
    dataContent?: string;
}

interface StoryItemProps extends CommonProps {
    dataContent?: string;
}

class Story extends Component<StoryProps> {
    svgRef = createRef<SVGSVGElement>();

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
        let childrenCount = 1
        if(Array.isArray(children)){
            childrenCount = children.length
        }
        return (
            <div className="mr-2">
                <div style={{width: 86, height: 86}} className="relative flex flex-col justify-center items-center scrollbar-hide">
                    <svg ref={this.svgRef} style={{transform: "rotate(-72deg)"}} className="absolute z-0 top-0 bottom-0 left-0 right-0 story-circles  " data-segments={childrenCount} data-radius="40" data-stroke-width="3" />
                    <div style={{width: 70, height: 70, backgroundImage: `url(${image})`}} className="relative z-20 overflow-hidden rounded-full bg-center bg-no-repeat bg-cover">
                    </div>
                </div>
                <span className="block text-center line-clamp-1 text-xs">{name}</span>
            </div>
        );
    }
}

class StoryItem extends Component<StoryItemProps> {
    render() {
        return (
            <span>Step</span>
        );
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
