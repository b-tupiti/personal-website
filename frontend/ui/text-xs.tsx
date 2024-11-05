function TextXS(props: any) {
    return ( 
        <small className="dark:text-slate-500 text-slate-500 text-xs">
            {props.children}
        </small> 
     );
}

export default TextXS;