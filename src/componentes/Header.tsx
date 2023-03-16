import Logo from "./Logo";

import { ArrowRight, List } from "phosphor-react"

export function Header () {
    return (
        <header className="  w-full py-5 grid grid-flow-col bg-gray-700 border-b border-gray-600" >
            <div className=" px-6 row-start-1 row-span-1" >
                <Logo />
            </div>
            <div className=" px-7 flex items-center row-end-2 row-span-2 flex-row-reverse">
                <List size={42}/>
            </div>
           
        </header> 
    )     
    
} 

