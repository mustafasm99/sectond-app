// type secript file that handel the managment code 
// these type of files (root) -> only to orgnize the files and the projects 
// no effect on the project routes
// exam code 
"use client"
import Home                   from "@/app/page";
import { modal }              from "@/app/types/modal"
import {Modal}                from "@/components/ui/modal"
import {Button, ButtonGroup}  from "@nextui-org/button";
import axios, { Axios }       from "axios";
import { useState }           from "react";



// React.FC to adntefiy the types 
export const  BaseHome:React.FC<modal> =({ title})=>{
     
     const [loggingout , setloggingout] = useState(false)
     const [open , isOpen ]             = useState(true)
     

     const onClose =()=>{
          isOpen(false);
        }
     
     // handeling the Logout functinalty
     const Logout =()=>{
          const token = localStorage.getItem("access_token")
          axios.post("http://127.0.0.1:8000/auth/logout" , {} ,{
               headers:{
                    'Authorization':`Token ${token}`
               }
          })
          localStorage.removeItem("access_token");
          setloggingout(true)
     }
     
     return (
          <>
               {
                    !loggingout ? (
                         <div>
                              <header className="flex flex-center container my-5 main-header shadow-md p-5 mx-5">
                                   <Button onClick={Logout}> 
                                        Log out
                                   </Button>
                              </header>
                              <Modal isOpen={open} onClose={onClose} description="Test Desc" title={title} >
                                   Children
                              </Modal>
                         </div>
                    ) : (
                         <>
                              <Home />
                         </>
                    )
               }
          </>
     )
}

