function Title(props: any) {
    return ( 
        <h1 className="border-b border-b-slate-700 text-center capitalize text-2xl font-semibold text-slate-600 dark:text-slate-200 lg:max-w-[40rem] m-auto py-6">
            {props.children}
        </h1> 
     );
}

export default Title;