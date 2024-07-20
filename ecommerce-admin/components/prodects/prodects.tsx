"use client"

import {Card , CardFooter , Image , Button} from "@nextui-org/react"
import axios from "axios";
import { useEffect, useState } from "react";

const  Cards =()=>{
     
     // Hoks
     const [cards , setCards] = useState([])
     const prodects = async() =>{
          const res = await axios.get("http://127.0.0.1:8000/prodect/get_offiers")
          if (res.status == 200){
               const cards = res.data
               console.log(cards)
          }
          else{
               console.log("error with the post ");
               
          }
     };
     // useEffect(prodects , [])
     prodects()
     return (<>
     <Card isFooterBlurred
           radius="lg"
           className="border-none"
     >
     </Card>
     
     
     </>)
}

export default Cards