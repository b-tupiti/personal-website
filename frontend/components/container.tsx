function Container(props: any) {
    return (
        <div className="max-w-[1120px] m-auto">
            {props.children}
        </div>
    );
}

export default Container;