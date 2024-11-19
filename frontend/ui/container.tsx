import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
    children: ReactNode,
    className?: string,
}

/**
 * This Container component has a default max width size of 1120px.
 * Overwrite the size using talwind max-w-[value], if desired.
 * @param {string} [className] - An optional className prop to apply custom widths.
 * @returns {JSX.Element} - Rendered container component.
 */
const Container = ({children, className}: ContainerProps): JSX.Element => {
    return (
        <div 
            className={twMerge("max-w-[1120px] m-auto", className)}
            >
            {children}
        </div>
    );
}

export default Container;