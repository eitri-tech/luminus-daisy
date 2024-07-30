import React, { Component } from "react";
import { WindowMetrics } from "../../utilities/WindowMetrics";
import { PageProps } from "./types";

interface PageState {
  paddingTop: number;
  paddingBottom: number;
}

class Page extends Component<PageProps, PageState> {

  constructor(props: PageProps) {
    super(props);
    this.state = {
      paddingTop: 0,
      paddingBottom: 0,
    };
  }

  async componentDidMount() {
    await this.calcInsets();
    this.updateViewportColor();
    this.updateStatusBarTextColor();
    this.updateTitle();
  }

  async componentDidUpdate(prevProps: PageProps) {
    if (
      prevProps.topInset !== this.props.topInset ||
      prevProps.bottomInset !== this.props.bottomInset
    ) {
      await this.calcInsets();
    }

    if (prevProps.viewportColor !== this.props.viewportColor) {
      this.updateViewportColor();
    }

    if (prevProps.statusBarTextColor !== this.props.statusBarTextColor) {
      this.updateStatusBarTextColor();
    }

    if (prevProps.title !== this.props.title) {
      this.updateTitle();
    }
  }

  async calcInsets() {
    try {
      const { top, bottom } = await WindowMetrics.getInsets();
      this.setState({
        paddingTop: this.props.topInset ? top : 0,
        paddingBottom: this.props.bottomInset ? bottom : 0,
      });
    } catch (error) {
      console.error("Error calculating insets:", error);
    }
  }

  updateViewportColor() {
    const { viewportColor } = this.props;
    if (viewportColor) {
      const style = `background-color: var(--${viewportColor})`;
      window.document.documentElement.setAttribute("style", style);
      window.document.body.setAttribute("style", style);
    }
  }

  updateStatusBarTextColor() {
    const { statusBarTextColor } = this.props;
    const connector = window?.EITRI?.connector?.invokeMethod
    if (statusBarTextColor && connector) {
      const method =
        statusBarTextColor === "white"
          ? "setStatusBarTextWhite"
          : "setStatusBarTextBlack";
          connector(method);
    }
  }

  updateTitle() {
    document.title = this.props.title ?? "";
  }

  render() {
    const { paddingTop, paddingBottom } = this.state;
    const { children, ...rest } = this.props;

    delete rest.topInset
    delete rest.bottomInset
    delete rest.statusBarTextColor
    delete rest.viewportColor

    return (
      <div
        id="page"
        data-e="Page"
        style={{ paddingTop, paddingBottom }}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

export default Page;
