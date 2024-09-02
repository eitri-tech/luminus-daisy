import React, {Component} from "react";
import CommonProps from "../../commonProps";

interface TimelineItemProps extends CommonProps {
    firstItem?: boolean;
    lastItem?: boolean;
    classNameFirstLine?: string;
    classNameLastLine?: string;
}


class TimelineItem extends Component<TimelineItemProps> {
    render() {

        const {
            children,
            firstItem = false,
            lastItem = false,
            classNameFirstLine = "",
            classNameLastLine = ""
        } = this.props;

        return (
            <li>
                {firstItem ? null : <hr className={classNameFirstLine} />}
                {children}
                {lastItem ? null : <hr className={classNameLastLine} />}
            </li>
        );
    }
}

class TimelineStart extends Component<CommonProps> {
    render() {

        const {
            children,
            className = "",
            id
        } = this.props;

        return (
            <div
                id={id}
                className={`timeline-start ${className}`}
            >
                {children}
            </div>
        );
    }
}

class TimelineMiddle extends Component<CommonProps> {
    render() {

        const {
            children,
            className = "",
            id
        } = this.props;

        return (
            <div
                id={id}
                className={`timeline-middle ${className}`}
            >
                {children}
            </div>
        );
    }

}

class TimelineEnd extends Component<CommonProps> {
    render() {

        const {
            children,
            className = "",
            id
        } = this.props;

        return (
            <div
                id={id}
                className={`timeline-end ${className}`}
            >
                {children}
            </div>
        );
    }
}

class Timeline extends Component<CommonProps> {

    static Item = TimelineItem;
    static Start = TimelineStart;
    static Middle = TimelineMiddle;
    static End = TimelineEnd;

    render() {

        const {
            children,
            className = "",
            id
        } = this.props;

        return (
            <ul
                id={id}
                data-e="Timeline"
                className={`timeline ${className}`}
            >
                {children}
            </ul>
        );
    }
}

export default Timeline;
