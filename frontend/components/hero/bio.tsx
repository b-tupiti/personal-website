import FlexBox from "@/ui/flexbox";


const Bio = () => {
    // TODO: fetch from the backend
    const name = "Brandon Tupiti";
    const bio = "Software Developer / UIUX Designer.";

    return (
        <FlexBox 
            twstyle="flex flex-col gap-4 items-center lg:items-start">
            <h1 
                className="text-3xl lg:text-5xl dark:text-white text-[#0a1c29]  font-extrabold text-start sm:text-left  w-full"
                >
                {name}
            </h1>
            <p 
                className=" dark:text-slate-200 text-dark text-md mt-2"
                >
                {bio}
            </p>
        </FlexBox>
    );
}

export default Bio;