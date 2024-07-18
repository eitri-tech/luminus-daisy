import React, { Component } from 'react';
import CommonProps from '../../commonProps';

interface DropdownProps extends CommonProps {}
interface DropdownButtonProps extends CommonProps {}
interface DropdownItemsProps extends CommonProps {
  tabIndex?:number
}
interface DropdownItemProps extends CommonProps {}

class DropdownButton extends Component<DropdownButtonProps> {
  render() {
    const {id, children, className = ""} = this.props;
    return (
      <div id={id} tabIndex={0} role="button" className={`btn m-1 ${className}`}>{children}</div>
    )
  }
}

class DropdownItems extends Component<DropdownItemsProps> {
  render(){
    const {id, children, className = "", tabIndex} = this.props;
    return (
      <ul id={id} tabIndex={tabIndex} className={`dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow ${className}`}>{children}</ul>
    )
  }
}

class DropdownItem extends Component<DropdownItemProps> {
  render(){
    const {id, children, className = ""} = this.props;
    return (
      <li id={id} className={className}><a href='#'>{children}</a></li>
    )
  }
}

class Dropdown extends Component<DropdownProps> {

  static readonly Button = DropdownButton
  static readonly Items = DropdownItems
  static readonly Item = DropdownItem

  render() {
    const { 
      id,
      className = "",
      children
    } = this.props;

    return (
      <div id={id} className={`dropdown ${className}`}>{children}</div>
    );
  }
}

export default Dropdown;
