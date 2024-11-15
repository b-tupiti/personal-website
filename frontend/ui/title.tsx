import { ReactNode } from "react";

const Title = ({children}: {children: ReactNode}) => {
    return ( 
        <h1 className="capitalize text-2xl font-bold text-dark dark:text-slate-200">
            {children}
        </h1> 
     );
}

export default Title;