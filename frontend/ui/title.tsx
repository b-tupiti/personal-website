function Title(props: any) {
    return ( 
        <h1 className="capitalize text-2xl font-bold text-dark dark:text-slate-200">
            {props.children}
        </h1> 
     );
}

export default Title;