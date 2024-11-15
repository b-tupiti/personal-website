import FlexBox from "@/ui/flexbox";
import Link from "next/link";

const HandlesAndResume = () => {
    // TODO: fetch from the backend
    const links = [
        {
              id: "1",
              label: "Linkedin",
              href: "https://google.com",
        },
        {
              id: "2",
              label: "Github",
              href: "https://github.com/b-tupiti",
        },
        {
              id: "3",
              label: "Resume",
              href: "https://guthib.com",
        }
    ]

    return (
        <FlexBox 
          twstyle="flex mt-2 lg:mt-0 gap-4 xl:ml-auto xl:mr-8"
          >
            {
                links.map(link => (
                    <Link 
                        key={link.id}
                        href={link.href}  
                        className="capitalize dark:text-slate-400 text-dark text-sm "
                    >
                        {link.label}
                    </Link>
                ))
            }
        </FlexBox> 
    );
}

export default HandlesAndResume;

