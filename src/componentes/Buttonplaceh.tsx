import { useState } from "react";

export function Buttonplaceh() {


    return (

        <div className='m-12 flex flex-auto justify-items-center justify-center '>

                      

                <div>

                    <button className=" flex ">
                        <a
                           className="min-w-[240px]  max-w-[380px] shadow flex justify-center py-3 px-4 border border-transparent text-lg font-semibold rounded-2xl text-white bg-green-800 hover:bg-blue-900"
                        >
                             Solicite agora uma consulta on-line
                        </a>

                    
                    </button>
                </div>

               

    

        </div >
    )
}

/*

   <footer className=" flex gap-2 mt-2" >

    <button
    type="submit"
    disabled={comment.length === 0}
    className=" p-2 bg-green-800 rounded-md border-transparent flex-1 flex justify-center items-center text-lg text-white font-semibold hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-100 focus:ring-blue-900 disabled:opacity-50 disabled:hover:bg-blue-900"
    >
    Fazer Consulta                      
    </button> 

    </footer > */

