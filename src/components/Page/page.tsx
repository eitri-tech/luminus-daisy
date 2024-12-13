import React, { Component } from "react";
import { WindowMetrics } from "../../utilities/WindowMetrics";
import { PageProps } from "./types";

/**
 * State for the Page component.
 * Used to store the offsets of the top and bottom bars.
 */
interface PageState {

  /**
   * The offset of the top bar.
   * Used to calculate the height of the top bar (Like notch or status bar).
   */
  topBarOffset: number;

  /**
   * The offset of the bottom bar.
   * Used to calculate the height of the bottom bar (Like bottom menu or gesture navigation).
   */
  bottomBarOffset: number;
}

/**
 * Use the Page component to create a page.
 * It is the main component of the experience.
 */
class Page extends Component<PageProps, PageState> {

  constructor(props: PageProps) {
    super(props);
    this.state = {
      topBarOffset: 0,
      bottomBarOffset: 0,
    };
  }

  /**
   * @ignore
   */
  async componentDidMount() {
    await this.calcInsets();
    this.updateViewportColor();
    this.updateStatusBarTextColor();
    this.updateTitle();
  }

  /**
   * @ignore
   */
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

  /**
   * @ignore
   */
  async calcInsets() {
    try {
      
      const { topInset, bottomInset} = this.props;
      const { top, bottom } = await WindowMetrics.getInsets();

      let topResult: number = 0;
      if(Number.isInteger(topInset)){
        topResult = Number(topInset)
      }
      if((typeof topInset === "boolean" && topInset) || topInset === "auto"){
        topResult = top
      }

      let bottomResult: number = 0;
      if(Number.isInteger(bottomInset)){
        bottomResult = Number(bottomInset)
      }
      if((typeof bottomInset === "boolean" && bottomInset) || bottomInset === "auto"){
        bottomResult = bottom
      }

      this.setState({
        topBarOffset: topResult,
        bottomBarOffset: bottomResult,
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
    const { topBarOffset, bottomBarOffset } = this.state;
    const { children, topInsetColor = "transparent", bottomInsetColor = "transparent", ...rest } = this.props;

    delete rest.topInset
    delete rest.bottomInset
    delete rest.statusBarTextColor
    delete rest.viewportColor

    return (
      <div
        id="page"
        data-e="Page"
        className="bg-base-100 flex flex-col justify-between h-screen"
        {...rest}
      >
        <div id="topbar-offset" style={{height: topBarOffset, zIndex: 3000, background: topInsetColor}} />
        <div className="overflow-y-auto overflow-x-hidden flex-1">
        {children}
        </div>
        <div id="bottombar-offset" style={{height: bottomBarOffset, zIndex: 3000, background: bottomInsetColor}} />
      </div>
    );
  }
}

export default Page;
