import React, { Component } from 'react';
import CommonProps from '../../commonProps';

interface TabProps extends CommonProps {}
interface TabContentProps extends CommonProps {
  label: string;
  name: string;
  defaultChecked?:boolean;
  tabId?: string;
  tabClassName?:string;
}

class TabContent extends Component<TabContentProps> {
  render() {
    const { 
      id,
      tabId,
      tabClassName = "",
      className = "", 
      children,
      label,
      name,
      defaultChecked
    } = this.props;

    return (
      <>
        <input id={tabId} type="radio" name={name} role="tab" className={`tab ${tabClassName}`} aria-label={label} defaultChecked={defaultChecked} />
        <div id={id} role="tabpanel" className={`tab-content bg-base-100 border-base-300 rounded-box ${className}`}>{children}</div>
      </>
    );
  }
}

class Tab extends Component<TabProps> {

  static readonly Content = TabContent

  render() {
    const { 
      id,
      className = "", 
      children,
    } = this.props;

    return (
      <div id={id} role="tablist" className={`tabs ${className}`}>
        {children}
      </div>
    );
  }
}

export default Tab;
