import { Sidebar } from "../componentes/Sidebar"
import { Header } from "../componentes/Header"
import { Duvidas } from "../componentes/Duvidas"
import Faq from "../componentes/Faq"
import { BottomStyle } from "../componentes/BottomStyle"
import { Rodape } from "../componentes/Rodape"
import Fuction from "../componentes/Fuction"



export function Event () {
    return (
        <div>
            <Header />
            <Fuction  /> 
            <Duvidas />
            <Faq /> 
            <BottomStyle />
            <Rodape />                     
        </div>    
    )        
}