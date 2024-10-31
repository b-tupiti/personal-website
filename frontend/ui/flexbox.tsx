
/**
 * Only use flexbox properties from tailwind
 * @param props 
 * @returns 
 */
function FlexBox(props: any) {
    return (  
        <div 
            className={props.twstyle}
        >
            {props.children}
        </div>
    );
}

export default FlexBox;
 