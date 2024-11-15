import { ReactNode } from "react";

/**
 * Only use flexbox properties from tailwind
 * @param props 
 * @returns 
 */
const FlexBox = ({children, twstyle}: {children: ReactNode, twstyle: string}) => {
    return (  
        <div 
            className={twstyle}
        >
            {children}
        </div>
    );
}

export default FlexBox;
 