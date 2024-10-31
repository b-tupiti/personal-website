import FlexBox from "@/ui/flexbox";
import Link from "next/link";

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

function HandlesAndResume() {
    return (
        <FlexBox 
          twstyle="flex justify-center gap-4 xl:ml-auto"
          >
            {
                  links.map(link => (
                        <Link 
                            key={link.id}
                            href={link.href}  
                            className="capitalize dark:text-white text-dark hover:text-slate-100"
                        >
                            {link.label}
                        </Link>
                    ))
            }
          
        
        </FlexBox> 
    );
}

export default HandlesAndResume;

