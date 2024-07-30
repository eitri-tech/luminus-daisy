import {Component} from "react";
import CommonProps from "../../commonProps";

export interface StatsProps extends CommonProps { }

interface StatProps extends CommonProps { }

interface StatTitleProps extends CommonProps { }

interface StatValueProps extends CommonProps { }

interface StatDescProps extends CommonProps { }

interface StatFigureProps extends CommonProps { }

interface StatActionsProps extends CommonProps { }


class StatTitle extends Component<StatTitleProps> {
    render() {
        const {children, className = '', id} = this.props;
        return (
            <div
                id={id}
                data-e="StatTitle"
                className={`stat-title ${className}`}
            >
                {children}
            </div>
        );
    }
}

class StatValue extends Component<StatValueProps> {
    render() {
        const {children, className = '', id} = this.props;
        return (
            <div
                id={id}
                data-e="StatValue"
                className={`stat-value ${className}`}
            >
                {children}
            </div>
        );
    }
}

class StatDescription extends Component<StatDescProps> {
    render() {
        const {children, className = '', id} = this.props;
        return (
            <div
                id={id}
                data-e="StatDesc"
                className={`stat-desc ${className}`}
            >
                {children}
            </div>
        );
    }
}

class StatFigure extends Component<StatFigureProps> {
    render() {
        const {children, className = '', id} = this.props;
        return (
            <div
                id={id}
                data-e="StatFigure"
                className={`stat-figure ${className}`}
            >
                {children}
            </div>
        );
    }
}

class StatActions extends Component<StatActionsProps> {
    render() {
        const {children, className = '', id} = this.props;
        return (
            <div
                id={id}
                data-e="StatActions"
                className={`stat-actions ${className}`}
            >
                {children}
            </div>
        );
    }
}

export default class Stat extends Component<StatProps> {
    static readonly Title = StatTitle;
    static readonly Value = StatValue;
    static readonly Desc = StatDescription;
    static readonly Description = StatDescription;
    static readonly Figure = StatFigure;
    static readonly Actions = StatActions;

    render() {
        const {children, className = '', id} = this.props;
        return (
            <div
                id={id}
                data-e="Stat"
                className={`stat ${className}`}
            >
                {children}
            </div>
        );
    }
}