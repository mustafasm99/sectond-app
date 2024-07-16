"use client"

import {useForm , SubmitHandler} from "react-hook-form";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react"
import axios, { Axios } from "axios";
import Home from "../page"
import { useState } from "react";
import { BaseHome } from "@/components/admin/home";



type SignUpForm = {
     username   : string;
     first_name : string;
     last_name  : string;
     email      : string;
     password   : string;
}
// when u use the useForm => mast be uppercase 
const SignInForm =()=>{
     const {register , handleSubmit , setError , formState:{errors , isSubmitting}} = useForm<SignUpForm>();
     const [submitting , setSubmitting] = useState(false)
     const [username , setUserName]     = useState("")

     const onSubmit:SubmitHandler<SignUpForm> = async (data) =>{
          try{
               const res = await axios.post("http://127.0.0.1:8000/auth/signup" , data)
               if (res.status == 200){
                    localStorage.setItem('access_token' , res.data.token)
                    setSubmitting(true)
                    setUserName(res.data.username)
               }
          }catch(error){
               setError("root" , {
                    message:"there is in error with the form"
               })
          }
     }
     
     return(
          <>
          {
               !submitting ? (
               <form className="w-full mx-20" onSubmit={handleSubmit(onSubmit)}>
               <div className="flex flex-center font-bold ">
                    <h3>
                         SignIn
                    </h3>
               </div>
               <div className="my-5">
                    <Input 
                    type="text" 
                    label="username" 
                    {...register("username" , {
                         required:"these field is required"
                    })}
                    />

                         {
                              errors.username && (
                                   <span className="text-red-500">
                                        {errors.username.message}
                                   </span>
                              )
                         }

                    <div className="flex flex-center my-5 justify-between">
                         <Input className="w-1/2" type="text"  label="first name" {...register("first_name" , {
                         required:"these field is required"
                         })} />
                         <Input className="w-1/2 ml-2" type="text"  label="last name" {...register("last_name" , {
                         required:"these field is required"
                         })}/>
                    </div>
                    {
                         (errors.first_name || errors.last_name) && (
                              <span className="text-red-500">
                                   {errors.first_name?.message}
                              </span>
                         )
                    }
                    <Input className="my-5" type="email" label="Email" {...register("password" , {
                         required:"these field is required"
                    })}/>

                    {
                         (errors.email) && (
                              <span className="text-red-500">
                                   {errors.first_name?.message}
                              </span>
                         )
                    }

                    <Input className="my-5" type="password" label="password" {...register("password" , {
                         required:"these field is required"
                    })}/>

                    {
                         (errors.password) && (
                              <span className="text-red-500">
                                   {errors.first_name?.message}
                              </span>
                         )
                    }

                    <div className="w-full flex flex-center">
                         <Button className="center" type="submit" disabled = {isSubmitting} >
                              {
                                   isSubmitting ? "Loading ..." : "Submit"
                              } 
                         </Button>
                    </div>
               </div>
          </form>
               ):
               (
                    <BaseHome title={username} />
               )
          }
          
          </>
     )
}

export default SignInForm