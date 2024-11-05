import FlexBox from "@/ui/flexbox";


function Bio() {
    return (
        <FlexBox twstyle="flex flex-col gap-4 items-center lg:items-start">
            <h1 className="text-3xl lg:text-6xl dark:text-white text-dark  font-bold text-start sm:text-left  w-full">
                Brandon Tupiti
            </h1>
            <p className=" dark:text-slate-200 text-dark text-md mt-2">
            Software Developer / UIUX Designer.
            </p>
        </FlexBox>
    );
}

export default Bio;