declare module '*.module.css' {
    const content: Record<string, string>;
    export default content;
}
declare module '*.module.scss' {
    const content: Record<string, string>;
    export default content;
}
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
declare module '*.css' {
    const content: Record<string, string>;
    export default content;
}

declare module "*.svg" {
    import { ReactElement, SVGProps } from "react";
    const content: (props: SVGProps<SVGElement>) => ReactElement;
    export default content;
}