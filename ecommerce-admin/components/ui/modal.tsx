"use client"

import {Dialog , DialogContent , DialogHeader , DialogTitle , DialogDescription} from "./dialog"

interface ModalProps { // create in interface or datatype 
     title : string; 
     description : string;
     isOpen :boolean;
     onClose:()=>void;  // type function 
     children?: React.ReactNode; // type is Node -> any other component 
};

export const Modal:React.FC<ModalProps> = ({           // export in component with our interface as ^
     title,description , isOpen , onClose , children   // input data types 
})=>{ // if input then //
     const onChange = (open:boolean)=>{ // event on change function (open){ do some code }
          if(!open){
               onClose()
          }
     };

     return ( // our component 
          <Dialog open={isOpen} onOpenChange={onChange}>
               <DialogContent>
                    
                    <DialogHeader>
                         
                         <DialogTitle>
                              {title}
                         </DialogTitle>

                         <DialogDescription>
                              {description}
                         </DialogDescription>

                    </DialogHeader>

                    <div>
                         {children}
                    </div>

               </DialogContent>
          </Dialog>
     )
}