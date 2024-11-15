import { ReactNode } from "react";

const TextXS = ({children}: {children: ReactNode}) => {
    return ( 
        <small className="dark:text-slate-500 text-slate-500 text-xs">
            {children}
        </small> 
     );
}

export default TextXS;