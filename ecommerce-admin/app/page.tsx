"use client"
import Form from "./(auth)/forms"
import SignInForm from "./(auth)/signin";
import axios, { Axios } from "axios";
import {BaseHome} from "@/components/admin/home"
import {Spinner} from "@nextui-org/spinner";
import { useEffect, useState } from "react";


type hometypes = {
  _isSubmitting? : boolean;
}

const Home : React.FC<hometypes>  = ({_isSubmitting}) => {
// hokes for login , diloge opne , loading mode
  const [login , isLogin]         = useState(false)
  const [loading , setLoading]    = useState(true)
  const [username , setusername]  = useState("")


  // checking if the user is loged in 
  const User = async ()=>{
    
    const token = localStorage.getItem("access_token")
    if (token){
      const res = await axios.get("http://127.0.0.1:8000/auth/test_token" , {
        headers:{
          'Authorization':`Token ${token}`
        }
      })

      if(res.status == 200){
        isLogin(true)
        setusername(res.data.username)
      }
    }

    setLoading(false)

  }
  // on login change -> or onwindoload
  useEffect(()=>{
    User();
  },[login]
  )

// handeling the loading and if the use is in 
  // if(loading) return <Spinner />
  if(login)   return <BaseHome title={username}/>

// return the forms if not 
  return (
    <div className="p-4 my-5 mx-5 border-green-400 border rounded-md flex flex-center flex-wrap md:flex-nowrap">
        
        {
          _isSubmitting ? (
            <Spinner />
          ) :(<>
                <Form /> 
                <SignInForm/> 
              </> 
            )
        } 
    </div>
  );
}


export default Home