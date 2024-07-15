/* eslint-disable @typescript-eslint/no-explicit-any */
export type insets = {
  top: number
  bottom: number
}

export class WindowMetrics {
  static async getInsets(): Promise<insets> {
    const { EITRI } = window
    if (EITRI) {
      const { superAppData } = EITRI.miniAppConfigs
      const { safeAreaInsets, platform } = superAppData
      const { top, bottom } = safeAreaInsets
      const windowComponent = window.document.querySelector(".w")
      if (windowComponent) {
        if (platform === "android") {
          const topValue = top / window.devicePixelRatio
          const bottomValue = bottom / window.devicePixelRatio
          return { top: topValue, bottom: bottomValue }
        }
        return { top, bottom }
      }
    }
    return { top: 0, bottom: 0 }
  }
}
