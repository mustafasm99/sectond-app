"use client"

import {useForm , SubmitHandler} from "react-hook-form";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react"
import axios, { Axios } from "axios";
import { useState } from "react";
import { BaseHome } from "@/components/admin/home";



// 2- create the types of the form 
type Formfields = {
     username       : string;
     password       : string;
}



// 1-create in ui form 
const Form = ()=>{
     // 3- Create the form object 
     const {register , handleSubmit , setError ,formState:{errors , isSubmitting}} = useForm<Formfields>();
     const [_submitting , _setSubmitting]    = useState(false)
     const [_userName , setUserName]         = useState("")
     
     // 5- create the submit handeler 
     const onSubmit : SubmitHandler<Formfields> = async (data) => {
          try{
               
               const res = await axios.post('http://127.0.0.1:8000/auth/login' , data)
               if (res.status == 200){
                    localStorage.setItem('access_token' , res.data.token)
                    _setSubmitting(true)
                    setUserName(res.data.user.username)
               }else{
                    console.log(res)
               }
              
          }catch(error){
               setError("root" , {
                    message:"there is in error with ur form"
               })
          }
     }

     return(     
          <>
               {
                    !_submitting ? (
                         <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-20">
                    <div className="flex flex-center rounded border-green-500 text-green-600 font-bold">
                         <h3>
                              Log in
                         </h3>
                    </div>
                    {/* 
                    
                         4- add the field to the form  
                         6- create the vlidate
                    
                    
                    */}
                    <div>
                         <Input type="text" label="email" {...register("username",{
                              required:"email required to submit the form",
                              
                         }
                         )} className="p-2 my-2" />
                         {/* showing the messages if errors.email */}
                         {errors.username && (
                              <span className="text-red-500">
                                   {errors.username.message}
                              </span>
                         )}
                         <Input type="password" label="password" {...register("password" , {required:"password is required",
                         minLength : {value:4,message:"the password must be more then 8 chars"}

                         })} className="p-2 my-2" />
                         {/* showin the error messages if errors.password */}
                         {errors.password && (
                              <span className="text-red-500">
                                   {errors.password.message}
                              </span>
                         )}

                         <span>{errors.root?.message}</span>
                    </div>
                    
                    <Button disabled={isSubmitting} color="primary" variant="light" className="p-2 my-2" type="submit">
                          {isSubmitting ? "Loading .." : "Submit"}
                    </Button>
               </form>
                    ):(
                         <BaseHome title={_userName} />
                    )
               }

          </>
     );
}

export default Form;

