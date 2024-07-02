import React, { useEffect, useState } from "react";
import { windowMetrics } from "../../utilities/WindowMetrics"
import { PageProps } from "./types"

/**
 * The Window component controls layout aspects of the application.
 *
 * This component needs to wrap your entire page.
 *
 * Important: **Do not use it inside other components**.
 *
 * Basic example:
 *
 * ```jsx
 * <Window topInset bottomInset>
 *   <View>
 *     <Text.H1>
 *       According to the stories, the Bifrost Bridge was created by the Norse gods
 *       as a link between different planes of existence.
 *       It is described as a solid yet ethereal structure that
 *       allows the gods to travel between Asgard, their divine home, and Earth.
 *     </Text.H1>
 *   </View>
 * </Window>
 * ```
 * @param props Window Properties
 * @hasChildren
 */

const Page: React.FC<PageProps> = ({
  title,
  viewportColor,
  topInset,
  bottomInset,
  statusBarTextColor,
  children,
  ...rest
}) => {
  const [paddingTop, setPaddingTop] = useState(0);
  const [paddingBottom, setPaddingBottom] = useState(0);

  useEffect(() => {
    window.document.title = title || "";
  }, [title]);

  useEffect(() => {
    const calcInsets = async () => {
      const { top, bottom } = await windowMetrics.getInsets();
      if (topInset) {
        setPaddingTop(top);
      }
      if (bottomInset) {
        setPaddingBottom(bottom);
      }
      return {top, bottom}
    };
    calcInsets()
  }, [
    topInset,
    bottomInset
  ])

  useEffect(() => {
    if (viewportColor) {
      const style = `background-color: var(--${viewportColor})`;
      window.document.querySelector("html")?.setAttribute("style", style);
      window.document.querySelector("body")?.setAttribute("style", style);
    }
  }, [viewportColor])

  useEffect(()=>{
    if (statusBarTextColor) {
      const method =
        statusBarTextColor === "white"
          ? "setStatusBarTextWhite"
          : "setStatusBarTextBlack";
      window?.EITRI?.connector?.invokeMethod(method);
    }
  }, [statusBarTextColor])

  delete rest.style
  

  return (
    <main
      id="window"
      data-cy="window"
      style={{paddingTop, paddingBottom}}
      {...rest}
    >
      {children}
    </main>
  );
};

export default Page;
