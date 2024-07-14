// type secript file that handel the managment code 
// these type of files (root) -> only to orgnize the files and the projects 
// no effect on the project routes
// exam code 
"use client"

import {Modal} from "@/components/ui/modal"


const  setPage =()=>{
     return (
          <Modal isOpen onClose={()=>{}} description="Test Desc" title="test" >
               Children
          </Modal>
     )
}

export default setPage