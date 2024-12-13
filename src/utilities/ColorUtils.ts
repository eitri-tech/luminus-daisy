export default class ColorUtils {
    
    static colorGroups = [
        "primary",
        "secondary",
        "accent",
        "neutral",
        "info",
        "success",
        "warning",
        "error"
    ]

    static classNameHaveTextColor(className: string) {
        return ColorUtils.colorGroups.some(colorGroup => className.includes("text-" + colorGroup));
    }

    static classNameHaveBgColor(className: string) {
        return ColorUtils.colorGroups.some(colorGroup => className.includes("bg-" + colorGroup));
    }

}
