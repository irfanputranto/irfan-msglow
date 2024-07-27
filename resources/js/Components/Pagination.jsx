import { Link } from "@inertiajs/react";
import React from "react";


export default function Pagination({links}) {
    return (
        <React.Fragment>
            <nav className="text-center mt-4">
                {links?.map(link => (
                    <Link 
                    preserveScroll
                    href={link?.url || ""}
                    key={link?.label}
                    className={"inline-block py-2 px-3 rounded-lg text-gray-900 dark:text-gray-200 text-xs " + (link?.active ? "bg-sky-400 hover:bg-sky-800" : "") + 
                        (!link?.url ? "!text-gray-500 cursor-not-allowed hover:text-black" : "hover:bg-blue-500 hover:text-white")
                    }
                    dangerouslySetInnerHTML={{__html: link?.label}} />
                    
                ))}
            </nav>
        </React.Fragment>
    )
}