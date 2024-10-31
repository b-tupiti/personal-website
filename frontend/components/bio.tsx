import FlexBox from "@/ui/flexbox";


function Bio() {
    return (
        <FlexBox twstyle="flex flex-col gap-4">
            <h1 className="text-4xl lg:text-6xl dark:text-white text-dark  font-extrabold text-center sm:text-left  w-full">Brandon Tupiti</h1>
            <p className=" dark:text-white text-dark">
            Software Developer / UIUX Designer.
            </p>
        </FlexBox>
    );
}

export default Bio;