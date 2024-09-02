import React, {Component} from "react";
import CommonProps from "../../commonProps";
import DOMPurify from "dompurify"

interface HTMLRenderProps extends CommonProps {
    html: string;
    allowUnsafeIframe?: boolean;
}

interface SanitizeProps {
    ADD_ATTR: string[];
    ALLOWED_TAGS?: string[];
}

const ALLOWED_TAGS: string[] = []

const ALLOWED_ATTR = [
    "allow",
    "allowFullscreen",
    "allowPaymentRequest",
    "contentDocument",
    "contentWindow",
    "csp",
    "height",
    "longDesc",
    "marginHeight",
    "marginWidth",
    "name",
    "referrerpolicy",
    "sandbox",
    "scrolling",
    "src",
    "srcdoc",
    "width",
]

class HTMLRender extends Component<HTMLRenderProps> {

    render() {
        const {
            id = "",
            className = "",
            html = "",
            allowUnsafeIframe = false,
        } = this.props

        const sanitizeProps: SanitizeProps = {
            ADD_ATTR: ALLOWED_ATTR,
        }

        if (allowUnsafeIframe) {
            ALLOWED_TAGS.push("iframe")
            sanitizeProps.ALLOWED_TAGS = ALLOWED_TAGS
        }

        const sanitizedHtml = DOMPurify.sanitize(this.props.html, sanitizeProps)
        console.log(sanitizedHtml)

        if (!html) {
            console.warn("HTMLRender: No HTML provided")
            return ""
        }

        return (
            <div
                id={id}
                className={className}
                dangerouslySetInnerHTML={{
                    __html: sanitizedHtml
                }}
            />
        )
    }

}

export default HTMLRender;
